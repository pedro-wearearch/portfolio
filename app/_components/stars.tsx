import { PointMaterial, Points } from '@react-three/drei';
import { useFrame } from '@react-three/fiber';
import { useRef, useCallback, useEffect, useState } from 'react';

export default function Stars(): JSX.Element {
  const ref = useRef<THREE.Points>(null!);
  const mousePosition = useRef({ x: 0, y: 0 });

  const updateMousePosition = useCallback((e: any) => {
    mousePosition.current = { x: e.pageX, y: e.pageY };
  }, []);

  useEffect(() => {
    window.addEventListener('mousemove', updateMousePosition, false);

    return () => {
      window.removeEventListener('mousemove', updateMousePosition, false);
    };
  }, [updateMousePosition]);

  useFrame(({ camera }) => {
    camera.rotation.x = mousePosition.current.y * 0.00025;
    camera.rotation.z = mousePosition.current.x * 0.00025;
  });

  const [sphere] = useState(() => {
    const temp = [];
    for (let i = 0; i < 10000; i++) {
      const x = Math.random() * 1000 - 500;
      const y = Math.random() * 1000 - 500;
      const z = (Math.random() / 2.1) * 1000 - 500;
      temp.push(x, y, z);
    }
    return new Float32Array(temp);
  });

  return (
    <group rotation={[0, 0, Math.PI / 4]}>
      <Points ref={ref} positions={sphere} stride={3} frustumCulled={false}>
        <PointMaterial
          color='white'
          size={0.4}
          sizeAttenuation={true}
          depthWrite={false}
        />
      </Points>
    </group>
  );
}
