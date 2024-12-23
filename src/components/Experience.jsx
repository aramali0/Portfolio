import React from 'react'
import { VerticalTimeline,
VerticalTimelineElement } from 'react-vertical-timeline-component';
import { motion } from "framer-motion";
import 'react-vertical-timeline-component/style.min.css';
import { styles } from '../styles';
import { experiences } from '../constants';
import { SectionWrapper } from '../hoc';
import { textVariant } from '../motion';
import { t } from 'i18next';
import { useTranslation } from 'react-i18next';

const ExperienceCard = ({experience}) => {
  const {i18n} = useTranslation('experience')

  const getTitle = (experience) => {
    if(i18n.language === 'en'){
      return experience.titleEn;
    } else {
      return experience.titleFr;
    }
  }

  const getdate = (experience) => {
    if(i18n.language === 'en'){
      return experience.dateEn;
    } else {
      return experience.dateFr;
    }
  }

  const getPoints = (experience) => {
    if(i18n.language === 'en'){
      return experience.pointsEn;
    } else {
      return experience.pointsFr;
    }
  }


  return(
  <VerticalTimelineElement
  contentStyle={{background: '#1d1836', color:'#fff'}}
  contentArrowStyle={{background:'7px slid #232631'}}
  date={experience.date}
  iconStyle={{background: experience.iconBg }}
  icon={
    <div className='flex justify-center 
    items-center w-full h-full'>
      <img src={experience.icon}
      alt={experience.company_name} 
      className='w-[80%] h-[80%] object-contain rounded-full'
      />

    </div>
  }
  >
    <div>
      <h3 className='text-white text-[24px] 
      font-bold'>{getTitle(experience)}</h3>
      <p className='text-secondary text-[16px]
      font-semibold' style={{ margin: 0}}>{experience.company_name}</p>
      <ul className='mt-5 list-disc ml-5 space-y-2'>
        {
          getPoints(experience).map((point, index) => (
            <li key={`experience-point-${index}`}
            className='text-white-100 text-[14px] pl-1 tracking-wider'
            >
              {point}
            </li>
          ))
        }
      </ul>
    </div>
  </VerticalTimelineElement>
  )
}

const Experience = () => {
  const {t} = useTranslation('experience')
  return (
    <>
    <motion.div variants={textVariant()}>
        <p className={styles.sectionSubText}>
        {t('experience.subtitle')}
        </p>
        <h2 className={styles.sectionHeadText}>{t('experience.title')}</h2>
      </motion.div>
      <div className='mt-20 flex flex-col' >
        <VerticalTimeline>
          {experiences.map((experience,index) =>(
            <ExperienceCard key={index} experience={experience} />
          ))}
        </VerticalTimeline>
      </div>
    </>
  )
}

export default SectionWrapper(Experience,'work')