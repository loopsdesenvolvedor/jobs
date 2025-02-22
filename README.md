
# Jobs - Job Search and Posting Platform

![jobs](https://github.com/user-attachments/assets/a0e683e7-70e9-45cb-bf2e-0d9e9830cb66)


## 📌 About the Project
Jobs is a **full-stack job search and posting platform** designed to connect job seekers with potential employers. Built with modern web technologies, it ensures a smooth and efficient experience for both candidates and recruiters.

## 🎨 UI/UX Design
The design of the platform is still under development. You can check out the latest designs on Figma:
[Jobs Figma Design](https://www.figma.com/design/o0NF1UaJRxLkJYn85h1ehR/jobs?node-id=0-1&p=f&t=EkXW1piPmMLwycJd-0)

## 🚀 Technologies Used
The project leverages a robust stack of technologies to ensure security, scalability, and performance:

### Backend:
```ts
- Express.js - Web framework for Node.js
- TypeScript - Typed JavaScript for better code maintainability
- Prisma - ORM for database interactions
- jsonwebtoken - Secure authentication with JWT
- express-async-errors - Middleware for handling async errors
- bcryptjs - Password hashing for security
- multer - File upload handling
```

### Frontend (Views):
```ts
- EJS - Templating engine for rendering dynamic HTML
```

## ⚙️ Installation and Setup
### Prerequisites
Ensure you have the following installed before proceeding:
```sh
- Node.js (latest LTS version recommended)
- MySQL or another compatible database
- npm or yarn
```

### Steps to Set Up Locally
```sh
# Clone the repository
git clone https://github.com/loopsdesenvolvedor/jobs.git
cd jobs

# Install dependencies
npm install  # or yarn install

# Set up environment variables
# Create a .env file in the root directory and configure the necessary database and authentication credentials.

# Run database migrations
npx prisma migrate dev

# Start the development server
npm run dev  # or yarn dev
```

## 📌 Features
```md
- 🏢 Employer Dashboard: Post job listings and manage applications
- 👨‍💻 Job Seeker Dashboard: Search and apply for jobs
- 🔐 Authentication & Authorization: Secure login system using JWT
- 📂 File Upload: Employers can upload job-related files (via Multer)
- 📊 Database ORM: Uses Prisma for efficient database management
```

## 🤝 Contributing
Contributions are welcome! Feel free to open issues, submit PRs, or suggest features.

## 📜 License
This project is licensed under the MIT License.

---

🚀 **Stay tuned for updates and improvements!**

