const httpStatus = require('http-status');

const Department = require('../models/').Department;

/**
 * @apiDefine Department
 * @apiParam (Request body) {String} name Department name
 * @apiParam (Request body) {String} description Department description
 */

/**
 * @api {post} api/v1/departments Create
 * @apiDescription Create new department
 * @apiVersion 1.0.0
 * @apiName create department
 * @apiGroup Departments
 * @apiPermission public
 *
 * @apiUse Department
 *
 * @apiSuccess (Success 201) {Number} responseCode     HTTP Response Code
 * @apiSuccess (Success 201) {String} responseMessage  Response message
 * @apiSuccess (Success 201) {Object} response         Response object
 *
 * @apiError (Bad Request 400)  ValidationError  Some parameters may contain invalid values
 */

exports.departmentCreate = async (req, res, next) => {
  try {
    return Department.create(req.body)
      .then((departmentInstance) => {
        res.status(httpStatus.CREATED);
        return res.json({
          responseCode: httpStatus.CREATED,
          responseMessage: 'CREATED',
          response: { department: departmentInstance.toJSON() }
        });
      })
      .catch(error => next(error));
  } catch (error) {
    return next(error);
  }
};

/**
 * @api {get} api/v1/departments/:id Get
 * @apiDescription Get an exist department by id
 * @apiVersion 1.0.0
 * @apiName get department data
 * @apiGroup Departments
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

exports.departmentGet = async (req, res, next) => {
  try {
    return Department.findById(req.params.id)
      .then((departmentInstance) => {
        res.status(httpStatus.OK);
        return res.json({
          responseCode: httpStatus.OK,
          responseMessage: 'OK',
          response: { department: departmentInstance.toJSON() }
        });
      })
      .catch(error => next(error));
  } catch (error) {
    return next(error);
  }
};

/**
 * @api {put} api/v1/departments/:id Update
 * @apiDescription Update an exist department data
 * @apiVersion 1.0.0
 * @apiName update department
 * @apiGroup Departments
 * @apiPermission public
 *
 * @apiUse Department
 *
 * @apiSuccess {Number} responseCode     HTTP Response Code
 * @apiSuccess {String} responseMessage  Response message
 * @apiSuccess {Object} response         Response object
 *
 * @apiError (Bad Request 400)  ValidationError  Some parameters may contain invalid values
 */

exports.departmentUpdate = async (req, res, next) => {
  try {
    return Department.findById(req.params.id)
      .then((departmentInstance => departmentInstance.update(req.body)))
      .then((updatedInstance) => {
        res.status(httpStatus.OK);
        return res.json({
          responseCode: httpStatus.OK,
          responseMessage: 'OK',
          response: { department: updatedInstance.toJSON() }
        });
      })
      .catch(error => next(error));
  } catch (error) {
    return next(error);
  }
};

/**
 * @api {delete} api/v1/departments/:id Delete
 * @apiDescription Delete an exist department by id
 * @apiVersion 1.0.0
 * @apiName delete department
 * @apiGroup Departments
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

exports.departmentDelete = async (req, res, next) => {
  try {
    return Department.destroy({ where: { id: req.params.id }, force: true })
      .then(() => {
        res.status(httpStatus.OK);
        return res.json({
          responseCode: httpStatus.OK,
          responseMessage: 'OK',
          response: {}
        });
      })
      .catch(error => next(error));
  } catch (error) {
    return next(error);
  }
};