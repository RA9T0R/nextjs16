# 🎉 DevEvent - Next.js 16 Full Course Project

This repository contains the code for "DevEvent," a full-stack application built by following the "MongoDB Next.js 16 Full Course" tutorial on YouTube.

## 📋 Repository Purpose

The primary goal of this project is to learn and demonstrate the concepts of Next.js 16, including its new features, file-based routing (App Router), server components, and data fetching methods. It serves as a hands-on exercise from the aforementioned tutorial.

## ⚠️ Important Note: Incomplete Functionality

Please be aware that this repository is a learning exercise focused specifically on Next.js 16 architecture and principles.

As such, **some functionality (particularly around full CRUD operations) may be incomplete or simplified.** The project's main objective was to master Next.js, not to build a fully-featured, production-complete CRUD application.

___

## 🛠️ Tech Stack

| Component | Description |
| :--- | :--- |
| **Next.js 16** | The React framework for production (utilizing the App Router). |
| **Tailwind CSS** | A utility-first CSS framework for styling. |
| **MongoDB** | The database for storing event and user data. |
| **Cloudinary** | A cloud-based service for image management and storage. |

___

## 🎓 Training & Acknowledgement

This project is a direct result of following the comprehensive "MongoDB Next.js 16 Full Course" tutorial. All credit for the project structure, concepts, and code-along goes to the original creator.

- Tutorial: [Next.js 16 Full Course](https://youtu.be/I1V9YWqRIeI?si=0Zap4L6qyUtBx8l3).

___
## 🤸 Quick Start
To get a local copy up and running, follow these simple steps.
### Prerequisites
- Node.js (v18 or later recommended)
- npm / yarn / pnpm
- A MongoDB database (local or cloud-based like MongoDB Atlas)
- A Cloudinary account
### Installation
### 1. Clone the repo
```bash
git clone https://github.com/your-username/your-repo-name.git
cd your-repo-name
```
### 2. Install dependencies
```bash
npm install
# or
yarn install
# or
pnpm install
```
### 3. Set up environment variables
Create a file named `.env.local` in the root of your project and add the necessary environment variables (e.g., `MONGODB_URI`, `CLOUDINARY_CLOUD_NAME`, etc.).
```bash
# .env.local
MONGODB_URI=...
CLOUDINARY_CLOUD_NAME=...
CLOUDINARY_API_KEY=...
CLOUDINARY_API_SECRET=...
```
### 4. Run the development server
```bash
npm run dev
# or
yarn dev
# or
pnpm dev
```
The application will be accessible in your web browser at `http://localhost:3000/`.