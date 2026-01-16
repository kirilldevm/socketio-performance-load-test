# Socket.IO Performance Load Test

A comprehensive performance testing application built with Socket.IO for real-time communication, featuring a React frontend, Node.js backend, and Node.js client for load simulation.

## Project Overview

This project is designed to test and monitor the performance of Socket.IO connections under load. It consists of three main components:

- **Frontend**: React-based dashboard to visualize real-time metrics (CPU, memory, info)
- **Server**: Socket.IO server handling multiple client connections and broadcasting metrics
- **Node Client**: Simulated client connections for load testing purposes

## How to test the application

Run the server and frontend, and then run the nodeClient to simulate load.

The frontend dashboard will display real-time metrics, including CPU usage, memory consumption, and system information.

Frontend link: [https://socketio-performance-load-test-7i8m.vercel.app](https://socketio-performance-load-test-7i8m.vercel.app)

The server will broadcast real-time metrics to all connected clients, and the nodeClient will simulate load by connecting to the server and sending periodic messages.

Server link: [https://socketio-performance-load-test.onrender.com/](https://socketio-performance-load-test.onrender.com/)

The Node Client Worker can be scaled to simulate high-load scenarios. It will connect to the server and send periodic messages to simulate load.

Node Client link: [https://socketio-performance-load-test-2.onrender.com](https://socketio-performance-load-test-2.onrender.com)

## Project Structure

```
socketio-performance-load/
├── frontend/              # React TypeScript frontend application
│   ├── src/
│   │   ├── components/   # React components (CPU, Memory, Info widgets)
│   │   ├── utilities/    # Helper functions (Socket.IO connection, canvas animation)
│   │   ├── assets/       # Static assets
│   │   └── App.tsx       # Main application component
│   ├── package.json
│   └── vite.config.ts    # Vite build configuration
├── server/                # Node.js Socket.IO server
│   ├── servers.js        # Main server file
│   ├── socketMain.js     # Socket.IO event handlers
│   ├── clusterTest.js    # Cluster testing configuration
│   └── package.json
├── nodeClient/            # Node.js Socket.IO client for load testing
│   ├── index.js          # Client connection logic
│   └── package.json
└── README.md             # This file
```

## Prerequisites

- Node.js (v14.0.0 or higher)
- npm (v6.0.0 or higher)

## Installation

### 1. Clone the repository

```bash
git clone https://github.com/kirilldevm/socketio-performance-load-test
cd socketio-performance-load
```

### 2. Install dependencies

#### Frontend

```bash
cd frontend
npm install
cd ..
```

#### Server

```bash
cd server
npm install
cd ..
```

#### Node Client

```bash
cd nodeClient
npm install
cd ..
```

## Usage

### Starting the Server

Navigate to the server directory and start the server:

```bash
cd server
node servers.js
```

The server will start on the configured port (default: 3000).

### Starting the Frontend

In a new terminal, navigate to the frontend directory:

```bash
cd frontend
npm run dev
```

The frontend will be available at `http://localhost:5173` (or the port specified by Vite).

### Running the Node Client (Load Testing)

In another terminal, navigate to the nodeClient directory:

```bash
cd nodeClient
npm start
```

The client will begin connecting to the server and simulating load.

## Features

### Frontend Dashboard

- **CPU Monitoring**: Real-time CPU usage visualization
- **Memory Monitoring**: Real-time memory consumption tracking
- **System Info**: Display of current system information
- **Live Updates**: Canvas-based animations for smooth data visualization

### Server

- **Socket.IO Server**: Handles real-time bidirectional communication
- **Cluster Support**: Optional clustering for handling multiple processes (@socket.io/cluster-adapter)
- **Sticky Sessions**: Maintains client-server affinity (@socket.io/sticky)
- **Environment Configuration**: Supports .env files via dotenv

### Node Client

- **Load Simulation**: Connects to the server to simulate multiple client connections
- **Configurable**: Supports environment-based configuration

## Technology Stack

### Frontend

- **React**: UI library
- **TypeScript**: Type-safe JavaScript
- **Vite**: Build tool and dev server
- **Socket.IO Client**: Real-time communication
- **ESLint**: Code linting

### Server

- **Node.js**: JavaScript runtime
- **Socket.IO**: Real-time communication library
- **Cluster Adapter**: Support for distributed Socket.IO servers
- **Dotenv**: Environment variable management

### Node Client

- **Node.js**: JavaScript runtime
- **Socket.IO Client**: Client-side Socket.IO library
- **Dotenv**: Environment variable management

## Available Scripts

### Frontend

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run lint` - Run ESLint
- `npm run preview` - Preview production build

### Server

- No predefined scripts (run directly with `node servers.js`)

### Node Client

- `npm start` - Start the client

## Environment Variables

Create a `.env` file in the `server` and `nodeClient` directories as needed:

### Server (.env)

```
PORT=3000
NODE_ENV=development
```

### Node Client (.env)

```
SERVER_URL=http://localhost:3000
```

## Deployment

For deployment, you have two options:

1. **Separate Deployment**: Deploy frontend, server, and nodeClient as separate services
2. **Combined Deployment**: Package the server and nodeClient together (recommended for simpler deployments)

### Single Backend Deployment

To avoid deploying your backend multiple times:

- Keep frontend and backend separate
- Use a reverse proxy (Nginx, Apache) to serve both from the same domain
- Configure the proxy to route `/socket.io` to the backend and `/` to the frontend

## Performance Considerations

- **Cluster Mode**: Use `clusterTest.js` for multi-process testing
- **Sticky Sessions**: Configured to maintain session affinity in clustered environments
- **Load Testing**: The Node Client can be scaled to simulate high-load scenarios
