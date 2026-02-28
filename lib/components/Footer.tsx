export default function Footer() {
  return (
    <footer className="bg-black pt-15 pb-5 md:pt-17.5 md:pb-7.5">
      <img
        className="mx-auto mb-12 block w-25 cursor-pointer hover:opacity-80 md:w-45"
        src="logo-white.png"
        alt="Sky Coffee"
      />
      <p className="text-center text-[10px] leading-4.25 -tracking-tighter text-[#8b8b8b] md:text-[12px] md:leading-3.5">
        &copy;Sky Coffee
      </p>
    </footer>
  );
}
