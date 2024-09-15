export default function Home() {
  const educreateLink = process.env.NODE_ENV === 'production' ? 'https://educreate.developop.org' : '/educreate';

  return (
    <div className="w-screen overflow-x-hidden">
      <nav className="fixed z-40 w-screen h-20">
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
      <main className="flex min-h-screen flex-col items-center justify-between p-48">
        <div className="max-w-screen animate-pulse absolute bottom-0 left-[-20%] right-0 top-[-10%] h-[500px] w-[500px] rounded-full bg-[radial-gradient(circle_farthest-side,rgba(14,165,233,.4),rgba(255,255,255,0))]"></div>
        <div className="max-w-screen animate-pulse absolute bottom-0 right-[-20%] top-[-10%] h-[500px] w-[500px] rounded-full bg-[radial-gradient(circle_farthest-side,rgba(14,165,233,.4),rgba(255,255,255,0))]"></div>
        <div className="max-w-screen absolute bottom-0 left-0 right-0 top-0 flex items-center justify-center bg-[linear-gradient(to_right,#4f4f4f2e_1px,transparent_1px),linear-gradient(to_bottom,#4f4f4f2e_1px,transparent_1px)] bg-[size:30px_40px] [mask-image:radial-gradient(ellipse_80%_50%_at_50%_0%,#000_70%,transparent_110%)] -z-50"></div>
        
        <div className='flex flex-col justify-center items-center gap-8 w-screen lg:w-[80%] text-center'>
            <h1 className="text-4xl md:text-5xl font-bold z-10 sm:leading-[3rem] md:leading-[4rem]">Welcome to Developop</h1>
            <p className="text-xl p-10">
              The Developop Team is currently working on the new website, so please be patient as we launch a new 
              and improved website.
            </p>
        </div>

      </main>
    </div>
  );
}
