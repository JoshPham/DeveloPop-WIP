import { useRouter } from 'next/router';

export default function NotFound() {

    return (
        <div className='w-full h-screen flex flex-col gap-5 justify-center items-center h-screen-minus-20'>
            <h1 className='text-4xl'>404 Page Not Found</h1>
            <a href="/" className='text-cyan-400 underline hover:no-underline hover:text-cyan-300'>Click here to navigate back to the home page</a>
        </div>
    );
}