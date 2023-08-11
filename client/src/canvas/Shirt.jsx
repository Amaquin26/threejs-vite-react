import { easing } from 'maath';
import { useSnapshot } from 'valtio';
import { useFrame } from '@react-three/fiber';
import { useGLTF, Decal, useTexture } from '@react-three/drei';

import state from '../store'

const Shirt = () => {
    const snap = useSnapshot(state);

    // useGLTF hook is used to load and access 3D models in the GLTF format (GL Transmission Format). 
    // GLTF is a common format for exchanging 3D models and scenes between different platforms and tools.

    // load a 3D model from a file path which is the .glb file (nodes = nodes of 3D model, materials = material used by the 3D model)
    const { nodes, materials } = useGLTF('/shirt_baked.glb') 

    // create texture for the shirt
    const logoTexture = useTexture(snap.logoDecal) // snap.logoDecal has the file path of the logo decal, see src/store/index.js
    // create a texture that will go over the shirt
    const fullTexture = useTexture(snap.fullDecal) // snap.logoDecal has the file path of the full decal, see src/store/index.js

    // applying the colors smoothly
    useFrame((state, delta) => easing.dampC(
        materials.lambert1.color,      // Color property
        snap.color,                   // Target color property
        .25,                         // Smooth time
        delta                         // Difference between frame
    ))

    // sometimes the shirt will not update
    // giving the group a key will fix the issue
    // this track state changes, react will render the model whenever the state changes
    const stateString = JSON.stringify(snap);

    return (
        <group
            key={stateString}
        >
            <mesh
                castShadow
                geometry={nodes.T_Shirt_male.geometry}
                material={materials.lambert1}
                material-roughness={1}
                dispose={null}
            >
                {snap.isFullTexture && (
                    <Decal 
                        position={[0, 0, 0]}
                        rotation={[0, 0, 0]}
                        scale={1}
                        map={fullTexture}
                    />
                )}
                {snap.isLogoTexture && (
                    <Decal 
                        position={[0, 0.04, 0.15]}
                        rotation={[0, 0, 0]}
                        scale={0.15}
                        map={logoTexture}
                        // attributes below does not change anything visually (atleast for me)
                        // removing those is fine the above attributes are the important
                        mapAnisotropy={16}
                        depthTest={false}
                        depthWrite={true}
                    />
                )}
            </mesh>
        </group>
    )
}

export default Shirt