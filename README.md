JournalApp Documentation
Table of Contents

    Backend Service Setup
    Mobile App Setup
    API Documentation

Backend Service Setup
Prerequisites

    Node.js (v14.x or higher)
    npm (v6.x or higher)
    PostgreSQL (v12.x or higher)
    TypeScript (v4.x or higher)

Installation

    Clone the repository:

    sh

git clone https://github.com/your-username/JournalApp.git
cd JournalApp/journal-backend

Install dependencies:

sh

npm install

Configure the database:

Create a PostgreSQL database and update the ormconfig.json file with your database credentials:

json

{
  "type": "postgres",
  "host": "localhost",
  "port": 5432,
  "username": "your-username",
  "password": "your-password",
  "database": "journalapp",
  "synchronize": true,
  "logging": false,
  "entities": ["src/models/**/*.ts"],
  "migrations": ["src/migration/**/*.ts"],
  "subscribers": ["src/subscriber/**/*.ts"]
}

Run database migrations:

sh

    npm run typeorm migration:run

Running the Backend Service

    Start the development server:

    sh

    npm run dev

    The server will be running at http://localhost:3000.

Mobile App Setup
Prerequisites

    Node.js (v14.x or higher)
    npm (v6.x or higher)
    Expo CLI (v5.x or higher)
    Android Studio / Xcode (for emulators)

Installation

    Clone the repository:

    sh

git clone https://github.com/your-username/JournalApp.git
cd JournalApp

Install dependencies:

sh

npm install

Start the Expo development server:

sh

    npx expo start

    Run the app:
        For Android: Open Android Studio and run an Android emulator.
        For iOS: Open Xcode and run an iOS simulator.
        Alternatively, scan the QR code in the Expo dev tools with your physical device.

API Documentation
Base URL

http://localhost:3000/api
Endpoints
User Authentication

    Register User
        Endpoint: /auth/register
        Method: POST
        Description: Registers a new user.
        Request Body:

        json

{
  "username": "exampleUser",
  "password": "examplePassword"
}

Response:

json

    {
      "id": 1,
      "username": "exampleUser",
      "createdAt": "2024-07-12T12:34:56.789Z"
    }

Login User

    Endpoint: /auth/login
    Method: POST
    Description: Logs in a user and returns a JWT token.
    Request Body:

    json

{
  "username": "exampleUser",
  "password": "examplePassword"
}

Response:

json

        {
          "token": "your-jwt-token"
        }

Journal Entries

    Create Journal Entry
        Endpoint: /entries
        Method: POST
        Description: Creates a new journal entry.
        Headers:

        json

{
  "Authorization": "Bearer your-jwt-token"
}

Request Body:

json

{
  "title": "My First Entry",
  "content": "This is the content of my first journal entry.",
  "category": "Personal"
}

Response:

json

    {
      "id": 1,
      "title": "My First Entry",
      "content": "This is the content of my first journal entry.",
      "category": "Personal",
      "createdAt": "2024-07-12T12:34:56.789Z",
      "updatedAt": "2024-07-12T12:34:56.789Z"
    }

Get All Journal Entries

    Endpoint: /entries
    Method: GET
    Description: Retrieves all journal entries for the authenticated user.
    Headers:

    json

{
  "Authorization": "Bearer your-jwt-token"
}

Response:

json

    [
      {
        "id": 1,
        "title": "My First Entry",
        "content": "This is the content of my first journal entry.",
        "category": "Personal",
        "createdAt": "2024-07-12T12:34:56.789Z",
        "updatedAt": "2024-07-12T12:34:56.789Z"
      },
      {
        "id": 2,
        "title": "Another Entry",
        "content": "Content of another journal entry.",
        "category": "Work",
        "createdAt": "2024-07-12T13:34:56.789Z",
        "updatedAt": "2024-07-12T13:34:56.789Z"
      }
    ]

Update Journal Entry

    Endpoint: /entries/:id
    Method: PUT
    Description: Updates a specific journal entry.
    Headers:

    json

{
  "Authorization": "Bearer your-jwt-token"
}

Request Body:

json

{
  "title": "Updated Entry Title",
  "content": "Updated content of the journal entry.",
  "category": "Updated Category"
}

Response:

json

    {
      "id": 1,
      "title": "Updated Entry Title",
      "content": "Updated content of the journal entry.",
      "category": "Updated Category",
      "createdAt": "2024-07-12T12:34:56.789Z",
      "updatedAt": "2024-07-12T14:34:56.789Z"
    }

Delete Journal Entry

    Endpoint: /entries/:id
    Method: DELETE
    Description: Deletes a specific journal entry.
    Headers:

    json

{
  "Authorization": "Bearer your-jwt-token"
}

Response:

json

{
  "message": "Entry deleted successfully."
}
