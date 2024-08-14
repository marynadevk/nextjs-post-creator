# Next.js Post Creator

**Next.js Post Creator** is a small web application built with Next.js that allows users to create, view, and manage posts. The application uses `better-sqlite3` for database management and integrates with Cloudinary for image uploads. The project also includes features like optimistic UI updates to improve the user experience.

## Features

- **Post Creation:** Users can create new posts with titles, content, and images.
- **Database Management:** Uses `better-sqlite3` for efficient SQLite database interactions.
- **Image Uploads:** Integrates with Cloudinary to handle image uploads and storage.
- **Optimistic UI Updates:** Implements optimistic updates for a smoother user experience.

## Getting Started

### Prerequisites

- Node.js v16 or higher
- npm or yarn
- A Cloudinary account for image uploads

### Installation

1. **Clone the repository:**

```sh
git clone <https://github.com/marynadevk/nextjs-post-creator.git>
```
2. **Install dependencies for both frontend and backend:**
```sh
npm ci
```
3. **Create a .env.local file based on the provided .env.local.example**

4. **To start the development server, run:**
```sh
npm run dev
```

