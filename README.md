
# D&D Campaign Tracker API

CSE 341 Final Project  
Created by: Tristan Galloway, Sam Creviston, Shane Basham  

## 📌 Overview

The D&D Campaign Tracker is a web application designed to help players and Dungeon Masters track progress through Dungeons & Dragons campaigns. The platform serves as a personal or shared adventure journal, supporting features such as session notes, quest tracking, NPC and location logging, and a timeline view. Users can tag entries by session or chapter and export them for personal archiving or sharing.

---

## ⚙️ Features

- User authentication with OAuth
- Campaign and session tracking
- Character and item management
- Journal tagging system (session, quest status)
- Timeline view and export capability
- RESTful API with full CRUD functionality
- Swagger documentation for API endpoints
- Secure endpoints with role-based access control
- Modular backend architecture using Express and TypeScript

---

## 🛠️ Tech Stack

- **Backend:** Node.js, Express.js, TypeScript
- **Frontend:** React (planned deployment on Render)
- **Authentication:** OAuth
- **Database:** MongoDB
- **API Documentation:** Swagger

---

## 📁 Project Structure

This project follows a modular domain-based structure:

```
/src
  /auth        → OAuth logic and auth-related routes
  /users       → User models, controllers, routes
  /campaigns   → Campaign data logic
  /characters  → Character data logic
  /items       → Item handling logic
  /utils       → Shared utility functions
  /docs        → Swagger/OpenAPI docs
  /config      → Environment setup and DB connection
```

The separation of concerns makes the codebase easier to test, maintain, and scale. The frontend and backend are also separated, allowing flexibility for frontend updates.

---

## 🔐 Security

- **Protected Routes:** All database-modifying requests (POST, PUT, DELETE) are authenticated and protected.
- **Public Data Access:** Safe GET routes (e.g., fetching campaigns or characters) are accessible without login for read-only use.
- **OAuth Integration:** Manages login state and user identification securely.

---

## 🔓 Authentication Endpoints

| Method | Endpoint         | Description                                 |
|--------|------------------|---------------------------------------------|
| GET    | `/auth/login`    | Redirects to OAuth provider for login       |
| GET    | `/auth/callback` | Handles OAuth callback                      |
| GET    | `/auth/logout`   | Logs the user out                           |
| GET    | `/auth/user`     | Returns authenticated user's information    |

---

## 📦 API Endpoints

### 🧑 Users
- `GET /users`
- `POST /users`
- `PUT /users/:id`
- `DELETE /users/:id`

### 🧭 Campaigns
- `GET /campaigns`
- `POST /campaigns`
- `PUT /campaigns/:id`
- `DELETE /campaigns/:id`

### 🎒 Items
- `GET /items`
- `POST /items`
- `PUT /items/:id`
- `DELETE /items/:id`

### 🧙 Characters
- `GET /characters`
- `POST /characters`
- `PUT /characters/:id`
- `DELETE /characters/:id`

---

## 📑 API Documentation

- Swagger UI: `GET /api-docs`  
- OpenAPI JSON: `GET /swagger.json`

---

## 🗓️ Project Schedule

| Lesson | Tasks                                                                 |
|--------|------------------------------------------------------------------------|
| 9      | Submit Portfolio                                                       |
| 10     | Initialize GitHub repo, Render page, and MongoDB setup                |
| 11     | Implement CRUD for Users, Campaigns, Characters, and Items            |
| 12     | Add OAuth, validation, error handling, and Swagger documentation      |
| 13     | Record project video and submit final assignment                      |

---

## 📋 Team Workflow

- Weekly task breakdown managed via Trello
- Minimum contribution: one task per week per team member
- Meeting structure includes:
  - Weekly review of Trello progress
  - Bug discussions
  - Assignment planning for async tasks

---

## ⚠️ Risks & Mitigation

| Risk                                                                 | Mitigation Strategy                                                                 |
|----------------------------------------------------------------------|--------------------------------------------------------------------------------------|
| Limited meeting availability (especially Fridays)                    | Optimize Saturday meetings with pre-prepared agendas and asynchronous planning      |
| Limited team experience with TypeScript                              | Leverage Shane’s experience and online resources for learning support               |

---

## 🚀 Stretch Goals

- Implement full frontend with React
- Use TypeScript for type-safe, scalable code
- Explore deployment automation and CI/CD pipelines
