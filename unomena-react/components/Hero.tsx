import Image from "next/image";

export default function Hero() {
  return (
    <div className="relative p-8">

      <div className="relative p-8">
        <Image 
          src="/Bitmap.png" 
          alt="Shoes on pavement" 
          width={679.12} 
          height={0} 
          className="absolute right-20 top-20 object-cover z-0" 
        />
        <div className="relative z-10 space-y-4 top-40 left-20">
          <h1 className="text-7xl">
            The <span className="text-yellow-500">Creative</span> VC For <br/> The Creator <br/> Economy
          </h1>
          <p className="text-[20px] font-noto text-base">
            Popstar Ventures is launching a $50M Pre-seed <br/> and Seed early stage venture fund in the US to <br/> invest in Creator Economy startups, leveraging <br/> our popstar network of 100M+ followers.
          </p>
          <button className="flex items-center justify-center mt-20 gap-2 px-4 py-2 bg-[#343434] text-white rounded-full">
            <span>Contact Us</span>
            <Image src="/plus.svg" alt="plus" width={15} height={0}/>
          </button>
         
        </div>
        <div className="mt-20">
        </div>
      </div>
    </div>
  );
}