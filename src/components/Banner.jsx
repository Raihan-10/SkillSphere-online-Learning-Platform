import React from 'react'

export default function Banner() {
  return (
    <div className="flex items-center justify-center bg-indigo-900 text-center text-white ">
      {/* Banner */}
      {/* const {scrollYProgress} = useScroll() return{" "}
      <motion.div style={{ scaleX: scrollYProgress }} /> */}
      <div className="mt-10 mb-10 space-y-5">
        <p className="bg-white/10 inline-flex items-center rounded-3xl px-5 py-1 border-white/20 border-2">
          <span className='animate-pulse'>8 courses available</span>
        </p>
        <h3 className="text-3xl md:text-5xl font-bold md:leading-20 px-2 md:px-0">Upgrade Your Skills Today</h3>
        <p className="leading-7 mb-7">
          Access expert-led courses in Development, Design, Marketing, and more.
          Learn at your own pace.
        </p>
        <div className="flex text-center justify-center gap-5">
          <button className="btn rounded-md bg-transparent text-white shadow-none hover:text-black hover:bg-white">
            Explore Courses
          </button>
          <button className="btn rounded-md bg-transparent text-white shadow-none hover:text-black hover:bg-white">
            Get Started Free
          </button>
        </div>
        
        
          <div className="mt-10 list-none flex flex-col md:flex-row justify-center gap-7 md:gap-16">
            <li className="flex flex-col">
              <p className="font-bold text-3xl">5+</p>
              <span>courses</span>
            </li>
            <li className="flex flex-col">
              <p className="font-bold text-3xl"> 100K+ </p>
              <span></span>learners
            </li>
            <li className="flex flex-col">
              <p className="font-bold text-3xl justify-center items-center flex gap-2">4.9 <span className="text-[20px]">⭐</span> </p> <span>Rating</span>
            </li>
            <li className="flex flex-col">
              <p className="font-bold text-3xl"> 5 </p>
              <span>Instructors</span>
            </li>
          </div>
    
      </div>
    </div>
  )
}
