import { useProgress } from '@react-three/drei';
import clsx from 'clsx';

export default function LoadingScreen(): JSX.Element {
  const { progress } = useProgress();

  return (
    <div
      className={clsx(
        'absolute w-screen h-screen top-0 bottom-0 flex items-center justify-center z-10 bg-black',
        progress === 100 &&
          'transition-all duration-1000 ease-in-out opacity-0 -z-10',
      )}
    >
      <div className='w-1/2 max-w-[200px] flex flex-col items-center gap-6'>
        <h1 className='text-white'>LOADING {progress}%</h1>

        <div
          style={{ width: `${progress}%` }}
          className='h-0.5 bg-white rounded-md'
        />
      </div>
    </div>
  );
}
