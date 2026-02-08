import Footer from "@/components/Footer";
import Link from "next/link";
import { SidebarToggle } from "@/components/ui/SidebarToggle";

const Home = () => {
  return (
    <div className="bg-black m-0 p-0 overflow-hidden relative">
       <div className='absolute top-5 left-5'>
                <SidebarToggle/>
              </div> 
      <div className="bg-black text-white min-h-screen flex flex-col justify-center items-center">
        <h1 className="font-bold text-[32px] md:text-[64px] mb-7.5 text-shadow-white-lg">
          Movies for you
        </h1>
        <Link href="/dashboard">
          <button className="bg-white w-full text-[20px] text-black py-2 px-4 rounded-[10rem] md:w-112.25 md:text-[40px] font-semibold cursor-pointer border-none ">
            Explore
          </button>
        </Link>
      </div>
    </div>
  );
};
export default Home;
