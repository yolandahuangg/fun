import React, { Suspense, useEffect, useState } from 'react';
import { Canvas } from '@react-three/fiber';
import { OrbitControls, Preload, useGLTF, Html, useProgress } from '@react-three/drei';

const Loader = () => {
    const { progress } = useProgress();

    return (
        <Html>
            <span className='canvas-loader' />
            <p className="font-sub text-sm lg:text-base mt-0">{progress.toFixed(2)}%</p>
        </Html>
    )
}

const Splash = ({ mobile }) => {
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
                scale={mobile ? 0.75 : 1.5}
                position={[0, 0.5, 0]}
                rotation={[0.2, 0 , -0.2]} 
            />
        </mesh>
    )
}

const SplashCanvas = () => {
    const [isMobile, setMobile] = useState(false);

    useEffect(() => {
        const mediaQuery = window.matchMedia("(max-width: 1024px)");
        setMobile(mediaQuery.matches);

        const handleMedia = (event) => {
            setMobile(mediaQuery.matches);
        };
        mediaQuery.addEventListener("change", handleMedia);

        return () => {
            mediaQuery.removeEventListener("change", handleMedia);
        };
    }, []);

    return (
        <Canvas shadows camera={{ position: [10, 15, 10], fov: 25 }} gl={{ preserveDrawingBuffer: true }}>
            <Suspense fallback={<Loader />}>
                <OrbitControls
                    autoRotate
                    enableZoom={false}
                    maxPolarAngle={Math.PI / 2}
                    minPolarAngle={Math.PI / 2}
                />
                <Splash mobile={isMobile}/>
            </Suspense>
            
            <Preload all />
        </Canvas>
    )
}

export default SplashCanvas