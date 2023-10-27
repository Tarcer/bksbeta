import React from "react";

const Youtube = () => {
  return (
    <div className="flex justify-center flex-col items-center mb-16" data-aos="fade-up">
        <b className="flex justify-center mb-16 text-[70px]">Commencer votre expérience</b>
        <iframe
          src="https://www.youtube.com/embed/gs4Tyh-iPUE"
          title="YouTube video"
          allowFullScreen
          className="h-[500px] w-[47.57%]"
        ></iframe>
    </div>
  );
};

export default Youtube;
