import { motion } from "framer-motion";
import { useTranslation } from 'react-i18next';
import { styles } from "../styles";
import ProfileImage from "./ProfileImage";
import cv_fr from '../assets/aramali_mohammed_fr.pdf';
import cv_en from '../assets/resume_aramali_mohammed.pdf';

const Hero = () => {
  const { t, i18n } = useTranslation("hero");

  const desc = t('hero.description').split(',');
  return (
    <section className={`relative w-full h-screen mx-auto`}>
      <div className="flex justify-around md:gap-[900px] mt-5">
        <div className=" flex flex-col mt-[300px]">

        <div
          className={`absolute inset-0 top-[70px]  max-w-7xl mx-auto ${styles.paddingX} flex flex-row items-start gap-5`}
        >
          <div className='flex flex-col justify-center items-center mt-5'>
            <div className='w-5 h-5 rounded-full bg-[#915EFF]' />
            <div className='w-1 sm:h-80 h-40 violet-gradient' />
          </div>

          <div>
            <h1 className={`${styles.heroHeadText} text-white`}>
              {t('hero.greeting')} <span className='text-[#915EFF]'>{t('hero.name')}</span>
            </h1>
            <p className={`${styles.heroSubText}  text-white-100`}>
              {
                desc.map((d, index) => (
                  <>
                    <span key={`hero-desc-${index}`}>{d}<br /></span>
                    <br className="hidden" />
                  </>
                ))
              }
            </p>
          </div>
          </div>
            <div className=" absolute top-[180px] md:top-[285px] md:max-w-2xl md:mx-[130px]  mx-[60px]   flex justify-start items-center gap-[40px] w-[50%]  mt-10">
              <button className="px-3 md:px-6 md:py-2 py-3 bg-[#915EFF] text-white md:text-lg text-base rounded-lg shadow-lg hover:bg-[#7a4edc] transition duration-300">
                <a href={
                  i18n.language === 'fr' ?
                  cv_fr
                  :
                  cv_en
                } download="ARAMALI_Mohammed_CV.pdf">{t('hero.cv')}</a>
              </button>
              <button className="px-6 py-3 bg-[#915EFF] text-white rounded-lg shadow-lg hover:bg-[#7a4edc] transition duration-300">
                <a href="#contact">{t('hero.contact')}</a>
              </button>
            </div>
        </div>
        <ProfileImage />
      </div>
      {/* <ComputersCanvas /> */}
      <div className='absolute xs:bottom-10 bottom-32 w-full flex justify-center items-center'>
        <a href='#about'>
          <div className='w-[35px] h-[64px] rounded-3xl border-4 border-secondary flex justify-center items-start p-2'>
            <motion.div
              animate={{
                y: [0, 24, 0],
              }}
              transition={{
                duration: 1.5,
                repeat: Infinity,
                repeatType: "loop",
              }}
              className='w-3 h-3 rounded-full bg-secondary mb-1'
            />
          </div>
        </a>
      </div>
    </section>
  );
};

export default Hero;