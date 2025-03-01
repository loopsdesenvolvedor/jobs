# Jobs - Job Search and Posting Platform

![jobs](https://github.com/user-attachments/assets/1b92ce29-ad5a-447a-8ed5-289305b481d1)

## 📌 About the Project

Jobs is a **full-stack job search and posting platform** designed to connect job seekers with potential employers. Built with modern web technologies, it ensures a smooth and efficient experience for both candidates and recruiters.

## 🎨 UI/UX Design

The design of the platform is still under development. You can check out the latest designs on Figma:
[Jobs Figma Design](https://www.figma.com/design/o0NF1UaJRxLkJYn85h1ehR/jobs?node-id=0-1&p=f&t=EkXW1piPmMLwycJd-0)

## 🚀 Technologies Used

The project leverages a robust stack of technologies to ensure security, scalability, and performance:

### Backend:

- **Next.js** - React framework for building server-side rendered applications
- **NextAuth.js** - Authentication library for Next.js applications
- **TypeScript** - Typed JavaScript for better code maintainability
- **Prisma** - ORM for database interactions
- **bcryptjs** - Password hashing for security
- **Multer** - File upload handling

### Frontend:

- **React** - JavaScript library for building user interfaces
- **Styled-Components** - CSS-in-JS library for styling components

### Development Tools:

- **Node.js** (latest LTS version recommended)
- **PostgreSQL** or another compatible database
- **npm** or **yarn**

## ⚙️ Installation and Setup

### Prerequisites

Ensure you have the following installed before proceeding:

```sh
- Node.js (latest LTS version recommended)
- PostgreSQL or another compatible database
- npm or yarn
```

## Clone the repository

git clone https://github.com/loopsdesenvolvedor/jobs.git
cd jobs

# Install dependencies

npm install # or yarn install

# Set up environment variables

# Create a .env file in the root directory and configure the necessary database and authentication credentials.

# Run database migrations

npx prisma migrate dev

# Start the development server

npm run dev # or yarn dev

## 📌 Features

- 🏢 Employer Dashboard: Post job listings and manage applications
- 👨‍💻 Job Seeker Dashboard: Search and apply for jobs
- 🔐 Authentication & Authorization: Secure login system using NextAuth.js
- 📂 File Upload: Employers can upload job-related files (via Multer)
- 📊 Database ORM: Uses Prisma for efficient database management

## 📜 License

This project is licensed under the MIT License.
