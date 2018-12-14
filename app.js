import bodyParser from 'body-parser';
import cookieParser from 'cookie-parser';
import Debug from 'debug';
import express from 'express';
import path from 'path';
import helmet from 'helmet';
import cors from 'cors';
import interceptor from 'express-interceptor';

// import favicon from 'serve-favicon';

import index from './routes/index';
import dbConnector from './database/connector';
import middlewareMonitoring from './utils/middlewares/monitoring.middleware';
import errorMiddleware from './utils/middlewares/error.middleware';

const app = express();
const debug = Debug('q:app');


// uncomment after placing your favicon in /public
// app.use(favicon(path.join(__dirname, 'public', 'favicon.ico')));

// secure apps by setting various HTTP headers
app.use(helmet());

// enable Cross Origin Resource Sharing
app.use(cors());

// request monitoring
app.use(middlewareMonitoring);


app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
  extended: false
}));

app.use(cookieParser());

app.use(express.static(path.join(__dirname, 'public')));
app.use('/api-docs', express.static('apidoc'));

const finalParagraphInterceptor = interceptor((req, res) => {
  return {
    isInterceptable: () => true,
    intercept: (body, send) => {
      try {
        req.responseBody = JSON.parse(body);
      } catch (e) {
        req.responseBody = body;
      }
      send(body);
    }
  };
});

app.use(finalParagraphInterceptor);

app.use('/', index);



// if error is not an instanceOf APIError, convert it.
app.use(errorMiddleware.converter);

// catch 404 and forward to error handler
app.use(errorMiddleware.notFound);

// error handler, send stacktrace only during development
app.use(errorMiddleware.handler);

// Handle uncaughtException
process.on('uncaughtException', (err) => {
  debug('Caught exception: %j', err);
  process.exit(1);
});

export default app;
