# AI Note-Taking App

A full-stack note-taking application with AI-powered features built to demonstrate MERN/PERN stack development skills.

---
## Deployment
- The app is deployed on **Vercel** for live demonstration.  
- Live Demo:https://ai-notes-app-y9d2.vercel.app/


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





## Features

### Authentication
- User registration and login
- Protected routes

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

---

## Tech Stack

**Frontend:**
- Next.js 
- TypeScript (strict mode)
- shadcn/ui components
- Tailwind CSS
- React Hook Form

**Backend:**
- PostgreSQL database
-  Prisma

**Authentication:**
- NextAuth

**AI Integration:**
- Gemini AI

---

## Getting Started

### Prerequisites
- Node.js v20+
- PostgreSQL database
- Gemini ApiKey

### Installation
```bash
git clone https://github.com/sabariswaran801/ai_notes_app.git
cd ai_notes_app
npm install
