import { Canvas } from '@react-three/fiber'
import { useState } from 'react';
import { Environment, Center } from '@react-three/drei'

import Shirt from './Shirt'
import Backdrop from './Backdrop'
import CameraRig from './CameraRig'

const CanvasModel = () => {
  const [isLoaded, setIsLoaded] = useState(false);

  const handleOnCreated = () => {
    setIsLoaded(true);
  };

  return (
    // Putting regular div inside the Canvas wil result to an error
    // Div is not part of the THREE namespace
    // It could be any HTML tags as long as if it is not part of the THREE namespace
    <Canvas
      shadows
      camera={{position: [0, 0, 0], fov: 25}} // manipulates the camera 
      gl={{preserveDrawingBuffer: true}}
      className="w-full max-w-full h-full transition-all ease-in"
      onCreated={handleOnCreated}
    >
      {isLoaded && (
        <>
          {/* 
            The isLoaded and onCreated attribute are meant to load all models before showing them
            Right now it does not work yet
          */}
          <ambientLight intensity={0.5} />
          <Environment preset='city'/>

          <CameraRig>
            <Backdrop />
            <Center>
              <Shirt />
            </Center>
          </CameraRig>
        </>
      )}
  </Canvas>
  )
}

export default CanvasModel