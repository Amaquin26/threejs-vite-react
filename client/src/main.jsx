import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'

/*
  To create a project like this, type this in the terminal
  npm create vite@latest -- --template react client

  If any case you got an error running this project ( specially if this is the first time ),
  type this three important command in the terminal:
  1. cd client
  2. npm install

  OPTIONAL: 
  If you intend to use Three.js (which this project is using) install the Three.js library, type this in the terminal
  npm install three @react-three/fiber @react-three/drei maath valtio react-color framer-motion
  
  @react-three/fiber is a react renderer for Three.js library
  @react-three/drei is a useful addon fro react-three/fiber (the renderer)
  maath is math helper meant for Three.js
  valtio allows to easily manage react state
  react-color is a react color picker
  framer-motion is for cool animations

  For using tailwind with vite type this in the terminal. ( Read more here https://tailwindcss.com/docs/guides/vite for step by step guide)
  npm install -D tailwindcss postcss autoprefixer
  npx tailwindcss init -p
  
  3. npm run dev

  the assets, config, and public folder are from https://drive.google.com/drive/folders/166wA5NsMV_5D8NN7ujDDbPXC1X65vf2I
  be sure to delete the those folders after the setup of this project and then replace it
*/

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
)
