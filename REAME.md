# TodoList App

This is a TodoList app built using **Node.js**, **Express**, **TypeScript**, **MySQL**, and **ReactJS**. It provides a simple and intuitive interface for managing daily tasks.


## Technologies Used

- **Node.js**: A JavaScript runtime built on Chrome's V8 JavaScript engine.
- **Express**: A minimal and flexible web application framework for Node.js.
- **TypeScript**: A typed superset of JavaScript that compiles to plain JavaScript.
- **MySQL**: A popular relational database management system.
- **ReactJS**: A JavaScript library for building user interfaces.

## Getting Started

To get a local copy of this project up and running, follow these steps:

1. Clone this repository: `git clone https://github.com/lhermannsauer/todo-list-app.git`
2. Navigate to the project directory: `cd todo-list-app`
3. Install the dependencies: `npm install`
4. Set up the MySQL database by importing the provided SQL schema.
5. Configure the database connection in the `.env` file.
6. Build the ReactJS frontend: `npm run build`
7. Start the server: `npm start`
8. Open your web browser and visit: `http://localhost:3000`

## Project Structure

- `server/`: Contains the Node.js server code.
  - `src/`: Contains the TypeScript source code.
    - `controllers/`: Handles the logic for different routes.
    - `models/`: Defines the database models and their interactions.
    - `routes/`: Defines the API routes.
    - `app.ts`: Initializes the Express app and sets up middleware.
    - `server.ts`: Starts the server.
  - `public/`: Contains the static files served by the server.
- `client/`: Contains the ReactJS frontend code.
  - `src/`: Contains the TypeScript source code.
    - `components/`: Contains reusable UI components.
    - `pages/`: Contains the main pages of the application.
    - `services/`: Provides API services for interacting with the server.
    - `App.tsx`: Entry point of the React app.
- `.env`: Configuration file for environment variables.
- `package.json`: Contains the project's metadata and dependencies.
- `tsconfig.json`: Configuration file for TypeScript.
- `webpack.config.js`: Configuration file for bundling the client code.

## Contributing

Contributions are welcome! If you find any issues or have suggestions for improvements, please open an issue or submit a pull request.

## License

This project is licensed under the [MIT License](LICENSE).
