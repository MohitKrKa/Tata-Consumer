import React from 'react';
import { motion } from 'framer-motion';

const sectionVariants = {
  hidden: { opacity: 0, y: 50 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { type: 'spring', stiffness: 100, damping: 20 },
  },
};

const imageVariants = {
  hidden: { opacity: 0, scale: 0.95 },
  visible: {
    opacity: 1,
    scale: 1,
    transition: { duration: 0.8, ease: 'easeOut' },
  },
};

const Strategy7th_page = () => {
  const slides = [
    {
      title: 'HYPER-LOCALISATION',
      image: '/146.webp',
    },
    {
      title: 'CELEBRATING INDIA AND ITS DIVERSE CULTURE',
      image: '/147.webp',
    },
    {
      title: "LEADING WITH AI",
      image: '/148.webp'
    }, {
      title: "SPREADING AWARENESS, SPARKING SOCIAL CHANGE",
      image: '/149.webp'
    }
  ];

  return (
    <div className='marginal '>
      <div className="">
        <motion.section

          variants={sectionVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          className="flex flex-col mb-5 "
        >
          <motion.h2
            variants={sectionVariants}
            className="text-xl  font-semibold text-[#06aeef] mb-3 "
          >
            HYPER-LOCALISATION

          </motion.h2>
          <div className='flex md:flex-row flex-col gap-4'>
            <div className='bg-gray-50 p-4 md:w-[33%]'>
              <img src="/updated/Page-68.webp" alt="" />
              <div className='mt-4'>
                <p className='text-[#40aebc] text-xl'>
                  ‘Dumdar UP ke liye, Dumdar Chai’
                </p>
                <p className='mt-2'>
                  A cinematic short film showcased resilience and community strength through the story of a local strongman doing good.
                </p>
              </div>
            </div>
            <div className='bg-gray-50 p-4 md:w-[33%]'>
              <img src="/updated/Page-68-1.webp" alt="" />
              <div className='mt-4'>
                <p className='text-[#40aebc] text-xl'>
                  ‘Punjab di Vaddi Insaniyat’
                </p>
                <p className='mt-2'>
                  Highlighted Punjab’s deep-rooted culture of generosity through children repurposing their lunchboxes as ‘Dabba Langar’ to feed workers.
                </p>
              </div>
            </div>
            <div className='bg-gray-50 p-4 md:w-[33%]'>
              <img src="/updated/Page-68-2.webp" alt="" />
              <div className='mt-4'>
                <p className='text-[#40aebc] text-xl'>
                  ‘Kadak Haryana ke liye Kadak Chai’
                </p>
                <p className='mt-2'>
                  Celebrated the fearless spirit of Haryanvi women, featuring audacious stories of a strong woman cricketer,
                  a determined mother and an intrepid policewoman.
                </p>
              </div>
            </div>


            {/* <img
                variants={imageVariants}
                src="/146.webp"
                // alt={slide.title}
                className=" "
              /> */}
          </div>
          <div className='bg-gray-100 p-4'>
            <div className='md:w-[60%] mx-auto'>
          <img src="/updated/paradise.webp" className='md:w-full mb-4'  alt="" />
            
            <p className='text-[#40aebc] text-xl'>
            ‘Paradise in every sip’
            </p>
            <p className='mt-2'>
            Tata Tea Gold's fitting homage to the tradition of Noon Chai, the ageless Kashmiri tea, captivated with its magical pink hue and a distinctive delicious flavour.
            </p>
            </div>
          </div>
        </motion.section>
      </div>
      <div className="">
        <motion.section

          initial="hidden"
          whileInView="visible"

          className="flex flex-col mb-5 "
        >
          <motion.h2
            className="text-xl  font-semibold text-[#06aeef] mb-3 "
          >
            CELEBRATING INDIA AND ITS DIVERSE CULTURE

          </motion.h2>
          <div className=''>
            <img
              src="/147.webp"
              // alt={slide.title}
              className=" "
            />
          </div>
        </motion.section>
      </div>
      <div className="">
        <motion.section


          className="flex flex-col mb-5 "
        >
          <motion.h2

            className="text-xl  font-semibold text-[#06aeef] mb-3 "
          >
            LEADING WITH AI

          </motion.h2>
          <div className=''>
            <img

              src="/148.webp"
              // alt={slide.title}
              className=" "
            />
          </div>
        </motion.section>
      </div>
      <div className="">
        <motion.section

          className="flex flex-col mb-5 "
        >
          <motion.h2

            className="text-xl  font-semibold text-[#06aeef] mb-3 "
          >
            SPREADING AWARENESS, SPARKING SOCIAL CHANGE

          </motion.h2>
          <div className=''>
            <img

              src="/149.webp"
              // alt={slide.title}
              className=" "
            />
          </div>
        </motion.section>
      </div>

    </div>
  );
};

export default Strategy7th_page;
