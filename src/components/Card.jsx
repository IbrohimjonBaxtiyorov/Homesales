import more from "../assets/more.png";
import reed from "../assets/reed.svg";
import ContactCard from "./ContactCard";
export default function Card() {
  return (
    <div className="container mx-auto mt-[470px] px-[25px] sm:px-0 sm:mt-[370px]">
      <div>
        <img className="w-full" src={more} alt="" />
      </div>
      <div className="max-w-[650px] mt-[35px] sm:mt-[70px]">
        <h2 className="text-[#35465E] text-[24px] sm:text-[36px] font-extrabold">
          Всё, что нужно знать об этом доме
        </h2>
        <p className="text-[#35465E] mt-[25px] mb-[25px]">
          {" "}
          Участок расположен среди виноградников и леса, соседей рядом нет.
        </p>
        <p className="bg-gradient-to-b from-[#35465E] to-transparent bg-clip-text text-transparent">
          Массив находится под охраной фирмы «Безопасный город». Посёлок
          обеспечен своей трансформаторной подстанцией на 400 кВт, подведен
          центральный водопровод плюс дополнительные резервуары с запасом воды и
          каптаж на 120 кубов.
        </p>
        <button className="bg-[#2489FF] flex items-center gap-2 py-6 px-10 rounded-[5px] text-[#EBEBEB] mt-[50px]">
          {" "}
          <img src={reed} alt="" />
          Читать полностью
        </button>
      </div>

      <ContactCard/>

      <div className="flex flex-col gap-[5px] sm:gap-5 text-center items-center justify-center sm:mb-[54px]  mb-[38px]">
        <h2 className="text-[#35465E] text-[24px] sm:text-[36px] font-extrabold">Объект находится по адресу</h2>
        <p className="text-[#35465E] text-[16px] sm:text-[26px]">ул. В. Хромых, д. 29, 2 эт, оф. No2</p>
      </div>
    </div>
  );
}
