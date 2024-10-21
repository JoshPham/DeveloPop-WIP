"use client";

import { FaChevronDown } from 'react-icons/fa';
import Image from "next/image";

export default function Home() {
  const educreateLink = process.env.NODE_ENV === 'production' ? 'https://educreate.developop.org' : '/educreate';

  const scrollToBottom = () => {
    window.scrollTo({
      top: document.body.scrollHeight,
      behavior: "smooth"
    });
  };

  return (
    <div className="w-screen overflow-x-hidden">
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
      <main className="flex min-h-screen flex-col items-center justify-between p-48 pb-0">
        <div className="max-w-screen animate-pulse absolute bottom-0 left-[-20%] right-0 top-[-10%] h-[500px] w-[500px] rounded-full bg-[radial-gradient(circle_farthest-side,rgba(14,165,233,.4),rgba(255,255,255,0))]"></div>
        <div className="max-w-screen animate-pulse absolute bottom-0 right-[-20%] top-[-10%] h-[500px] w-[500px] rounded-full bg-[radial-gradient(circle_farthest-side,rgba(14,165,233,.4),rgba(255,255,255,0))]"></div>
        <div className="max-w-screen absolute bottom-0 left-0 right-0 top-0 flex items-center justify-center bg-[linear-gradient(to_right,#4f4f4f2e_1px,transparent_1px),linear-gradient(to_bottom,#4f4f4f2e_1px,transparent_1px)] bg-[size:30px_40px] [mask-image:radial-gradient(ellipse_80%_50%_at_50%_0%,#000_70%,transparent_110%)] -z-50"></div>
        
        <div className="h-[75vh] flex flex-col justify-start items-center gap-5">
          <div className='flex flex-col justify-center items-center gap-8 w-screen lg:w-[80%] text-center'>
              <h1 className="text-4xl md:text-5xl font-bold z-10 sm:leading-[3rem] md:leading-[4rem]">Welcome to Developop</h1>
              <p className="text-xl p-10">
                The Developop Team is currently working on the new website, so please be patient as we launch a new 
                and improved website.
              </p>
          </div>
          <button className='animate-bounce' onClick={scrollToBottom}>
            <FaChevronDown />
          </button>
        </div>
          <div className='relative z-10 w-screen h-[100vh] flex justify-center'>
            <div className="absolute top-0 left-0 w-full h-full animate-pulse bg-gradient-to-b from-black to-sky-950 -z-10"></div>
            <div className='flex flex-col lg:grid w-[80vw] lg:w-[80vw] h-[70vh] p-32 justify-between lg:grid-cols-2 gap-10 relative z-20'>
              <div className='flex flex-col gap-5'>
                <h1 className='text-3xl lg:text-4xl font-bold'>Why Us?</h1>
                <p className='text-md lg:text-lg'>DeveloPop is proud to partner with the YMCA and Boys and Girls Club, 
                  with over 3,600 schools excited about our innovative solutions.</p>
                <a href="/gallery" className='text-xl font-bold underline hover:no-underline'>View Gallery →</a>
              </div>
              <div className='flex flex-col items-center gap-5'>
                <Image 
                  src="https://darien-ymca.org/wp-content/uploads/2024/08/ymca_blu_rgb_r.png"
                  alt="Why Care About Us"
                  width={300}
                  height={500}
                  className='p-5 bg-white rounded'
                />
                <Image 
                  src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS_NS82HZeVgbub9sRyhetef3tZ_b-O9FW3RA&s"
                  alt="Why Care About Us"
                  width={300}
                  height={300}
                  className='p-5 bg-white rounded'
                />
              </div>
            </div>
            <div className='grid'>

            </div>
          </div>


      </main>
    </div>
  );
}