import img1 from "../assets/img1.png";
import img2 from "../assets/img2.png";
import img3 from "../assets/img3.png";
import img4 from "../assets/img4.png";
import img5 from "../assets/img5.png";
import img6 from "../assets/img6.png";
import scroll from "../assets/scroll.svg";
import bath from "../assets/bath.png";
import arrowprev from "../assets/arrow-prev.svg";
import arrownext from "../assets/arrow-next.svg";
import Cart from "./Cart";
export default function Main() {
  return (
    <div>
      <div className="container mx-auto mt-[50px] px-[25px] sm:mt-[70px] sm:px-0 ">
        <h4 className="text-[#35465E] font-extrabold text-[24px] mb-[55px] sm:text-[36px] sm:mb-[35px]">
          Фотографии объекта
        </h4>
        <div className="flex flex-col gap-5 sm:grid grid-cols-3 gap-x-[30px] gap-y-[36px]">
          <img className="row-span-2 col-span-2 w-full" src={img3} alt="" />
          <img className="w-full" src={img2} alt="" />
          <img className="w-full" src={img4} alt="" />
          <div className="grid gap-y-[36px] row-span-1">
            <img className="w-full row-span-1 " src={img1} alt="" />
            <img className="w-full row-span-1" src={img5} alt="" />
          </div>
          <img className=" row-span-2 col-span-2  w-full" src={img6} alt="" />
        </div>
        <div className=" flex items-center mt-10 mb-25 sm:mt-[50px] sm:mb-[130px] gap-[17px] justify-center">
          <img src={scroll} alt="" />
          <p className="#35465E">Больше фото</p>
        </div>
        <div className="flex justify-center items-center ">
          <Cart />
        </div>
      </div>
      <div>
        <img className="w-full relative" src={bath} alt="" />
        <div className="container mx-auto relative mb-25 sm:mb-[170px]">
          <div className="bg-[#FFFFFF] p-[30px] sm:p-[50px] max-w-[558px] rounded-[5px] shadow-[0px_50px_80px_0px_#35465E1A,0px_-8px_14px_0px_#35465E05] absolute top-[-100px] sm:top-[-200px] mx-[10px] sm:mx-0   ">
            <h3 className="text-[#35465E] text-[24px] font-bold mb-[25px]">
              Экологичный дом по дизайн-проекту
            </h3>
            <p className="text-[#35465E] mb-[25px]">
              Строительство и отделка дома осуществлялись по дизайн-проекту с
              сопровождением. Система канализации своя, автономная.{" "}
            </p>
            <p className="text-[#35465E] mb-[45px]">
              По проекту построены локальные очистные сооружения, техническая
              вода выходит в чистом виде на полив растительности и обратно
              возвращается в бачок унитаза, что позволяет экономить воду.
            </p>
            <div className="flex items-center gap-[25px]">
              <button>
                <img src={arrowprev} alt="" />
              </button>
              <span className="text-[#35465E]">1 / 12</span>
              <button>
                <img src={arrownext} alt="" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
