import bgImage from "../../public/home/book-bg.png";
import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <div className="flex flex-col relative justify-center items-center h-screen">
      <Image
        className="blur-4xl"
        src={bgImage}
        fill
        sizes="100vw"
        style={{ objectFit: "cover" }}
        alt="Background Image"
      />
      <div className="flex flex-col justify-center items-center bg-purple-100 rounded-md p-2 z-10">
        <div className="bg-purple pb-5 mb-5 text-5xl font-bold p-4 rounded-lg text-purple-800">
          <p>BookFinder</p>
        </div>
        <Link href="/store" className="bg-white text-purple-500 p-4 rounded-lg">
          Take me to the store
        </Link>
      </div>
    </div>
  );
}
