import React from 'react';
import profil from  "../assets/profil.jpg";

const ProfileImage = () => {
  return (
    <div className="flex justify-center items-center md:mt-[120px] mt-[350px] mr-[60px] md:mr-[30px]">
      <img 
        src={profil} 
        alt="ARAMALI Mohammed" 
        className="w-[220px] h-[220px] rounded-full border-4 border-[#915EFF] shadow-lg"
      />
    </div>
  );
};

export default ProfileImage;