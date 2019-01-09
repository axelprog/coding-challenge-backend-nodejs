const httpStatus = require('http-status');

const { User } = require('../models/');
const { debug } = require('../utils/logger');

/**
 * @apiDefine UserDefine
 * @apiParam (Request body) {String} firstName User first name
 * @apiParam (Request body) {String} lastName User last naem
 * @apiParam (Request body) {String} email User email for login
 * @apiParam (Request body) {String} password User password
 * @apiParam (Request body) {String="admin","manager","police","user"} role Possible user roles
 * @apiParam (Request body) {Number} department Id of department where work a policeman
 * @apiParam (Request body) {[Department](#api-_Custom_types-ObjectDepartment)} work Data of department where work a policeman
 */

/**
 * @api {OBJECT} User User
 * @apiVersion 1.0.0
 * @apiGroup .Custom types
 * @apiUse UserDefine
 */

/**
 * @api {post} api/v1/users Create
 * @apiDescription Create new user
 * @apiVersion 1.0.0
 * @apiName create user
 * @apiGroup Users
 * @apiPermission public
 *
 * @apiUse UserDefine
 *
 * @apiSuccess (Success 201) {Number} responseCode     HTTP Response Code
 * @apiSuccess (Success 201) {String} responseMessage  Response message
 * @apiSuccess (Success 201) {Object} response         Response object
 * @apiSuccess (Success 201) {[User](#api-_Custom_types-ObjectUser)}  response.user         user
 * @apiSuccess {[User](#api-_Custom_types-ObjectUser)}  response.user         user
 *
 * @apiError (Bad Request 400)  ValidationError  Some parameters may contain invalid values
 */

exports.userCreate = async (req, res, next) => {
  try {
    const userInstance = await User.create(req.body);

    res.status(httpStatus.CREATED);
    return res.json({
      responseCode: httpStatus.CREATED,
      responseMessage: 'CREATED',
      response: { user: userInstance }
    });
  } catch (error) {
    debug('userCreate', 'error', error);
    return next(error);
  }
};

/**
 * @api {get} api/v1/users/:id Get
 * @apiDescription Get an exist user by id
 * @apiVersion 1.0.0
 * @apiName get user data
 * @apiGroup Users
 * @apiPermission public
 *
 * @apiParam {Number} id
 *
 * @apiSuccess {Number} responseCode     HTTP Response Code
 * @apiSuccess {String} responseMessage  Response message
 * @apiSuccess {Object} response         Response object
 * @apiSuccess {[User](#api-_Custom_types-ObjectUser)}  response.user         user
 *
 * @apiError (Bad Request 400)  ValidationError  Some parameters may contain invalid values
 */

exports.userGet = async (req, res, next) => {
  try {
    const userInstance = await User.findOne({
      where: { id: req.params.id },
      include: [{ association: 'work', attributes: ['name', 'description'] }]
    });

    res.status(httpStatus.OK);
    return res.json({
      responseCode: httpStatus.OK,
      responseMessage: 'OK',
      response: { user: userInstance }
    });
  } catch (error) {
    debug('userGet', 'error', error);
    return next(error);
  }
};

/**
 * @api {put} api/v1/users/:id Update
 * @apiDescription Update an exist user data
 * @apiVersion 1.0.0
 * @apiName update user
 * @apiGroup Users
 * @apiPermission public
 *
 * @apiUse UserDefine
 *
 * @apiSuccess {Number} responseCode     HTTP Response Code
 * @apiSuccess {String} responseMessage  Response message
 * @apiSuccess {Object} response         Response object
 * @apiSuccess {[User](#api-_Custom_types-ObjectUser)}  response.user         user
 *
 * @apiError (Bad Request 400)  ValidationError  Some parameters may contain invalid values
 */

exports.userUpdate = async (req, res, next) => {
  try {
    const userInstance = await User.findOne({
      where: { id: req.params.id },
      include: [{ association: 'work', attributes: ['name', 'description'] }]
    });

    const updatedInstance = await userInstance.update(req.body);

    res.status(httpStatus.OK);
    return res.json({
      responseCode: httpStatus.OK,
      responseMessage: 'OK',
      response: { user: updatedInstance }
    });
  } catch (error) {
    debug('userUpdate', 'error', error);
    return next(error);
  }
};

/**
 * @api {delete} api/v1/users/:id Delete
 * @apiDescription Delete an exist user by id
 * @apiVersion 1.0.0
 * @apiName delete user
 * @apiGroup Users
 * @apiPermission public
 *
 * @apiParam {Number} id
 *
 * @apiSuccess {Number} responseCode     HTTP Response Code
 * @apiSuccess {String} responseMessage  Response message
 * @apiSuccess {Object} response         Response object
 *
 * @apiError (Bad Request 400)  ValidationError  Some parameters may contain invalid values
 */

exports.userDelete = async (req, res, next) => {
  try {
    await User.destroy({ where: { id: req.params.id }, force: true });

    res.status(httpStatus.OK);
    return res.json({
      responseCode: httpStatus.OK,
      responseMessage: 'OK',
      response: {}
    });
  } catch (error) {
    debug('userDelete', 'error', error);
    return next(error);
  }
};


/**
 * @api {get} api/v1/users/list?limit=:limit&page=:page Get List
 * @apiDescription Get list of users with pagination
 * @apiVersion 1.0.0
 * @apiName get list of user
 * @apiGroup Users
 * @apiPermission public
 *
 * @apiParam {Number} limit record count per page
 * @apiParam {Number} page number of page
 *
 * @apiSuccess {Number} responseCode     HTTP Response Code
 * @apiSuccess {String} responseMessage  Response message
 * @apiSuccess {Object} response         Response object
 * @apiSuccess {[User[]](#api-_Custom_types-ObjectUser)} response.users       Response result
 * @apiSuccess {Number} response.page        Response page
 * @apiSuccess {Number} response.limit       Used limit
 * @apiSuccess {Number} response.total       Total users count
 *
 * @apiError (Bad Request 400)  ValidationError  Some parameters may contain invalid values
 */

exports.userGetList = async (req, res, next) => {
  try {
    const limit = req.query.limit;
    const offset = ((req.query.page - 1) * req.query.limit) || 0;

    const userList = await User.findAll({
      limit,
      offset,
      include: [{ association: 'work', attributes: ['name', 'description'] }]
    });
    const count = await User.count({ });

    res.status(httpStatus.OK);
    return res.json({
      responseCode: httpStatus.OK,
      responseMessage: 'OK',
      response: { users: userList, page: req.query.page, limit, total: count }
    });
  } catch (error) {
    debug('userGetList', 'error', error);
    return next(error);
  }
};
