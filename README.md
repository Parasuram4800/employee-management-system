# 🚀 Full-Stack Employee Management System (CRUD)

A production-ready management dashboard built with a **Spring Boot** backend and a **React.js** frontend. This project demonstrates a complete data lifecycle (CRUD) from the UI down to a **MySQL** database.

## 🏗️ Technical Stack
* **Backend:** Java 17, Spring Boot, Spring Data JPA (Hibernate)
* **Frontend:** React.js (Functional Components, Hooks)
* **Database:** MySQL
* **API Protocol:** RESTful (JSON)
* **Testing:** Manual & Automated API validation

## 🛠️ Key Features
* **Real-time Data Fetching:** Automatically retrieves employee records from MySQL.
* **Dynamic Registration:** Add new employees through a validated React form.
* **Record Management:** Securely remove employee entries via unique Primary Key (ID) mapping.
* **CORS Integration:** Configured backend to allow seamless cross-origin communication between the frontend and API.

## ⚙️ How to Run Locally

### 1. Database Setup
1. Create a MySQL database named `employeedb`.
2. Update your `src/main/resources/application.properties` with your MySQL username and password.

### 2. Backend (Spring Boot)
```bash
# Navigate to project root
cd employee-management
# Run the application
.\mvnw spring-boot:run
The server will start at http://localhost:8080.

3. Frontend (React)
Bash
# Navigate to frontend folder
cd my-frontend
# Install dependencies
npm install
# Start development server
npm start
The UI will be available at http://localhost:3000 (or the port shown in your terminal).

🧪 Testing and Quality Assurance
As a Quality-focused project, the following validation steps were performed:

API Testing: Verified GET, POST, and DELETE endpoints using Postman.

UI/UX Testing: Ensured state updates immediately in the browser upon database changes.

Data Integrity: Confirmed that deleting a record in the UI successfully triggers a matching removal in the MySQL table.

👨‍💻 Author
Parasuram Tatiparthi

Software Developer & SDET

Focus: Mastering the FARM Stack & Test Automation
