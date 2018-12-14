/* just example and test */
/**
 * @api {get} /api/user/ Return requested user data
 * @apiName CanAsk
 * @apiGroup Questions
 * @apiSuccess {Object}   result      Result Data
 * @apiSuccess {boolean}  result.possible      possibility of create a new question
 * @apiSuccess {Object}   error       Error Data
 * @apiSuccess {string}   error.code  Code of Error
 * @apiSuccess {string}   error.description  Description of Error
 * @apiSuccessExample  Response when it is possible:
 * {
 *     "result": {
 *         "possible": true
 *     }
 * }
 *
 *
 * @apiSuccessExample  Response when it is not possible:
 * {
 *   "error": {
 *       "code": "-342",
 *       "description": "testse"
 *    }
 * }
 */
