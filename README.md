# ProRouter Web Frontend

Modern AI chat playground, model catalog, and API developer dashboard for ProRouter.

## Features
- **AI Chat Playground**: Interactive multi-turn chat supporting all 21+ models with real-time streaming and reasoning tokens.
- **Model Explorer**: Live status, latency indicators, context window stats, and model rankings.
- **API Key Management**: Create, revoke, and manage API keys for your applications.
- **Activity & Usage**: Real-time request history and analytics.
- **Dark & Light Mode**: Built with Next.js, React, Tailwind CSS, and Lucide icons.

## Getting Started

### 1. Install Dependencies
```bash
npm install
```

### 2. Configure Environment
Create a `.env.local` file:
```env
# URL of your deployed ProRouter Backend API
API_BASE_URL=https://myrouter-backend.onrender.com
```

### 3. Run Development Server
```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) to view the application.

## Deploying on Vercel

1. Import this repository into [Vercel](https://vercel.com).
2. Set Environment Variable:
   - **Name:** `API_BASE_URL`
   - **Value:** `https://your-backend.onrender.com` (your deployed backend URL)
3. Click **Deploy**.
