import React from 'react'
import Heading from '../Heading'
import { AnimatedCounter } from './ui/animated.counter'
import {motion} from "framer-motion"
const Mapvalue = () => {
  return (
    <div className='bg-gradient-to-r from-[#1168b3] to-[#00aabb] '>
      <div className='md:w-[90%] mx-auto h-auto'>
        <div className='flex justify-center md:justify-start  py-6 '>
          <Heading color="white" title={"WORKFORCE BY REGION"} linecolor={"#1168b3"} />
        </div>
        <div className="flex md:flex-row flex-col justify-between py-8 items-center">
          <div className='flex md:flex-row flex-col justify-center  md:gap-20 '>
            <div className="flex flex-col mt-2 w-[200px] mb-5">
              <h1 className="md:text-3xl text-2xl text-white leading-none">3,<AnimatedCounter value={844}/>*</h1>

              <div class="flex items-center my-2">
                <div class="w-3 h-2 bg-white rounded-full"></div>
                 <motion.div
  initial={{ width: 0 }}
  whileInView={{ width: "100%" }}
  viewport={{ once: true }}
  transition={{ duration: 1 }}
  className="h-0.5 bg-white"
/> 
              </div>
              <div className="text-white text-sm leading-tight">
                India
              </div>
              <p className='text-white text-xs my-6'>*Does not include plantation workers</p>
            </div>
            <div className="flex flex-col mt-2 w-[200px] mb-5">
              <h1 className="md:text-3xl text-2xl text-white leading-none"><AnimatedCounter value={399}/></h1>

              <div class="flex items-center my-2">
                <div class="w-3 h-2 bg-white rounded-full"></div>
                 <motion.div
  initial={{ width: 0 }}
  whileInView={{ width: "100%" }}
  viewport={{ once: true }}
  transition={{ duration: 1 }}
  className="h-0.5 bg-white"
/> 
              </div>
              <div className="text-white text-sm leading-tight">
                UK
              </div>
            </div>
            <div className="flex flex-col mt-2 w-[200px] mb-5">
              <h1 className="md:text-3xl text-2xl text-white leading-none"> <AnimatedCounter value={202}/></h1>

              <div class="flex items-center my-2">
                <div class="w-3 h-2 bg-white rounded-full"></div>
                <motion.div
  initial={{ width: 0 }}
  whileInView={{ width: "100%" }}
  viewport={{ once: true }}
  transition={{ duration: 1 }}
  className="h-0.5 bg-white"
/>              </div>
              <div className="text-white text-sm leading-tight">
                USA
              </div>
            </div>
            <div className="flex flex-col mt-2 w-[200px] mb-5">
              <h1 className="md:text-3xl text-2xl text-white leading-none"><AnimatedCounter value={139}/></h1>

              <div class="flex items-center my-2">
                <div class="w-3 h-2 bg-white rounded-full"></div>
                 <motion.div
  initial={{ width: 0 }}
  whileInView={{ width: "100%" }}
  viewport={{ once: true }}
  transition={{ duration: 1 }}
  className="h-0.5 bg-white"
/> 
              </div>
              <div className="text-white text-sm leading-tight">
                Other regions
              </div>
            </div>

          </div>
        </div>
      </div>
    </div>
  )
}

export default Mapvalue 