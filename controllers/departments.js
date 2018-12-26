const httpStatus = require('http-status');

const { Department } = require('../models/');
const { debug } = require('../utils/logger');

/**
 * @apiDefine DepartmentDefine
 * @apiParam (Request body) {String} name Department name
 * @apiParam (Request body) {String} description Department description
 */

/**
 * @api {OBJECT} Department Department
 * @apiVersion 1.0.0
 * @apiGroup .Custom types
 * @apiUse DepartmentDefine
 */

/**
 * @api {post} api/v1/departments Create
 * @apiDescription Create new department
 * @apiVersion 1.0.0
 * @apiName create department
 * @apiGroup Departments
 * @apiPermission public
 *
 * @apiUse DepartmentDefine
 *
 * @apiSuccess (Success 201) {Number} responseCode     HTTP Response Code
 * @apiSuccess (Success 201) {String} responseMessage  Response message
 * @apiSuccess (Success 201) {Object} response         Response object
 * @apiSuccess {[Department](#api-_Custom_types-ObjectDepartment)}  response.department   department
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
      response: { department: departmentInstance }
    });
  } catch (error) {
    debug('departmentCreate', 'error', error);
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
 * @apiSuccess {[Department](#api-_Custom_types-ObjectDepartment)}  response.department   department
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
      response: { department: departmentInstance }
    });
  } catch (error) {
    debug('departmentGet', 'error', error);
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
 * @apiUse DepartmentDefine
 *
 * @apiSuccess {Number} responseCode     HTTP Response Code
 * @apiSuccess {String} responseMessage  Response message
 * @apiSuccess {Object} response         Response object
 * @apiSuccess {[Department](#api-_Custom_types-ObjectDepartment)}  response.department   department
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
      response: { department: updatedInstance }
    });
  } catch (error) {
    debug('departmentUpdate', 'error', error);
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
    await Department.destroy({ where: { id: req.params.id }, force: true });

    res.status(httpStatus.OK);
    return res.json({
      responseCode: httpStatus.OK,
      responseMessage: 'OK',
      response: {}
    });
  } catch (error) {
    debug('departmentDelete', 'error', error);
    return next(error);
  }
};

/**
 * @api {get} api/v1/departments/list?limit=:limit&page=:page Get List
 * @apiDescription Get list of departments with pagination
 * @apiVersion 1.0.0
 * @apiName get list of departments
 * @apiGroup Departments
 * @apiPermission public
 *
 * @apiParam {Number} limit record count per page
 * @apiParam {Number} page number of page
 *
 * @apiSuccess {Number} responseCode     HTTP Response Code
 * @apiSuccess {String} responseMessage  Response message
 * @apiSuccess {Object} response         Response object
 * @apiSuccess {[Department[]](#_api-Custom_types-ObjectDepartment)} response.departments Response result
 * @apiSuccess {Number} response.page        Response page
 * @apiSuccess {Number} response.limit       Used limit
 * @apiSuccess {Number} response.total       Total users count
 *
 * @apiError (Bad Request 400)  ValidationError  Some parameters may contain invalid values
 */

exports.departmentGetList = async (req, res, next) => {
  try {
    const limit = req.query.limit;
    const offset = ((req.query.page - 1) * req.query.limit) || 0;

    const departmentList = await Department.findAll({ limit, offset });
    const count = await Department.count({ });

    res.status(httpStatus.OK);
    return res.json({
      responseCode: httpStatus.OK,
      responseMessage: 'OK',
      response: { departments: departmentList, page: req.query.page, limit, total: count }
    });
  } catch (error) {
    debug('departmentGetList', 'error', error);
    return next(error);
  }
};
