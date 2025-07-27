# Eye-Know

Eye-Know is a React-based web application that provides users with image recognition features powered by the Clarifai API. Users can sign in or register, submit images to receive AI-generated concept tags with confidence scores, and track their submission history. The app offers a clean, responsive UI with interactive elements including a profile modal and animated logo.

## Features

- **User Authentication:** Sign in, register, and sign out with token-based sessions.
- **Image Recognition:** Submit image URLs and get AI-generated concept tags with confidence scores.
- **Profile Management:** View and edit user profile details in a modal.
- **Dynamic UI:** Animated logo using `react-parallax-tilt`, particle background effects with `particles-bg`, and a responsive layout.
- **Dropdown Menu:** User profile picture with a dropdown menu to access profile and sign-out options.
- **State Management:** Uses React hooks for state and effect management.
- **Responsive Design:** Uses Tachyons and Bootstrap for flexible styling.

## Tech Stack

- React 19
- Vite build tool
- Reactstrap & Bootstrap for UI components and styling
- Tachyons CSS toolkit
- `react-parallax-tilt` for 3D logo animation
- `particles-bg` for animated backgrounds
- Clarifai API for image recognition
- ESLint with React hooks plugin for code quality

## Available Scripts

```bash
npm run dev     # Start development server
npm run build   # Build the production bundle
npm run preview # Preview the production build
npm run lint    # Run ESLint to check code quality
```
