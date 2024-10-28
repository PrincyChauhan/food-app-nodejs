# Restaurant Food App

This Restaurant Food App is a web-based platform allowing users to view and manage their profiles, log in/register, and access restaurant information. It includes authentication and authorization to protect user data and provide role-based access control.

## Features

- **User Management**
  - Create and manage user accounts.
  - Update user information and reset passwords.
  - Delete user profiles.
- **Restaurant Management**

  - Add new restaurants to the platform.
  - View all available restaurants.
  - View restaurant details by ID.
  - Delete restaurants from the platform.

- **Authentication**
  - User registration and login with authentication middleware to secure routes.

## API Endpoints

### User

| Endpoint                   | HTTP Method | Description             |
| -------------------------- | ----------- | ----------------------- |
| `/api/user/getUser`        | GET         | Get user details        |
| `/api/user/updateUser`     | PUT         | Update user information |
| `/api/user/updatePassword` | PUT         | Update user password    |
| `/api/user/resetPassword`  | POST        | Reset user password     |
| `/api/user/deleteProfile`  | DELETE      | Delete user profile     |

### Authentication

| Endpoint             | HTTP Method | Description         |
| -------------------- | ----------- | ------------------- |
| `/api/auth/register` | POST        | Register a new user |
| `/api/auth/login`    | POST        | User login          |

### Restaurant

| Endpoint                     | HTTP Method | Description               |
| ---------------------------- | ----------- | ------------------------- |
| `/api/restaurant/create`     | POST        | Add a new restaurant      |
| `/api/restaurant/getAll`     | GET         | Retrieve all restaurants  |
| `/api/restaurant/:id`        | GET         | Retrieve restaurant by ID |
| `/api/restaurant/delete/:id` | DELETE      | Delete a restaurant by ID |

## Middleware

- **Auth Middleware**: This middleware secures certain routes, ensuring only authenticated users can access them.

## Controllers

### User Controllers

- `getUserController`: Fetches user details.
- `updateUserController`: Updates user profile information.
- `updatePasswordController`: Changes the user's password.
- `resetPasswordController`: Allows users to reset their password if forgotten.
- `deleteProfileController`: Deletes the user's profile.

### Authentication Controllers

- `registerController`: Handles new user registrations.
- `loginController`: Manages user login sessions.

### Restaurant Controllers

- `createRestaurantController`: Adds a new restaurant to the system.
- `getAllRestaurantController`: Retrieves a list of all restaurants.
- `getRestaurantByIdController`: Retrieves a restaurant's details by ID.
- `deleteRestaurantController`: Deletes a restaurant from the system.

## Installation

1.  Clone the repository:

    ```bash
    git clone https://github.com/PrincyChauhan/food-app-nodejs.git
    cd restaurant-food-app
    ```

2.  Install dependencies:
    ```bash
    npm install
    ```
3.  Create a .env file in the root directory.

4.  Start the application::
    ```bash
    npm run server
    ```
