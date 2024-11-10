import React from "react";
import Image from "next/image";

export default function HeroSection (){
    return (
        <div
        className="container mx-auto px-4 py-16 flex items-center">
<div className="w-1/2 pr-10"
>
<h1
className="text-[40px] font-['Libre_Bodoni'] font-bold 
          leading-[65.8px] text-[#000000] 
          w-[496px] mb-6"
>
IMPECCABLE CRAFTSMANSHIP AND FINESSE
</h1>
<p
className="text-[30px] text-gray-700 w-full mb-8"
>
An example of intricate workmanship and detail, elegant necklaces and long and short chains form a part of our desirable collection.
</p>
<button
className="bg-[#A29875] text-white 
px-8 py-3 rounded-lg 
hover:bg-opacity-90 
transition duration-300 
ease-in-out"
>
Explore Now
</button>
</div>
<div className="w-1/2 flex justify-center">
        <Image 
          src="/images/disply.svg" 
          alt="Manzzari Craftsmanship"
          width={600}
          height={500}
          className="object-cover rounded-lg shadow-lg"
        />
      </div>
 </div> 
 
    )
}