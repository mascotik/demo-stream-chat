# Stream Chat Demo - Scroll Issue Reproduction

Minimal reproduction repository for Stream Chat React SDK scroll issues.

## Issue Description

Scroll jump issue when loading older messages (pagination) in the MessageList component.

## Setup

### 1. Install dependencies

```bash
npm install
```

### 2. Configure environment variables

Copy `.env.example` to `.env` and fill in your credentials:

```bash
cp .env.example .env
```

Required variables:
- `VITE_API_KEY` - Stream Chat API Key
- `VITE_GROUP_CHAT_URL` - Backend URL for token generation
- `VITE_USER_ID` - Test user ID
- `VITE_USER_NAME` - Test user display name

### 3. Run locally

```bash
npm run dev
```

Open http://localhost:5173

