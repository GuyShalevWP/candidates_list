# Candidates List - Assignment

A React application for managing and viewing a list of candidates.

## Features

- **View Candidates**: Display a list of candidates.
- **Filter**: Filter candidates by status or position.
- **Responsive UI**: Built with Material UI.

## Tech Stack

- **Frontend**: React, TypeScript, Material UI
- **Backend**: JSON Server (Mock API)

## Getting Started

To get started with the project, follow these steps:

1. **Clone the repository:**
   ```sh
   git clone https://github.com/GuyShalevWP/candidates_list.git
   cd candidates_list
   ```

2. **Install Dependencies:**

   - **Backend** (JSON Server):
     ```sh
     cd backend
     npm install -g json-server
     ```

   - **Frontend**:
     ```sh
     cd ../frontend
     npm install
     ```

3. **Run the Application:**

   You need to run both the backend and frontend in separate terminals.

   - **Start Backend** (Port 4000):
     ```sh
     cd backend
     npx json-server --watch cand-db.json --port 4000
     ```

   - **Start Frontend** (Port 3000):
     ```sh
     cd frontend
     npm start
     ```