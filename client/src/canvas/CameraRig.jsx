import { useRef } from "react"
import { useFrame } from "@react-three/fiber"
import { easing } from "maath"
import { useSnapshot } from "valtio"

import state from '../store'


const CameraRig = ({ children }) => {
    const group = useRef();
    const snap = useSnapshot(state)

    // this hook allows you to execute code on every rendered frame so we can run
    // different effects, update controls, and so on
    useFrame((state, delta) => {
        // This function will be executed on every frame render

        // make the shirt look good by making it responsive to screen size
        const isBreakpoint = window.innerWidth <= 1260;
        const isMobile = window.innerWidth <= 600;

        // set the initial position of the model 
        let targetPosition = [-0.4, 0, 2];
        if(snap.intro) {
            // we are in the intro page
            if(isBreakpoint) targetPosition = [0, 0, 2];
            if(isMobile) targetPosition = [0, 0.2, 2.5];
        } else {
            // we are in the customization page
            if(isMobile) targetPosition = [0, 0, 2.5]
            else targetPosition = [0, 0, 2];
        }

        // set model camera position
        easing.damp3(state.camera.position, targetPosition, 0.25, delta)

        // Calculate the new rotation values based on user input 
        // (you can replace this variables in the target rotation values)
        // const rotationX = state.pointer.y / 10;
        // const rotationY = -state.pointer.x / 5;

        // set the model rotation smoothly
        easing.dampE(
        group.current.rotation,                             // The rotation property of the Three.js object
        [state.pointer.y / 10, -state.pointer.x / 5, 0],    // Target rotation values
        0.25,                                               // Smooth time (duration of transition)
        delta                                               // Time difference between frames
        )
    })

    
    return <group ref={group}>{children}</group>
}

export default CameraRig