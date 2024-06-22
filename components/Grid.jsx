import { Copy } from 'lucide-react'
import React from 'react'

function Grid() {
  return (
    <section id='bento-grid' className='p-4 md:p-8' >

      <div className='grid  grid-cols-1 md:grid-cols-2 md:gap-8 gap-4 max-w-7xl mx-auto'>
        <div className='row-span-2 col-span-1 rounded-3xl group/bento hover:shadow-xl transition duration-200 shadow-input dark:shadow-none p-8 dark:bg-black  bg-white  justify-end flex flex-col space-y-4 min-h-fit ' style={{ backgroundImage: 'url(/b1.svg)', backgroundSize: 'cover', backgroundPosition: 'center' }}>
          <div className='group-hover/bento:translate-x-2 transition duration-200'>
            <i className='fa-solid fa-desktop fa-3x'></i>
            <div className='font-sans font-bold text-neutral-600 dark:text-neutral-200 mb-2 mt-2 text-3xl'>I prioritize client collaboration, fostering open communication</div>
          </div>
        </div>
        <div className='row-span-1 col-span-1 rounded-3xl group/bento hover:shadow-xl transition duration-200 shadow-input dark:shadow-none p-8 dark:bg-black dark:border-white/[0.2] bg-white border border-transparent justify-end flex flex-col space-y-4 h-fit' style={{ backgroundImage: 'url(/Grid.svg)', backgroundSize: 'cover' }}>
          <div className='group-hover/bento:translate-x-2 relative transition duration-200'>
            <i className='fa-solid fa-code fa-3x'></i>
            <div className='font-sans font-bold text-neutral-600 dark:text-neutral-200 text-3xl mb-2 mt-8'>Tech enthusiast with a passion for development.</div>
            <img src='/b4.svg' className='absolute -bottom-4 right-0  w-56' />
          </div>
        </div>
        <div className='row-span-1 col-span-1 rounded-3xl group/bento hover:shadow-xl transition duration-200 shadow-input dark:shadow-none p-8 dark:bg-black dark:border-white/[0.2] bg-white border border-transparent justify-end flex flex-col space-y-4 h-fit' style={{ backgroundImage: 'url(/Grid.svg)', backgroundSize: 'cover' }}>
          <div className='group-hover/bento:translate-x-2 relative transition duration-200 h-64'>
            <div className='font-sans font-bold text-neutral-600 dark:text-neutral-200 text-xl mb-2 mt-16'>
              Do you want to start a project together?

            </div>
            <button className="relative inline-flex h-12 mt-4 overflow-hidden rounded-lg p-[1px] focus:outline-none focus:ring-2 focus:ring-slate-400 focus:ring-offset-2 focus:ring-offset-slate-50">
              <span className="absolute inset-[-1000%] animate-[spin_2s_linear_infinite] bg-[conic-gradient(from_90deg_at_50%_50%,#E2CBFF_0%,#393BB2_50%,#E2CBFF_100%)]" />
              <span className="inline-flex h-full w-full cursor-pointer items-center justify-center rounded-lg bg-slate-950 px-3 py-1 text-sm font-medium text-white backdrop-blur-3xl">
                <Copy size={17} className='mr-2'/>
                Copy my email address
              </span>
            </button>
            <img src='/b5.svg' className='absolute bottom-0 right-0  w-64' />
          </div>
        </div>
      </div>

    </section>
  )
}

export default Grid