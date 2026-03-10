# Blog Node API

Simple REST API for a blog built with Node.js.
This project provides endpoints to manage blog posts such as creating, reading, updating, and deleting posts.

## Features

* Create blog posts
* Get all posts
* Get a single post
* Update posts
* Delete posts
* RESTful API structure
* Environment variable support

## Tech Stack

* Node.js
* Express.js
* MongoDB (or other database depending on configuration)
* dotenv

## Project Structure

```
blog-api
│
├── controllers
├── routes
├── models
├── config
├── middleware
├── .env
├── .gitignore
├── package.json
└── server.js / app.js
```

## Installation

1. Clone the repository

```
git clone https://github.com/timurboys112/blog-node.git
```

2. Enter the project folder

```
cd blog-node
```

3. Install dependencies

```
npm install
```

4. Create a `.env` file in the root directory

Example:

```
PORT=5000
MONGO_URI=your_database_connection_string
```

5. Run the server

```
npm run dev
```

or

```
npm start
```

## API Endpoints

### Get all posts

```
GET /api/posts
```

### Get single post

```
GET /api/posts/:id
```

### Create post

```
POST /api/posts
```

### Update post

```
PUT /api/posts/:id
```

### Delete post

```
DELETE /api/posts/:id
```

## Environment Variables

Create a `.env` file and add:

```
PORT=5000
MONGO_URI=your_database_url
```

## Contributing

Pull requests are welcome. For major changes, please open an issue first to discuss what you would like to change.

## License

This project is licensed under the MIT License.