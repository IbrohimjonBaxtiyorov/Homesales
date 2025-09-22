import menu from "../assets/menu-button.svg";
import logo from "../assets/Logo.svg";
import headerbg from "../assets/headerimg.png";
import telegram from "../assets/telegram.svg";
import whatsapp from "../assets/whatsapp.svg";
import viber from "../assets/viber.svg";
import pause from "../assets/pause.svg";
import map from "../assets/map.svg"

export default function Header() {
  const cards = [
    { text: "Частное домовладение" },
    { text: "Современная архитектура" },
    { text: "Живописный вид на море" },
    { text: "Удобный подъезд" },
    { text: "Готово для проживания" },
    { text: "Закрытая территория" },
  ];

  const prices = [
    { text: "Цена объекта", price: "100 000 000 ₽" },
    { text: "Цена 1 кв. м.", price: "1 000 000 ₽" },
    { text: "Площадь дома", price: "100 м²" },
    { text: "Площадь участка", price: "50 соток" },
  ];
  return (
    <div
      style={{ backgroundImage: `url(${headerbg})` }}
      className={`min-h-[900px] bg-cover bg-center`}
    >
      <div className="container mx-auto px-[25px] sm:px-0">
        <header className=" pt-[38px] flex items-center justify-between mb-[30px] sm:mb-[87px]">
          <p className="flex items-center gap-[11px] text-[#FFFFFF]">
            <img src={menu} alt="" width={20} height={10} />
            Меню
          </p>
          <img src={logo} alt="" width={48} height={76} />

          <div className="flex items-center gap-4">
            <img src={viber} alt="" />
            <img src={whatsapp} alt="" />
            <img src={telegram} alt="" />
            <p className="text-[#FFFFFF] max-sm:hidden">+7 (978) 888-1-654</p>
          </div>
        </header>
        <div className="flex flex-col gap-[50px] sm:flex-row items-center justify-between">
          <div className="max-w-[750px]">
            <p className="text-[#FFFFFF] text-[18px] sm:text-[28px]">
              ← в каталог
            </p>
            <h2 className="text-[56px] font-extrabold text-[#FFFFFF] max-sm:text-[28px]">
              Дом 100 м2 под Алуштой на участке 50 соток
            </h2>
            <div className="mt-10 mb-[50px] grid grid-cols-2 sm:grid-cols-4 gap-9 ">
              {prices.map(({ text, price }) => {
                return (
                  <div key={price} className=" flex flex-col">
                    <span className="text-[#FFFFFF] text-[24px] font-bold">
                      {price}
                    </span>
                    <span className="text-[#FFFFFF] text-[18px]">{text}</span>
                  </div>
                );
              })}
            </div>
            <div className="flex items-center gap-[10px] flex-wrap">
              {cards.map(({ text }) => {
                return (
                  <span key={text} className="bg-[#F2F2F2] rounded-[5px] px-[7px] py-[10px]">
                    {text}
                  </span>
                );
              })}
            </div>

            <div className=" mt-[50px] flex flex-col sm:flex-row gap-[50px] ">
              <button className="bg-[#2489FF] flex items-center gap-[15px] rounded-[49px] p-1 pr-[30px] text-[#FFFFFF]">
                {" "}
               
              <img  className="w-[55px] h-[55px] rounded-full" src={map} alt="" />
                Посмотреть на карте
              </button>
              <button className="text-[#FFFFFF]">🡣 Подробнее об объекте</button>
            </div>
          </div>
          <div className=" w-[145px] h-[145px] sm:w-[194px] mb-[70px] sm:h-[194px]   ">
            <img className="w-full h-full " src={pause} alt="" />
          </div>
        </div>
      </div>
    </div>
  );
}
