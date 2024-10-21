import Image from 'next/image';
import one from '@/images/1.jpg';
import two from '@/images/2.jpg';
import three from '@/images/3.jpg';
import four from '@/images/4.jpg';
import five from '@/images/5.jpg';
import six from '@/images/6.jpg';

export default function Gallery() {
    const educreateLink = process.env.NODE_ENV === 'production' ? 'https://educreate.developop.org' : '/educreate';

    return (
        <>
            <nav className="fixed z-40 w-screen h-20 bg-[rgba(0,0,0,0.6)]">
                <ul className="flex w-screen h-full justify-around items-center list-none">
                    <li><a href="/" className="text-3xl flex items-center">Develo<p className='font-sans font-bold'>Pop</p></a></li>
                    <li>
                        <a href={educreateLink}
                        className="z-50 text-xl bg-blue-600 hover:bg-blue-500 px-4 py-2 font-bold rounded-md drop-shadow-2xl hover:drop-shadow-3xl hover:scale-105 inline-block transition-all duration-150 ease-in">
                            Educreate
                        </a>                
                    </li>
                </ul>
            </nav>
            <div className='py-24 px-32'>
                <h1 className='text-4xl font-bold'>Gallery</h1>
                <div className='grid grid-cols-3 gap-5 p-12'>
                    <Image
                    src={one}
                    alt="Why Care About Us"
                    width={300}
                    height={300}
                    className='p-2 bg-white rounded'
                    />
                    <Image
                    src={two}
                    alt="Why Care About Us"
                    width={300}
                    height={300}
                    className='p-2 bg-white rounded'
                    />
                    <Image
                    src={three}
                    alt="Why Care About Us"
                    width={300}
                    height={300}
                    className='p-2 bg-white rounded'
                    />
                    <Image
                    src={five}
                    alt="Why Care About Us"
                    width={300}
                    height={300}
                    className='p-2 bg-white rounded'
                    />
                    <Image
                    src={six}
                    alt="Why Care About Us"
                    width={300}
                    height={300}
                    className='p-2 bg-white rounded'
                    />
                    <Image
                    src={four}
                    alt="Why Care About Us"
                    width={300}
                    height={300}
                    className='p-2 bg-white rounded'
                    />
                </div>   
            </div>
        </>
    );
}