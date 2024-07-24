# E-commerce Platform

This is a full-featured e-commerce platform built with Node.js, Express.js, MongoDB, and Mongoose. It includes essential features such as user authentication, product management, and order processing.

## Features

- User authentication (login, signup)
- Product management (CRUD operations)
- Shopping cart functionality
- Order processing
- User profile management

## Technologies Used

- **Node.js**: JavaScript runtime for server-side development
- **Express.js**: Web framework for Node.js
- **MongoDB**: NoSQL database for storing data
- **Mongoose**: ODM (Object Data Modeling) library for MongoDB and Node.js

## Installation

1. Clone the repository:
    ```bash
    git clone https://github.com/your-username/ecommerce-platform.git
    cd ecommerce-platform
    ```

2. Install dependencies:
    ```bash
    npm install
    ```

3. Set up environment variables:
    Create a `.env` file in the root directory and add the following:
    ```env
    PORT=3000
    MONGO_URI=your_mongodb_connection_string
    JWT_SECRET=your_jwt_secret
    ```

4. Start the server:
    ```bash
    npm start
    ```

## API Endpoints

### Authentication

- **POST /api/auth/signup**: Register a new user
- **POST /api/auth/login**: Authenticate a user and get a token

### Products

- **GET /api/products**: Get all products
- **GET /api/products/:id**: Get a single product by ID
- **POST /api/products**: Create a new product (Admin only)
- **PUT /api/products/:id**: Update a product by ID (Admin only)
- **DELETE /api/products/:id**: Delete a product by ID (Admin only)

### Notes

- **GET /api/notes**: Get all notes
- **GET /api/notes/:id**: Get a single product by ID
- **POST /api/notes**: Create a new product 
- **PUT /api/notes/:id**: Update a product by ID 
- **DELETE /api/notes/:id**: Delete a product by ID 

### Orders

- **POST /api/orders**: Create a new order
- **GET /api/orders/:id**: Get order details by ID

### User Profile

- **GET /api/users/profile**: Get logged-in user's profile
- **PUT /api/users/profile**: Update logged-in user's profile

## Contributing

Contributions are welcome! Please fork the repository and create a pull request with your changes.

## License

This project is licensed under the MIT License. See the LICENSE file for details.

## Contact

For any inquiries, please contact medhatashour19@gmail.com.