'use client';

import { Canvas } from '@react-three/fiber';
import Stars from '@/app/_components/stars';

import { PerspectiveCamera, Scroll, ScrollControls } from '@react-three/drei';
import { useRef } from 'react';
import Footer from '@/app/_components/footer';
import SkyBox from '@/app/_components/skybox';
import Section from '@/app/_components/section';

export default function Page(): JSX.Element {
  const ref = useRef<HTMLDivElement>(null!);

  return (
    <div className='w-full flex flex-col gap-y-[2000px]' ref={ref}>
      <div className='fixed top-0 left-0 right-0 bottom-0'>
        <Canvas className='w-full'>
          <PerspectiveCamera makeDefault position={[0, 0, 7]} fov={75} />
          <ambientLight intensity={Math.PI / 2} />

          <spotLight
            position={[1, 1, 1]}
            angle={0.15}
            penumbra={1}
            decay={0}
            intensity={Math.PI}
          />

          <pointLight
            position={[-11, -11, -11]}
            decay={2}
            intensity={Math.PI}
          />

          <Stars />

          <SkyBox />

          <ScrollControls damping={0.25} pages={3}>
            <Scroll html>
              <Section scrollOpacity={(scroll) => 1 - scroll.range(0, 1 / 3)}>
                <p>Hello, I am Pedro Sobral</p>
              </Section>

              <Section scrollOpacity={(scroll) => scroll.curve(1 / 3, 1 / 3)}>
                <p>Second</p>
              </Section>

              <Section scrollOpacity={(scroll) => scroll.range(2 / 3, 1 / 3)}>
                <p>Third</p>
              </Section>
            </Scroll>
          </ScrollControls>
        </Canvas>
        <Footer />
      </div>
    </div>
  );
}
