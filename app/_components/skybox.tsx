import { useThree } from '@react-three/fiber';
import { useCubeTexture } from '@react-three/drei';

export default function SkyBox(): JSX.Element | null {
  const { scene } = useThree();
  const envMap = useCubeTexture(
    ['ft.png', 'bk.png', 'up.png', 'dn.png', 'rt.png', 'lf.png'],
    { path: 'sky/' },
  );

  scene.background = envMap;
  return null;
}
