export default function ContactCard() {
  const cards = [
    { text: "Стандартная ипотека" },
    { text: "Военная ипотека" },
    { text: "Материнский капитал" },
  ];

  return (
    <div className="mt-25 sm:mt-[170px] mb-[124px] sm:mb-[165px] flex gap-[35px] flex-col md:flex-row items-center justify-between shadow-[0px_50px_80px_0px_#35465E1A,0px_-8px_14px_0px_#35465E05] px-[18px] py-[30px] sm:pt-22 sm:pr-19 sm:pb-[116px] sm:pl-20 rounded-[5px] ">
      <div className="max-w-[520px]">
        <h3 className="text-[#35465E] font-extrabold text-[24px] sm:text-[36px] mb-[25px] sm:mb-[30px]">
          Этот объект можно оформить в ипотеку
        </h3>
        <div className="flex items-center justify-between gap-[10px] flex-wrap mb-[25px]">
          {cards.map(({ text }) => {
            return (
              <span
                className="bg-[#F2F2F2] text-[#35465E] px-[7px] py-[10px] rounded-[5px]"
                key={text}
              >
                {text}
              </span>
            );
          })}
        </div>
        <p className="mb-[15px] text-[#35465E] font-bold text-[20px]">
          Сопровождаем сделку на всех этапах
        </p>
        <p className="text-[#35465E] text-[20px]">
          Если вам одобрили ипотеку, мы подготовим все нужные документы для
          банка, поможем заключением сделки и безопасным оформлением имущества
          на вас
        </p>
      </div>

      <div className="bg-[#F2F2F2] sm:p-[54px] max-w-[450px] rounded-[5px] py-[23px] px-[17px]">
        <p className="text-[#35465E] text-[16px] sm:text-[22px] font-extrabold mb-[33px]">
          Запишитесь на консультацию по сделке ипотекой
        </p>
        <input
          className="mb-5 bg-[#FFFFFF] py-[17px] pl-[33px] w-full rounded-[5px] outline-none focus:outline-none "
          type="tel"
          placeholder="+7 (___) __-__-___"
        />
        <button className="px-[66px] py-[21px] w-full bg-[#2489FF] rounded-[5px] text-[#EBEBEB] ">
          Получить консультацию
        </button>
      </div>
    </div>
  );
}
