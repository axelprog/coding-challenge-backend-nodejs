<a name="top"></a>
# StolenBikes v1.0.0

StolenBikes API documentation 

- [Bikes](#bikes)
	- [Create](#create)
	- [Delete](#delete)
	- [Get](#get)
	- [Update](#update)
	
- [Departments](#departments)
	- [Create](#create)
	- [Delete](#delete)
	- [Get](#get)
	- [Update](#update)
	
- [Users](#users)
	- [Create](#create)
	- [Delete](#delete)
	- [Get](#get)
	- [Update](#update)
	


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



### Success 201

| Name     | Type       | Description                           |
|:---------|:-----------|:--------------------------------------|
|  responseCode | Number | <p>HTTP Response Code</p>|
|  responseMessage | String | <p>Response message</p>|
|  response | Object | <p>Response object</p>|

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



### Success 200

| Name     | Type       | Description                           |
|:---------|:-----------|:--------------------------------------|
|  responseCode | Number | <p>HTTP Response Code</p>|
|  responseMessage | String | <p>Response message</p>|
|  response | Object | <p>Response object</p>|

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



### Success 201

| Name     | Type       | Description                           |
|:---------|:-----------|:--------------------------------------|
|  responseCode | Number | <p>HTTP Response Code</p>|
|  responseMessage | String | <p>Response message</p>|
|  response | Object | <p>Response object</p>|

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



### Success 200

| Name     | Type       | Description                           |
|:---------|:-----------|:--------------------------------------|
|  responseCode | Number | <p>HTTP Response Code</p>|
|  responseMessage | String | <p>Response message</p>|
|  response | Object | <p>Response object</p>|

