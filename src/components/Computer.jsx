import React, { Suspense, useEffect, useState } from 'react';
import { Canvas } from '@react-three/fiber';
import { OrbitControls, Preload, useGLTF } from '@react-three/drei';

const Computer = () => {
    const computer = useGLTF('../assets/computer/scene.gltf')

    return (
        <mesh>
            <hemisphereLight intensity={0.15} groundColor='#f6f5f3' />
        </mesh>
    )
}

const ComputerCanvas = () => {
    return (
        <Canvas shadows >
            
        </Canvas>
    )
}

export default ComputerCanvas