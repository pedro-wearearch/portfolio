import Link from 'next/link';
import MouseScrollDown from './mouse-scroll-down';

export default function Footer(): JSX.Element {
  return (
    <div className='fixed w-full bottom-11 mx-auto'>
      <div className='flex items-center justify-center gap-4'>
        <MouseScrollDown className='w-[20px] text-green-500' />
        <p>SCROLL</p>
      </div>

      <div className='flex gap-4 justify-center mt-12'>
        All rights reserved. © 2023 Pedro Sobral.
        <Link href={'mailto:pedrosobral666@gmail.com'}>
          pedrosobral666@gmail.com
        </Link>
      </div>
    </div>
  );
}
