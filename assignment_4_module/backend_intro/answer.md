# Web Application Concepts

## Q1. Role of Frontend (FE)
The Frontend is the part of a web application that users directly see and interact with. It focuses on how the website looks and how users use it.

1. User Interface (UI)

Frontend is responsible for designing the layout of the website:

Buttons

Forms

Menus

Text, images, colors

This helps make the website attractive and easy to use.

2. User Interaction

Frontend handles user actions such as:

Clicking a button

Filling a form

Scrolling a page

Selecting options

It decides what should happen when the user performs these actions.

3. Communication with Backend

Frontend sends requests to the backend to:

Fetch data (like user details, products, etc.)

Submit forms

Login or register users

It also displays the data received from the backend to the user.








## Q2. Role of Backend (BE)
The Backend is the part of the application that works behind the scenes. Users don’t see it directly, but it handles all the main logic.

1. Server-side Processing

Backend:

Receives requests from frontend

Processes data

Performs calculations

Sends results back

Example: When you log in, the backend checks if your password is correct.

2. Database Handling

Backend manages:

Storing data

Updating data

Deleting data

Fetching data

Example: Saving user details, orders, or messages.

3. Security and Authentication

Backend ensures:

Only authorized users can access data

Passwords are encrypted

Secure login and logout

It protects the system from hackers and unauthorized access.

## Q3. Business Logic
Business Logic means the rules that control how an application works according to business needs.

It decides:

What is allowed

What is not allowed

How data should be processed

Real-World Examples

Banking App
You cannot withdraw more money than your balance.
This rule is business logic.

Shopping Website
Free delivery only for orders above ₹1000.
This is business logic.

Attendance System
Students are marked absent if they log in after 9:00 AM.
This rule is business logic.

Business logic makes sure the system follows real-world rules.



## Q4. Client-Server Model
The Client-Server Model explains how a web application works using two sides.

Client

The client is the user’s device:

Browser (Chrome, Edge)

Mobile app

Laptop

It sends requests like:

Open a page

Submit a form

Login

Server

The server is the backend system:

Receives client requests

Processes them

Sends responses

Communication

The client and server communicate using the internet.

Flow:

Client → Request → Server  
Server → Response → Client


Example:
You click "Login" → Request goes to server → Server checks details → Response comes back.


## Q5. Three-Tier Architecture
Three-Tier Architecture divides a web app into 3 layers.

1. Presentation Layer

This is the Frontend:

UI

Buttons

Forms

Pages

It shows data to users.

2. Application (Business) Layer

This is the Backend Logic:

Processes requests

Applies business rules

Handles calculations

3. Data Layer

This is the Database:

Stores user data

Stores orders

Stores records

Why This Architecture Is Used

Easy to maintain

Better security

Scalable

Clear separation of work

Each layer has a specific role.

## Q6. JavaScript as a Backend Language
JavaScript is not only for frontend. It is also used for backend using Node.js.

1. Performance

Node.js is fast and handles many users at the same time.

2. Ecosystem

JavaScript has:

Thousands of libraries

Tools for APIs

Tools for databases

This makes development easier.

3. Popular Backend Frameworks

Express.js

NestJS

Fastify

These help in building servers quickly.

Advantage

Developers can use one language (JavaScript) for both frontend and backend.
