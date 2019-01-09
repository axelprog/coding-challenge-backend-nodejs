<a name="top"></a>
# StolenBikes v1.0.0

StolenBikes API documentation 

- [Bikes](#bikes)
	- [Create](#create)
	- [Delete](#delete)
	- [Get](#get)
	- [Get List](#get-list)
	- [Update](#update)
	
- [Departments](#departments)
	- [Create](#create)
	- [Delete](#delete)
	- [Get](#get)
	- [Get List](#get-list)
	- [Update](#update)
	
- [Users](#users)
	- [Create](#create)
	- [Delete](#delete)
	- [Get List](#get-list)
	- [Get](#get)
	- [Update](#update)
	
- [_Custom_types](#_custom_types)
	- [Bike](#bike)
	- [Department](#department)
	- [User](#user)
	


# <a name='bikes'></a> Bikes

## <a name='create'></a> Create
[Back to top](#top)

<p>Create new record about stolen bike</p>

	POST api/v1/bikes





### Request body Parameters

| Name     | Type       | Description                           |
|:---------|:-----------|:--------------------------------------|
|  license | String | <p>Bike license</p>|
|  color | String | <p>Bike color</p>|
|  type | String | <p>Bike type</p>|
|  stealDate | Date | <p>Date of bike stolen</p>|
|  thiefDescription | String | **optional**<p>Description of thief</p>|
|  found | Boolean | **optional**<p>Flag of found bike</p>|
|  owner | Number | **optional**<p>Id of owner</p>|
|  handle | Number | **optional**<p>Id of seeker</p>|
|  seeker | <a href="#api-_Custom_types-ObjectUser">User</a> | **optional**<p>Data of seeker</p>|



### Success 201

| Name     | Type       | Description                           |
|:---------|:-----------|:--------------------------------------|
|  responseCode | Number | <p>HTTP Response Code</p>|
|  responseMessage | String | <p>Response message</p>|
|  response | Object | <p>Response object</p>|
### Success 200

| Name     | Type       | Description                           |
|:---------|:-----------|:--------------------------------------|
| &nbsp;&nbsp;&nbsp;&nbsp; response.bike | <a href="#api-_Custom_types-ObjectBike">Bike</a> | <p>Bike</p>|

## <a name='delete'></a> Delete
[Back to top](#top)

<p>Delete an exist record about stolen bike by bike id</p>

	DELETE api/v1/bikes/:id





### Parameter Parameters

| Name     | Type       | Description                           |
|:---------|:-----------|:--------------------------------------|
|  id | Number | |



### Success 200

| Name     | Type       | Description                           |
|:---------|:-----------|:--------------------------------------|
|  responseCode | Number | <p>HTTP Response Code</p>|
|  responseMessage | String | <p>Response message</p>|
|  response | Object | <p>Response object</p>|

## <a name='get'></a> Get
[Back to top](#top)

<p>Get an exist record about stolen bike by id</p>

	GET api/v1/bikes/:id





### Parameter Parameters

| Name     | Type       | Description                           |
|:---------|:-----------|:--------------------------------------|
|  id | Number | |



### Success 200

| Name     | Type       | Description                           |
|:---------|:-----------|:--------------------------------------|
|  responseCode | Number | <p>HTTP Response Code</p>|
|  responseMessage | String | <p>Response message</p>|
|  response | Object | <p>Response object</p>|
| &nbsp;&nbsp;&nbsp;&nbsp; response.bike | <a href="#api-_Custom_types-ObjectBike">Bike</a> | <p>Bike</p>|

## <a name='get-list'></a> Get List
[Back to top](#top)

<p>Get list of bikes with pagination</p>

	GET api/v1/bikes/list?limit=:limit&amp;page=:page





### Parameter Parameters

| Name     | Type       | Description                           |
|:---------|:-----------|:--------------------------------------|
|  limit | Number | <p>record count per page</p>|
|  page | Number | <p>number of page</p>|



### Success 200

| Name     | Type       | Description                           |
|:---------|:-----------|:--------------------------------------|
|  responseCode | Number | <p>HTTP Response Code</p>|
|  responseMessage | String | <p>Response message</p>|
|  response | Object | <p>Response object</p>|
| &nbsp;&nbsp;&nbsp;&nbsp; response.bikes | <a href="#api-_Custom_types-ObjectBike">Department[]</a> | <p>Response result</p>|
| &nbsp;&nbsp;&nbsp;&nbsp; response.page | Number | <p>Response page</p>|
| &nbsp;&nbsp;&nbsp;&nbsp; response.limit | Number | <p>Used limit</p>|
| &nbsp;&nbsp;&nbsp;&nbsp; response.total | Number | <p>Total users count</p>|

## <a name='update'></a> Update
[Back to top](#top)

<p>Update an exist record about stolen bike</p>

	PUT api/v1/bikes/:id





### Request body Parameters

| Name     | Type       | Description                           |
|:---------|:-----------|:--------------------------------------|
|  license | String | <p>Bike license</p>|
|  color | String | <p>Bike color</p>|
|  type | String | <p>Bike type</p>|
|  stealDate | Date | <p>Date of bike stolen</p>|
|  thiefDescription | String | **optional**<p>Description of thief</p>|
|  found | Boolean | **optional**<p>Flag of found bike</p>|
|  owner | Number | **optional**<p>Id of owner</p>|
|  handle | Number | **optional**<p>Id of seeker</p>|
|  seeker | <a href="#api-_Custom_types-ObjectUser">User</a> | **optional**<p>Data of seeker</p>|



### Success 200

| Name     | Type       | Description                           |
|:---------|:-----------|:--------------------------------------|
|  responseCode | Number | <p>HTTP Response Code</p>|
|  responseMessage | String | <p>Response message</p>|
|  response | Object | <p>Response object</p>|
| &nbsp;&nbsp;&nbsp;&nbsp; response.bike | <a href="#api-_Custom_types-ObjectBike">Bike</a> | <p>Bike</p>|

# <a name='departments'></a> Departments

## <a name='create'></a> Create
[Back to top](#top)

<p>Create new department</p>

	POST api/v1/departments





### Request body Parameters

| Name     | Type       | Description                           |
|:---------|:-----------|:--------------------------------------|
|  name | String | <p>Department name</p>|
|  description | String | <p>Department description</p>|



### Success 201

| Name     | Type       | Description                           |
|:---------|:-----------|:--------------------------------------|
|  responseCode | Number | <p>HTTP Response Code</p>|
|  responseMessage | String | <p>Response message</p>|
|  response | Object | <p>Response object</p>|
### Success 200

| Name     | Type       | Description                           |
|:---------|:-----------|:--------------------------------------|
| &nbsp;&nbsp;&nbsp;&nbsp; response.department | <a href="#api-_Custom_types-ObjectDepartment">Department</a> | <p>department</p>|

## <a name='delete'></a> Delete
[Back to top](#top)

<p>Delete an exist department by id</p>

	DELETE api/v1/departments/:id





### Parameter Parameters

| Name     | Type       | Description                           |
|:---------|:-----------|:--------------------------------------|
|  id | Number | |



### Success 200

| Name     | Type       | Description                           |
|:---------|:-----------|:--------------------------------------|
|  responseCode | Number | <p>HTTP Response Code</p>|
|  responseMessage | String | <p>Response message</p>|
|  response | Object | <p>Response object</p>|

## <a name='get'></a> Get
[Back to top](#top)

<p>Get an exist department by id</p>

	GET api/v1/departments/:id





### Parameter Parameters

| Name     | Type       | Description                           |
|:---------|:-----------|:--------------------------------------|
|  id | Number | |



### Success 200

| Name     | Type       | Description                           |
|:---------|:-----------|:--------------------------------------|
|  responseCode | Number | <p>HTTP Response Code</p>|
|  responseMessage | String | <p>Response message</p>|
|  response | Object | <p>Response object</p>|
| &nbsp;&nbsp;&nbsp;&nbsp; response.department | <a href="#api-_Custom_types-ObjectDepartment">Department</a> | <p>department</p>|

## <a name='get-list'></a> Get List
[Back to top](#top)

<p>Get list of departments with pagination</p>

	GET api/v1/departments/list?limit=:limit&amp;page=:page





### Parameter Parameters

| Name     | Type       | Description                           |
|:---------|:-----------|:--------------------------------------|
|  limit | Number | <p>record count per page</p>|
|  page | Number | <p>number of page</p>|



### Success 200

| Name     | Type       | Description                           |
|:---------|:-----------|:--------------------------------------|
|  responseCode | Number | <p>HTTP Response Code</p>|
|  responseMessage | String | <p>Response message</p>|
|  response | Object | <p>Response object</p>|
| &nbsp;&nbsp;&nbsp;&nbsp; response.departments | <a href="#_api-Custom_types-ObjectDepartment">Department[]</a> | <p>Response result</p>|
| &nbsp;&nbsp;&nbsp;&nbsp; response.page | Number | <p>Response page</p>|
| &nbsp;&nbsp;&nbsp;&nbsp; response.limit | Number | <p>Used limit</p>|
| &nbsp;&nbsp;&nbsp;&nbsp; response.total | Number | <p>Total users count</p>|

## <a name='update'></a> Update
[Back to top](#top)

<p>Update an exist department data</p>

	PUT api/v1/departments/:id





### Request body Parameters

| Name     | Type       | Description                           |
|:---------|:-----------|:--------------------------------------|
|  name | String | <p>Department name</p>|
|  description | String | <p>Department description</p>|



### Success 200

| Name     | Type       | Description                           |
|:---------|:-----------|:--------------------------------------|
|  responseCode | Number | <p>HTTP Response Code</p>|
|  responseMessage | String | <p>Response message</p>|
|  response | Object | <p>Response object</p>|
| &nbsp;&nbsp;&nbsp;&nbsp; response.department | <a href="#api-_Custom_types-ObjectDepartment">Department</a> | <p>department</p>|

# <a name='users'></a> Users

## <a name='create'></a> Create
[Back to top](#top)

<p>Create new user</p>

	POST api/v1/users





### Request body Parameters

| Name     | Type       | Description                           |
|:---------|:-----------|:--------------------------------------|
|  firstName | String | <p>User first name</p>|
|  lastName | String | <p>User last naem</p>|
|  email | String | <p>User email for login</p>|
|  password | String | <p>User password</p>|
|  role | String | <p>Possible user roles</p>_Allowed values: "admin","manager","police","user"_|
|  department | Number | <p>Id of department where work a policeman</p>|
|  work | <a href="#api-_Custom_types-ObjectDepartment">Department</a> | <p>Data of department where work a policeman</p>|



### Success 201

| Name     | Type       | Description                           |
|:---------|:-----------|:--------------------------------------|
|  responseCode | Number | <p>HTTP Response Code</p>|
|  responseMessage | String | <p>Response message</p>|
|  response | Object | <p>Response object</p>|
| &nbsp;&nbsp;&nbsp;&nbsp; response.user | <a href="#api-_Custom_types-ObjectUser">User</a> | <p>user</p>|
### Success 200

| Name     | Type       | Description                           |
|:---------|:-----------|:--------------------------------------|
| &nbsp;&nbsp;&nbsp;&nbsp; response.user | <a href="#api-_Custom_types-ObjectUser">User</a> | <p>user</p>|

## <a name='delete'></a> Delete
[Back to top](#top)

<p>Delete an exist user by id</p>

	DELETE api/v1/users/:id





### Parameter Parameters

| Name     | Type       | Description                           |
|:---------|:-----------|:--------------------------------------|
|  id | Number | |



### Success 200

| Name     | Type       | Description                           |
|:---------|:-----------|:--------------------------------------|
|  responseCode | Number | <p>HTTP Response Code</p>|
|  responseMessage | String | <p>Response message</p>|
|  response | Object | <p>Response object</p>|

## <a name='get-list'></a> Get List
[Back to top](#top)

<p>Get list of users with pagination</p>

	GET api/v1/users/list?limit=:limit&amp;page=:page





### Parameter Parameters

| Name     | Type       | Description                           |
|:---------|:-----------|:--------------------------------------|
|  limit | Number | <p>record count per page</p>|
|  page | Number | <p>number of page</p>|



### Success 200

| Name     | Type       | Description                           |
|:---------|:-----------|:--------------------------------------|
|  responseCode | Number | <p>HTTP Response Code</p>|
|  responseMessage | String | <p>Response message</p>|
|  response | Object | <p>Response object</p>|
| &nbsp;&nbsp;&nbsp;&nbsp; response.users | <a href="#api-_Custom_types-ObjectUser">User[]</a> | <p>Response result</p>|
| &nbsp;&nbsp;&nbsp;&nbsp; response.page | Number | <p>Response page</p>|
| &nbsp;&nbsp;&nbsp;&nbsp; response.limit | Number | <p>Used limit</p>|
| &nbsp;&nbsp;&nbsp;&nbsp; response.total | Number | <p>Total users count</p>|

## <a name='get'></a> Get
[Back to top](#top)

<p>Get an exist user by id</p>

	GET api/v1/users/:id





### Parameter Parameters

| Name     | Type       | Description                           |
|:---------|:-----------|:--------------------------------------|
|  id | Number | |



### Success 200

| Name     | Type       | Description                           |
|:---------|:-----------|:--------------------------------------|
|  responseCode | Number | <p>HTTP Response Code</p>|
|  responseMessage | String | <p>Response message</p>|
|  response | Object | <p>Response object</p>|
| &nbsp;&nbsp;&nbsp;&nbsp; response.user | <a href="#api-_Custom_types-ObjectUser">User</a> | <p>user</p>|

## <a name='update'></a> Update
[Back to top](#top)

<p>Update an exist user data</p>

	PUT api/v1/users/:id





### Request body Parameters

| Name     | Type       | Description                           |
|:---------|:-----------|:--------------------------------------|
|  firstName | String | <p>User first name</p>|
|  lastName | String | <p>User last naem</p>|
|  email | String | <p>User email for login</p>|
|  password | String | <p>User password</p>|
|  role | String | <p>Possible user roles</p>_Allowed values: "admin","manager","police","user"_|
|  department | Number | <p>Id of department where work a policeman</p>|
|  work | <a href="#api-_Custom_types-ObjectDepartment">Department</a> | <p>Data of department where work a policeman</p>|



### Success 200

| Name     | Type       | Description                           |
|:---------|:-----------|:--------------------------------------|
|  responseCode | Number | <p>HTTP Response Code</p>|
|  responseMessage | String | <p>Response message</p>|
|  response | Object | <p>Response object</p>|
| &nbsp;&nbsp;&nbsp;&nbsp; response.user | <a href="#api-_Custom_types-ObjectUser">User</a> | <p>user</p>|

# <a name='_custom_types'></a> _Custom_types

## <a name='bike'></a> Bike
[Back to top](#top)



	OBJECT Bike





### Request body Parameters

| Name     | Type       | Description                           |
|:---------|:-----------|:--------------------------------------|
|  name | String | <p>Department name</p>|
|  description | String | <p>Department description</p>|




## <a name='department'></a> Department
[Back to top](#top)



	OBJECT Department





### Request body Parameters

| Name     | Type       | Description                           |
|:---------|:-----------|:--------------------------------------|
|  name | String | <p>Department name</p>|
|  description | String | <p>Department description</p>|




## <a name='user'></a> User
[Back to top](#top)



	OBJECT User





### Request body Parameters

| Name     | Type       | Description                           |
|:---------|:-----------|:--------------------------------------|
|  firstName | String | <p>User first name</p>|
|  lastName | String | <p>User last naem</p>|
|  email | String | <p>User email for login</p>|
|  password | String | <p>User password</p>|
|  role | String | <p>Possible user roles</p>_Allowed values: "admin","manager","police","user"_|
|  department | Number | <p>Id of department where work a policeman</p>|
|  work | <a href="#api-_Custom_types-ObjectDepartment">Department</a> | <p>Data of department where work a policeman</p>|




