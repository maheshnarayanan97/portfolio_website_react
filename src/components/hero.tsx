import { HERO_CONTENT } from '../constants/index.tsx'
import profilePic from '../assets/mahesh.jpg'
import { motion } from 'framer-motion'
import { RiDownloadCloud2Line } from 'react-icons/ri'
const HeroMain = () => {
    const container = (delay: any) => ({
        hidden: { x: -100, opacity: 0 },
        visible: {
            x: 0,
            opacity: 1,
            transition: { duration: 0.5, delay: delay }
        }
    })

    const handleDownload = () => {
        const link = document.createElement('a');
        link.href = '/resume.pdf'; // Make sure resume.pdf is in your public folder
        link.download = 'resume.pdf';
        link.click();
    };
    return (
        <div className='border-b border-neutral-900 pb-4 lg:mb-35'>
            <div className='flex flex-wrap'>
                <div className='w-full lg:w-1/2'>
                    <div className='flex flex-col items-center lg:items-start'>
                        <motion.h3
                            variants={container(0)}
                            initial='hidden'
                            animate='visible'
                            className='pb-16 text-3xl font-thin tracking-light lg:mt-16 lg:text-6xl'>
                            Mahesh Narayanan
                        </motion.h3>
                        <motion.span
                            variants={container(0.5)}
                            initial='hidden'
                            animate='visible' className='bg-gradient-to-r from-pink-300 via-slate-500 to-purple-500 bg-clip-text text-3xl tracking-tight text-transparent'>
                            Front End Developer
                        </motion.span>
                        <motion.p variants={container(1)}
                            initial='hidden'
                            animate='visible' className='my-2 max-w-xl py-6 font-light tracking-tighter'>{HERO_CONTENT}</motion.p>
                    </div>
                    <motion.button variants={container(1.5)}
                        initial='hidden'
                        animate='visible' type="button" className="text-white bg-[#24292F] hover:bg-[#24292F]/90 focus:ring-4 
                        focus:outline-none focus:ring-[#24292F]/50 font-medium rounded-lg text-sm px-5 py-2.5 text-center
                         inline-flex items-center dark:focus:ring-gray-500 dark:hover:bg-[#050708]/30 me-2 mb-2 cursor-pointer"
                        onClick={handleDownload}
                    >
                        <RiDownloadCloud2Line className='text-2xl pr-2' />
                        Download Resume
                    </motion.button>
                </div>
                <div className='w-full lg:w-1/3 lg:p-8'>
                    <div className='flex justify-center'>
                        <motion.img
                            initial={{ x: 100, opacity: 0 }}
                            animate={{ x: 0, opacity: 1 }}
                            transition={{ duration: 1, delay: 1.2 }}
                            src={profilePic} alt='mahesh' />

                    </div>
                </div>
            </div>
        </div >
    )
}

export default HeroMain
