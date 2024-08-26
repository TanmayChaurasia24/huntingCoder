import Link from "next/link";
import Image from "next/image";
import homeimg from "../public/homeimg.avif";

export default function Home() {
  return (
    <>
      <main className="flex min-h-screen flex-col items-center">
        <h1 className="text-5xl">Hunting Coder</h1>
        <h2 className="mt-0">A blog for coders from hunting coders</h2>

        <div className="p-5">
          <Image
            className="rounded-md"
            height={127}
            width={237}
            src={homeimg}
            alt=""
          />
        </div>

        <div className="mt-10">
          <h2>Popular blogs</h2>
          <div>
            <h3>JavaScript for Beginners</h3>
            <p>Lorem ipsum dolor sit amet, consectetur</p>
          </div>
          <div>
            <h3>JavaScript for Beginners</h3>
            <p>Lorem ipsum dolor sit amet, consectetur</p>
          </div>
          <div>
            <h3>JavaScript for Beginners</h3>
            <p>Lorem ipsum dolor sit amet, consectetur</p>
          </div>
        </div>
      </main>
    </>
  );
}
