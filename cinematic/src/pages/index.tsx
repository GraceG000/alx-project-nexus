import Link from "next/link";

const Home = () => {
  return (
    <>
      <div className="bg-black text-white min-h-screen flex flex-col justify-center items-center">
        <h1 className="font-bold text-[64px] mb-8 text-shadow-white-lg">Movies picked just for you</h1>
        <Link href="/dashboard">
          <button className="bg-white text-black py-2 px-4 rounded-[10rem] w-112.25 text-[40px] font-semibold cursor-pointer border-none ">Explore</button>
        </Link>
      </div>
    </>
  );
};
export default Home;
