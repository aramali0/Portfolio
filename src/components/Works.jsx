import React from "react";
import { Tilt } from "react-tilt";
import { motion } from "framer-motion";
import { useTranslation } from "react-i18next";

import { styles } from "../styles";
import { github, market, bistro, airTrafic, vote, fightGame, chatApp } from "../assets";
import { SectionWrapper } from "../hoc";
import { fadeIn, textVariant } from "../motion";

const ProjectCard = ({
  index,
  name,
  description,
  tags,
  image,
  source_code_link,
}) => (
    <motion.div variants={fadeIn("up", "spring", index * 0.5, 0.75)}>
      <Tilt
        options={{
          max: 45,
          scale: 1,
          speed: 450,
        }}
        className='bg-tertiary p-5 rounded-2xl sm:w-[350px] w-full h-[515px]'
      >
        <div className='relative w-full h-[230px]'>
          <img
            src={image}
            alt='project_image'
            className='w-full h-full object-cover rounded-2xl'
          />

          <div className='absolute inset-0 flex justify-end m-3 card-img_hover'>
            <div
              onClick={() => window.open(source_code_link, "_blank")}
              className='black-gradient w-10 h-10 rounded-full flex justify-center items-center cursor-pointer'
            >
              <img
                src={github}
                alt='source code'
                className='w-1/2 h-1/2 object-contain'
              />
            </div>
          </div>
        </div>

        <div className='mt-5 flex flex-col items-start justify-around h-[50%] '>
          <h3 className='text-white font-bold text-[24px]'>{name}</h3>
          <p className='mt-2 text-secondary text-[14px]'>{description}</p>
        <div className='mt-4 flex flex-wrap gap-2'>
          {tags.map((tag) => (
            <p
              key={`${name}-${tag.name}`}
              className={`text-[14px] ${tag.color}`}
            >
              #{tag.name}
            </p>
          ))}
        </div>
        </div>

      </Tilt>
    </motion.div>
);

const Works = () => {
  const { t } = useTranslation("work");

  const projects = [
    {
      name: t("projects.orderly.name"),
      description: t("projects.orderly.description"),
      tags: [
        { name: t("projects.orderly.tags.0"), color: "blue-text-gradient" },
        { name: t("projects.orderly.tags.1"), color: "green-text-gradient" },
        { name: t("projects.orderly.tags.2"), color: "pink-text-gradient" },
        { name: t("projects.orderly.tags.3"), color: "orange-text-gradient" },
      ],
      image: market,
      source_code_link: "https://github.com/aramali0/Orderly",
    },
    {
      name: t("projects.bistro_management.name"),
      description: t("projects.bistro_management.description"),
      tags: [
        { name: t("projects.bistro_management.tags.0"), color: "blue-text-gradient" },
        { name: t("projects.bistro_management.tags.1"), color: "green-text-gradient" },
        { name: t("projects.bistro_management.tags.2"), color: "pink-text-gradient" },
      ],
      image: bistro,
      source_code_link: "https://github.com/aramali0/restaurant-management-system",
    },
    {
      name: t("projects.aerologic.name"),
      description: t("projects.aerologic.description"),
      tags: [
        { name: t("projects.aerologic.tags.0"), color: "blue-text-gradient" },
        { name: t("projects.aerologic.tags.1"), color: "green-text-gradient" },
        { name: t("projects.aerologic.tags.2"), color: "pink-text-gradient" },
      ],
      image: airTrafic,
      source_code_link: "https://github.com/aramali0/Simulation-Du-Controle-Aearien",
    },
    {
      name: t("projects.votesphere.name"),
      description: t("projects.votesphere.description"),
      tags: [
        { name: t("projects.votesphere.tags.0"), color: "blue-text-gradient" },
        { name: t("projects.votesphere.tags.1"), color: "green-text-gradient" },
      ],
      image: vote,
      source_code_link: "https://github.com/bachriotmane/Internet-voting-system/tree/main",
    },
    {
      name: t("projects.fight_game.name"),
      description: t("projects.fight_game.description"),
      tags: [
        { name: t("projects.fight_game.tags.0"), color: "blue-text-gradient" },
        { name: t("projects.fight_game.tags.1"), color: "green-text-gradient" },
        { name: t("projects.fight_game.tags.2"), color: "pink-text-gradient" },
      ],
      image: fightGame,
      source_code_link: "https://github.com/aramali0/fight-game",
    },
    {
      name: t("projects.talksphere.name"),
      description: t("projects.talksphere.description"),
      tags: [
        { name: t("projects.talksphere.tags.0"), color: "blue-text-gradient" },
        { name: t("projects.talksphere.tags.1"), color: "green-text-gradient" },
        { name: t("projects.talksphere.tags.2"), color: "pink-text-gradient" },
        { name: t("projects.talksphere.tags.3"), color: "red-text-gradient" },
      ],
      image: chatApp,
      source_code_link: "https://github.com/aramali0/chat-app",
    },
  ];

  return (
    <>
      <motion.div variants={textVariant()}>
        <p className={styles.sectionSubText}>{t("projects.subtitle")}</p>
        <h2 className={styles.sectionHeadText}>{t("projects.title")}</h2>
      </motion.div>

      <motion.p
        variants={fadeIn("", "", 0.1, 1)}
        className="mt-4 text-secondary text-[17px] max-w-3xl leading-[30px]"
      >
        {t("projects.description")}
      </motion.p>

      <div className="mt-20 flex flex-wrap gap-7">
        {projects.map((project, index) => (
          <ProjectCard key={`project-${index}`} index={index} {...project} />
        ))}
      </div>
    </>
  );
};

export default SectionWrapper(Works, "works");