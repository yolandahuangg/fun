import React, { Suspense, useEffect, useState } from 'react';
import { Canvas } from '@react-three/fiber';
import { OrbitControls, Preload, useGLTF } from '@react-three/drei';


const Splash = () => {
    const splash = useGLTF('./splash/scene.gltf')

    return (
        <mesh>
            <hemisphereLight intensity={0.15} groundColor='white' />
            <spotLight
                position={[-20, 50, 10]}
                angle={0.12}
                penumbra={1}
                intensity={0.5}
                castShadow
                shadow-mapSize={1024}
            />
            <pointLight intensity={1} />
            <primitive 
                object={splash.scene}
                scale={1.4}
                position={[0, 0.5, 0]}
                rotation={[0.2, 0 , -0.2]} 
            />
        </mesh>
    )
}

const SplashCanvas = () => {
    return (
        <Canvas shadows camera={{ position: [10, 15, 10], fov: 25 }} gl={{ preserveDrawingBuffer: true }}>
            <OrbitControls
                autoRotate
                enableZoom={false}
                maxPolarAngle={Math.PI / 2}
                minPolarAngle={Math.PI / 2}
            />
            <Splash />
            <Preload all />
        </Canvas>
    )
}

export default SplashCanvas