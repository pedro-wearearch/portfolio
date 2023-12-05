import { ScrollControlsState, useScroll } from '@react-three/drei';
import { useFrame } from '@react-three/fiber';
import { useState } from 'react';

interface Props {
  children: JSX.Element | JSX.Element[];
  scrollOpacity: (scroll: ScrollControlsState) => number;
}

export default function Section(props: Props): JSX.Element {
  const { children, scrollOpacity } = props;
  const [opacity, setOpacity] = useState(1);

  const scroll = useScroll();

  useFrame(() => {
    const newOpacity = scrollOpacity(scroll);
    setOpacity(newOpacity);
  });

  return (
    <section
      className='h-screen w-screen flex justify-center items-center px-6 md:px-10'
      style={{ opacity: opacity }}
    >
      {children}
    </section>
  );
}
