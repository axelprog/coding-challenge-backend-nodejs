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
    const departmentInstance = await Department.create(req.body);

    res.status(httpStatus.CREATED);
    return res.json({
      responseCode: httpStatus.CREATED,
      responseMessage: 'CREATED',
      response: { department: departmentInstance.toJSON() }
    });
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
    const departmentInstance = await Department.findOne({ where: { id: req.params.id } });

    res.status(httpStatus.OK);
    return res.json({
      responseCode: httpStatus.OK,
      responseMessage: 'OK',
      response: { department: departmentInstance.toJSON() }
    });
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
    const departmentInstance = await Department.findOne({ where: { id: req.params.id } });

    const updatedInstance = await departmentInstance.update(req.body);

    res.status(httpStatus.OK);
    return res.json({
      responseCode: httpStatus.OK,
      responseMessage: 'OK',
      response: { department: updatedInstance.toJSON() }
    });
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
    await Department.destroy({ where: { id: req.params.id }, force: true })

    res.status(httpStatus.OK);
    return res.json({
      responseCode: httpStatus.OK,
      responseMessage: 'OK',
      response: {}
    });
  } catch (error) {
    return next(error);
  }
};
