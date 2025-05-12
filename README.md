# Media Downloader

A modern web application for downloading videos and audio from YouTube and Instagram. Built with React, TypeScript, and Node.js.

## Features

- YouTube video and audio downloads
- Instagram post, reel, and story downloads
- Modern, responsive UI with TailwindCSS
- TypeScript for type safety
- Express backend with CORS support

## Prerequisites

- Node.js 16.x or later
- npm 7.x or later (for workspace support)

## Setup

1. Clone the repository:
```bash
git clone <repository-url>
cd ytdownloader
```

2. Install dependencies:
```bash
npm install
```

3. Start the development servers:
```bash
npm run dev
```

This will start both the frontend and backend servers:
- Frontend: http://localhost:5173
- Backend: http://localhost:3000

## Development

The project uses a monorepo structure with npm workspaces:

- `client/`: React + TypeScript frontend
- `server/`: Express + TypeScript backend

### Available Scripts

- `npm run dev`: Start both frontend and backend in development mode
- `npm run build`: Build both frontend and backend
- `npm run dev:client`: Start only the frontend
- `npm run dev:server`: Start only the backend

## Deployment

The application is configured for deployment on Vercel. The `vercel.json` file includes the necessary configuration for both the frontend and backend.

1. Push your code to GitHub
2. Import the repository in Vercel
3. Deploy!

## License

MIT 