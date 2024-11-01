import React from 'react';
import { motion } from "framer-motion";
import { styles } from '../styles';
import { educations } from '../constants'; // Assuming you have an education array in constants
import { SectionWrapper } from '../hoc';
import { textVariant } from '../motion';
import { useTranslation } from 'react-i18next';

const EducationCard = ({ education }) => {

  const { t,i18n } = useTranslation('education');

const getInstitution = (education) => {
  if(i18n.language === 'en'){
    return education.institutionEn;
  } else {
    return education.institutionFr;
  }
}

  const getDegree = (education) => {
    if(i18n.language === 'en'){
      return education.degreeEn;
    } else {
      return education.degreeFr;
    }
  }

  const getPoints = (education) => {
    if(i18n.language === 'en'){
      return education.pointsEn;
    } else {
      return education.pointsFr;
    }
  }


  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, ease: "easeInOut" }}
      className="bg-[#1d1836] p-5 rounded-lg shadow-lg mb-5"
    >
      <div className="flex items-center mb-4">
        <div className="w-16 h-16 flex justify-center items-center bg-[#232631] rounded-full">
          <img src={education.icon} alt={getInstitution(education)} className="w-14 h-14 object-contain rounded-lg" />
        </div>
        <div className="ml-4">
          <h3 className="text-white text-[24px] font-bold">{getDegree(education)}</h3>
          <p className="text-secondary text-[16px] font-semibold">{getInstitution(education)}</p>
        </div>
      </div>
      <p className="text-secondary text-[14px] mb-2">{education.date}</p>
      <ul className="list-disc ml-5 space-y-2">
        {getPoints(education).map((point, index) => (
          <li key={`education-point-${index}`} className="text-white-100 text-[14px] pl-1 tracking-wider">
            {point}
          </li>
        ))}
      </ul>
    </motion.div>
  );
};

const Education = () => {

  const { t } = useTranslation('education');
  return (
    <>
      <motion.div variants={textVariant()}>
        <p className={styles.sectionSubText}>
          {
            t("subTitle")
          }
        </p>
        <h2 className={styles.sectionHeadText}>{t('title')}</h2>
      </motion.div>
      <div className="mt-20 flex flex-col">
        {educations.map((edu, index) => (
          <EducationCard key={index} education={edu} />
        ))}
      </div>
    </>
  );
};

export default SectionWrapper(Education, 'education');