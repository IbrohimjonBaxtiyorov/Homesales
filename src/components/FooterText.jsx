import home from "../assets/home.png";
import logo from "../assets/Logo.svg";
import telegram from "../assets/telegram.svg";
import whatsapp from "../assets/whatsapp.svg";
import viber from "../assets/viber.svg";
export default function FooterText() {
  return (
    <div className=" bg-[#3053b5] w-full pt-[245px] flex flex-col lg:flex-row items-center ">
      <div className=" mx-auto flex flex-col md:flex-row items-center gap-[27px] sm:gap-[81px]">
        <div className="flex items-center gap-[19px] max-w-[200px]">
          <img src={logo} alt="" />
          <p className="text-[#FFFFFF] text-[18px]">
            Агентство недвижимости в Алуште
          </p>
        </div>

        <div className="max-w-[450px] px-[25px]">
          <div className="flex flex-col sm:flex-row items-center gap-[10px] sm:gap-7 mb-[10px]">
            <p className="text-[#FFFFFF] text-[24px]">+7 (978) 888-1-654</p>
            <div className="flex items-center gap-5">
              <img src={viber} alt="" />
              <img src={whatsapp} alt="" />
              <img src={telegram} alt="" />
            </div>
          </div>
          <p className="text-[#FFFFFF] sm:text-left text-center">
            сайт носит исключительно информационный характер и ни при каких
            условиях не является публичной офертой
          </p>
        </div>
      </div>
      <img className="self-end " src={home} alt="" />
    </div>
  );
}
