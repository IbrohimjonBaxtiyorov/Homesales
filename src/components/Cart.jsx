import person from "../assets/person.png";
import arrowb from "../assets/arrowb.svg";
import magazine from "../assets/Magazine.png";

export default function () {
  return (
    <div className="sm:w-[90%] mx-[10px] pt-[30px] pr-[25px] sm:mx-0 sm:pr-0 md:pt-0 flex flex-col  md:flex-row  items-center justify-between rounded-[5px] pl-[25px] sm:pl-[66px] shadow-[0px_50px_80px_0px_#35465E1A,0px_-8px_14px_0px_#35465E05] mb-[86px] sm:mb-[170px]">
      <div className="max-w-[480px]">
        <h2 className="text-[#35465E] font-extrabold text-[24px] sm:text-[36px] mb-[10px]">
          PDF-презентация дома
        </h2>
        <p className="text-[#35465E] text-[16px] sm:text-[18px] mb-[30px]">
          Скачайте презентацию, в которой мы собрали всю информацию по объекту:
          расположение, планировка, преимущества и цены
        </p>
        <div className="relative">
          <button className="w-full  text-[#EBEBEB] bg-[#2489FF] rounded-[5px] px-10 py-[26px] flex items-center gap-[10px]">
            <img src={arrowb} alt="" /> Скачать полную презентацию
          </button>
          <img
            className="hidden sm:block sm:absolute top-[-50px] right-[-100px]"
            src={magazine}
            alt=""
          />
        </div>
      </div>
      <div className=" relative">
        <img src={person} alt="" />
        <div className="absolute bottom-[14px] right-0 sm:right-[23px] bg-[#FFFFFF] rounded-[5px] px-[12px] py-[20px]">
          <p className="text-[#35465E] font-bold">Михаил Третьяков</p>
          <p className="text-[#35465E]">Ваш агент на этом объекте</p>
        </div>
      </div>
    </div>
  );
}
