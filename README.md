# rstReact

A comprehensive collection of standard and custom React hooks, designed to demonstrate practical use cases, state management, and functional components in React.

## Project Overview

This project serves as a reference implementation for various React hooks. It includes both native hooks provided by the React library and custom-built hooks designed to solve common and advanced problems, including performance optimization, state management, and UI logic.

## Architecture & Structure

```text
src/
├── hooks/
│   ├── useCallBack/
│   ├── useContext/
│   ├── useClickOutside/
│   ├── useCookie/
│   ├── useEffect/
│   ├── useGeolocation/
│   ├── useIdle/
│   ├── useLayoutEffect/
│   ├── useMemo/
│   ├── useNetwork/
│   ├── usePrevious/
│   ├── useReducer/
│   ├── useRef/
│   ├── useScroll/
│   ├── useState/
│   ├── useTitle/
│   ├── useToggle/
│   └── useWebSocket/
├── App.jsx
└── main.jsx
```

## Available Hooks

### Standard Hooks
- **useState**: State management for standard data flow.
- **useEffect**: Side-effect handling, API calls, and event listeners.
- **useContext**: Global state management via Context API.
- **useReducer**: Complex state management logic.
- **useRef**: Persistent references to DOM elements and values.
- **useMemo**: Render optimization and heavy computation caching.
- **useCallback**: Function memoization to prevent unnecessary re-creations.
- **useLayoutEffect**: Synchronous handling of DOM mutations.

### Custom Hooks
- **useClickOutside**: Enhances UI logic by managing external interactions (e.g., closing modals).
- **useCookie**: Handles sessions, tokens, and browser cookies.
- **useGeolocation**: Tracks user location and manages permissions.
- **useIdle**: Detects user inactivity for automatic logouts or alerts.
- **useNetwork**: Controls internet connection states and offline modes.
- **usePrevious**: Stores and compares previous state or prop values.
- **useScroll**: Captures and records user scrolling behavior.
- **useTitle**: Dynamically updates the document title based on the context.
- **useToggle**: Simplifies boolean state switching (e.g., modals, dark mode).
- **useWebSocket**: Monitors real-time connections and manages data streams.

## Development

1. Install dependencies:
```bash
npm install
```

2. Start the development server:
```bash
npm run dev
```

## Build

To build the project for production:
```bash
npm run build
```
