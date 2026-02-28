const posts = [
  {
    title: "コーヒーカー始めました。",
    date: "2030.08.08",
    img: "thumbnail01.png",
  },
  {
    title: "濃厚クリーミーなミルクをどうぞ",
    date: "2030.08.05",
    img: "thumbnail02.png",
  },
  {
    title: "Sky Coffeeのオリジナル曲が完成！無料ダウンロード可能です。",
    date: "2030.08.02",
    img: "thumbnail03.png",
  },
  {
    title: "ハイキング用のコーヒーを販売中です。",
    date: "2030.07.28",
    img: "thumbnail04.png",
  },
  {
    title: "ショップの壁を塗ってみました。",
    date: "2030.07.27",
    img: "thumbnail05.png",
  },
  {
    title: "ブログをはじめました。",
    date: "2030.07.26",
    img: "thumbnail06.png",
  },
];

export default function Blog() {
  return (
    <div className="mx-auto max-w-292.5 px-5 py-12.5 md:px-7.5">
      <h2 className="text-center text-[30px] leading-7.5 font-bold tracking-[0.08em] text-[#24a8bf] md:text-[32px] md:leading-8">
        blog
      </h2>
      <div className="mt-2.5 mb-7.5 text-center text-[12px] leading-3 font-bold tracking-[0.03em] md:mt-2 md:text-[13px] md:leading-3.25">
        ブログ
      </div>
      <div className="grid grid-cols-1 gap-5.5 md:grid-cols-3 md:gap-7.5">
        {posts.map((post, index) => (
          <a href="#" key={index} className="cursor-pointer hover:opacity-80">
            <img src={post.img} alt={post.title} />
            <h3 className="mt-3 text-[15px] leading-6 font-bold">
              {post.title}
            </h3>
            <p className="mt-1.5 text-[12px] leading-3.5">{post.date}</p>
          </a>
        ))}
      </div>
      <a
        href="#"
        className="after-top-1/2 relative mx-auto mt-5.5 block w-full cursor-pointer rounded border py-4.5 text-center text-[14px] leading-none font-bold text-[#24a8bf] after:absolute after:top-1/2 after:right-4 after:-translate-y-1/2 after:rounded after:border-y-4 after:border-l-[6px] after:border-y-transparent hover:opacity-80 md:mt-7.5 md:w-55 md:text-[15px]"
      >
        ブログ一覧
      </a>
    </div>
  );
}
