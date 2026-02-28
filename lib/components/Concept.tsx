export default function Concept() {
  return (
    <div className="mx-auto flex max-w-292.5 flex-wrap items-center px-5 py-10 md:px-7.5 md:py-12.5">
      <img src="concept.png" alt="コンセプト" className="w-full md:w-1/2" />
      <div className="w-full md:w-1/2">
        <div className="pl-5 tracking-widest md:pr-5 md:pl-10">
          <h2 className="mb-3.75 pt-7 text-[15px] leading-6.5 md:mt-0 md:mb-5 md:text-[16px] md:leading-4.5">
            Concept
          </h2>
          <p className="mb-5 text-[26px] leading-9.75 font-bold tracking-widest text-[#24a8bf] md:mb-7.5 md:text-[32px] md:leading-12">
            心静かにコーヒーを
          </p>
          <p className="text-[15px] leading-6.75 md:text-[16px] md:leading-7.25">
            立ち止まって、
            <br />
            空の青さを眺めて、
            <br />
            一息つきましょう。
          </p>
        </div>
      </div>
    </div>
  );
}
