import Header from "@/lib/components/Header";
import Nav from "@/lib/components/Nav";
import Visual from "@/lib/components/Visual";

export default function Home() {
  return (
    <div>
      <Header />
      <main>
        <Visual />
        <Nav />
      </main>
    </div>
  );
}
