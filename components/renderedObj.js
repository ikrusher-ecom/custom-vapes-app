import React, { Suspense, useEffect } from 'react';
import { useGLTF } from "@react-three/drei";
import { Canvas, useThree } from "@react-three/fiber";
import { OrbitControls } from "three/examples/jsm/controls/OrbitControls";

const CameraController = () => {
    const { camera, gl } = useThree();
    useEffect(
        () => {
            const controls = new OrbitControls(camera, gl.domElement);

            controls.minDistance = 3;
            controls.maxDistance = 20;
            return () => {
                controls.dispose();
            };
        },
        [camera, gl]
    );
    return null;
};

export default function RenderedObj(props) {
    function Model() {
        const { scene } = useGLTF(props.glb);
        return <primitive object={scene} />;
    }

    return (
        <div style={{ height: "100vh", backgroundColor: "#fff" }}>
            <Canvas camera={{ position: [-5, 0, 10], fov: 0.8 }}>
                <CameraController />
                <ambientLight />
                <spotLight position={[5, 0, 10]} intensity={1} />
                <Suspense fallback={null}>
                    <Model position={[0, 0, 0]} />
                </Suspense>
            </Canvas>
        </div>
    );
}