# AI Note-Taking App

A full-stack note-taking application with AI-powered features built to demonstrate MERN/PERN stack development skills.

---

## Table of Contents
- [Overview](#overview)
- [Features](#features)
- [Tech Stack](#tech-stack)
- [Getting Started](#getting-started)
- [Project Structure](#project-structure)
- [AI Integration](#ai-integration)
- [Deployment](#deployment)
- [Contributing](#contributing)
- [License](#license)

---

## Overview
This is a simple note-taking app that allows users to create, edit, and manage notes. AI-powered features help summarize, improve, and auto-generate tags for notes. The app is built with a modern stack including **Next.js**, **TypeScript**, **Hono.js**, **PostgreSQL**, and **shadcn/ui**.

**Duration:** 1-2 days (POC)  
**Objective:** Demonstrate full-stack development and AI integration skills.  

---

## Features

### Authentication
- User registration and login
- Protected routes
- Simple user profile

### Notes Management
- Create notes with title and content
- View, edit, and delete notes
- Search notes by title

### AI Features
- **AI Summary** – Generate a summary of long notes
- **AI Improve** – Improve note content (grammar, clarity)
- **AI Tags** – Auto-generate relevant tags for notes

### UI/UX
- Clean interface using **shadcn/ui**
- Responsive design
- Dark/light theme toggle

---

## Tech Stack

**Frontend:**
- Next.js 14 (App Router)
- TypeScript (strict mode)
- shadcn/ui components
- Tailwind CSS
- React Hook Form

**Backend:**
- Hono.js for API routes
- PostgreSQL database
- Drizzle ORM / Prisma
- Zod for request validation

**Authentication:**
- NextAuth.js / Clerk / Better Auth

**AI Integration:**
- OpenAI API (GPT-3.5/GPT-4) [or your preferred AI API]

---

## Getting Started

### Prerequisites
- Node.js v20+
- PostgreSQL database
- OpenAI API key (or your preferred AI API key)

### Installation
```bash
git clone https://github.com/<your-username>/ai-note-taking-app.git
cd ai-note-taking-app
npm install
