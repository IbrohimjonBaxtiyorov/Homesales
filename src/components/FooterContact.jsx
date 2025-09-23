import React from "react";

export default function FooterContact() {
  return (
    <div className="w-full flex items-center justify-center absolute bottom-[-80px]  sm:bottom-[-70px] z-20 ">
      <div className="bg-[#F2F2F2] flex flex-col md:flex-row md:items-center gap-[30px] sm:py-[42px] sm:px-[54px] max-w-[950px] rounded-[5px] py-[23px] px-[17px] mx-[25px] sm:mx-0">

        <p className="text-[#35465E] text-[16px] sm:text-[22px] font-extrabold mb-[33px] sm:mb-0">
          Запишитесь на экскурсию по выбранному дому{" "}
        </p>
        <input
          className="mb-5 sm:mb-0 bg-[#FFFFFF] py-[17px] pl-[33px] rounded-[5px] outline-none focus:outline-none "
          type="tel"
          placeholder="+7 (___) __-__-___"
        />
        <button className="px-[52px] py-[18px] bg-[#2489FF] rounded-[5px] text-[#EBEBEB] ">
          Записаться{" "}
        </button>

      </div>
    </div>
  );
}
