import { useThree } from '@react-three/fiber';
import { CubeTextureLoader } from 'three';

export default function SkyBox(): JSX.Element | null {
  const { scene } = useThree();
  const loader = new CubeTextureLoader();
  const sides = ['ft', 'bk', 'up', 'dn', 'rt', 'lf'];
  const texture = loader.load(sides.map((side) => `/sky/corona_${side}.png`));

  scene.background = texture;
  return null;
}
