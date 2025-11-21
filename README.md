# Candidates List - Assginment

  ```sh
  git clone https://github.com/your-repo/dr-keren-aharoni-clinic.git
  ```

## Getting Started

To get started with the project, follow these steps:

1. Clone the repository:
  ```sh
  git clone https://github.com/GuyShalevWP/candidates_list.git
  ```
2. Navigate to the project directory:
  ```sh
  cd [your-path]/candidates_list
  ```
3. Install the dependencies:
  - Install 'JSON Server':
    ```sh
    cd [your-path]/candidates_lis/backend
    npm install json-server
    ```
  - Install the project:
    ```sh
    cd [your-path]/candidates_lis/frontend
    npm install
    ```

4. Run the development server:
  - Run 'JSON Server'
    ```sh
    cd [your-path]/candidates_lis/backend
    npx json-server --watch cand-db.json -- port 4000
    ```
  - Run the peoject
    ```sh
    cd [your-path]/candidates_lis/frontend
    npm start
    ```