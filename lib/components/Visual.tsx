export default function Visual() {
  return (
    <div>
      <picture>
        <source media="(min-width: 768px)" srcSet="pc_main-visual.png" />
        <img
          src="sp_main-visual.png"
          alt="メインビジュアル"
          className="mx-auto"
        />
      </picture>
    </div>
  );
}
