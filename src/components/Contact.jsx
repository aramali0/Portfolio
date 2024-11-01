import React, { useRef, useState } from "react";
import { motion } from "framer-motion";
import emailjs from "@emailjs/browser";

import { styles } from "../styles";
import { EarthCanvas } from "./canvas";
import { SectionWrapper } from "../hoc";
import { slideIn } from "../motion";
import ToastComponent from "./ToastComponent";
import toast, { Toaster } from "react-hot-toast";
import profile from "../assets/profil.jpg";
import { useTranslation } from "react-i18next";

const Contact = () => {
  const { t } = useTranslation("contact");
  const formRef = useRef();
  const [form, setForm] = useState({
    name: "",
    email: "",
    message: "",
  });

  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    const { target } = e;
    const { name, value } = target;

    setForm({
      ...form,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setLoading(true);

    emailjs
      .send(
        "service_twc96co",//Service Id
        "template_bq8mu9w",// Templte Id
        {
          from_name: form.name,
          to_name: "Aramali",
          from_email: form.email,
          to_email: "mouhammedaramali@gmail.com",
          message: form.message,
        },
        "NyEWyQNOHnx_3blkE",//Public Key
      )
      .then(
        () => {
          setLoading(false);
          toast.custom((tt) => (
             <ToastComponent t={tt} name={"ARAMALI Mohammed"} message={t('successMessage')} image={profile} />
          ))

          setForm({
            name: "",
            email: "",
            message: "",
          });
        },
        (error) => {
          setLoading(false);
          console.error(error);

          toast.error(t('errorMessage'));
        }
      );
  };

  return (
    <div
      className={`xl:mt-12 flex xl:flex-row flex-col-reverse gap-10 overflow-hidden`}
    >
    <Toaster
      position="bottom-right"
      reverseOrder={false}
      className="z-50"
    />
      <motion.div
        variants={slideIn("left", "tween", 0.2, 1)}
        className='flex-[0.75] bg-black-100 p-8 rounded-2xl'
      >
        <p className={styles.sectionSubText}>{t('subtitle')}</p>
        <h3 className={styles.sectionHeadText}>{t('title')}</h3>

        <form
          ref={formRef}
          onSubmit={handleSubmit}
          className='mt-12 flex flex-col gap-8'
        >
          <label className='flex flex-col'>
            <span className='text-white font-medium mb-4'> {t('name')} </span>
            <input
              type='text'
              name='name'
              value={form.name}
              onChange={handleChange}
              placeholder= {t('name-placeholder')} 
              className='bg-tertiary py-4 px-6 placeholder:text-secondary text-white rounded-lg outline-none border-none font-medium'
            />
          </label>
          <label className='flex flex-col'>
            <span className='text-white font-medium mb-4'> {t('email')} </span>
            <input
              type='email'
              name='email'
              value={form.email}
              onChange={handleChange}
              placeholder={t('email-placeholder')}
              className='bg-tertiary py-4 px-6 placeholder:text-secondary text-white rounded-lg outline-none border-none font-medium'
            />
          </label>
          <label className='flex flex-col'>
            <span className='text-white font-medium mb-4'>{t('message')}</span>
            <textarea
              rows={7}
              name='message'
              value={form.message}
              onChange={handleChange}
              placeholder={t('message-placeholder')}
              className='bg-tertiary py-4 px-6 placeholder:text-secondary text-white rounded-lg outline-none border-none font-medium'
            />
          </label>
          <div className="w-full h-full flex  items-center justify-between">
            <a href="https://www.linkedin.com/in/mohammedaramali/" target="_blank" className='bg-blue-500 py-3 px-8 rounded-xl outline-none w-fit text-white font-bold shadow-md shadow-primary'>In</a>

            <button
              type='submit'
              className='bg-tertiary py-3 px-8 rounded-xl outline-none w-fit text-white font-bold shadow-md shadow-primary'
            >
              {loading ? t('sending'): t('send')}
            </button>
          </div>
        </form>
      </motion.div>

      <motion.div
        variants={slideIn("right", "tween", 0.2, 1)}
        className='xl:flex-1 xl:h-auto md:h-[550px] h-[350px]'
      >
        <EarthCanvas />
      </motion.div>
    </div>
  );
};

export default SectionWrapper(Contact, "contact");