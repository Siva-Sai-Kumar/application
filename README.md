# application
# User Data Web Application

This is a basic web application that allows users to input data, validate it, store it in a SQLite database, retrieve it, and display it in a table format.

## Setup

### Prerequisites

Make sure you have the following installed on your system:

- Node.js: [Download and install Node.js](https://nodejs.org/)
- Git: [Download and install Git](https://git-scm.com/)

### Installation

1. Clone the repository:


2. Navigate to the project directory:


### Database Setup

1. Create a directory named `db`:


2. Inside the `db` directory, create a SQLite database file named `database.db`.

### Configuration

No additional configuration is required.

## Usage

1. Start the application:


2. Open your web browser and navigate to [http://localhost:3000](http://localhost:3000).

3. Fill out the user input form with valid data and submit.

4. The data will be stored in the SQLite database.

5. To view the stored data, navigate to [http://localhost:3000/data](http://localhost:3000/data).

## Dependencies

- express
- body-parser
- sqlite3

## Folder Structure

/public
index.html
/src
server.js
/db
database.db
README.md

## Contributing

Contributions are welcome! Please open an issue or submit a pull request with any improvements or bug fixes.

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.
