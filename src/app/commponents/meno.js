import Link from "next/link";

export default function Meno(){
    return( 
        <div className="menoo flex md:hidden flex-col h-[41rem] gap-14 justify-center items-center bg-[#D9D9D9] w-[25%] py-12 rounded-xl">
            <div className="flex flex-col justify-center items-center w-full gap-10">    
                <Link href='./' className="button cursor-pointer gap-7 flex justify-center items-center w-[80%] py-2 rounded-2xl bg-[#5D5D5D]">
                    <div className="shake bg-[#D9D9D9] w-10 h-10 rounded-full"></div>
                    <h1 className="text-2xl text-[#D9D9D9] font-bold w-[60%]">Fiction</h1>
                </Link>
                <Link href='./Action' className="button cursor-pointer gap-7 flex justify-center items-center w-[80%] py-2 rounded-2xl bg-[#5D5D5D]">
                    <div className="shake bg-[#D9D9D9] w-10 h-10 rounded-full"></div>
                    <h1 className="text-2xl text-[#D9D9D9] font-bold w-[60%]">Action</h1>
                </Link>
                <Link href='./Drum' className="button cursor-pointer gap-7 flex justify-center items-center w-[80%] py-2 rounded-2xl bg-[#5D5D5D]">
                    <div className="shake bg-[#D9D9D9] w-10 h-10 rounded-full"></div>
                    <h1 className="text-2xl text-[#D9D9D9] font-bold w-[60%]">Drum</h1>
                </Link>
                <div className="button cursor-pointer gap-7 flex justify-center items-center w-[80%] py-2 rounded-2xl bg-[#5D5D5D]">
                    <div className="shake bg-[#D9D9D9] w-10 h-10 rounded-full"></div>
                    <h1 className="text-2xl text-[#D9D9D9] font-bold w-[60%]">Action</h1>
                </div>
            </div>
            <div className="none flex justify-center items-center w-[80%] h-[10rem] rounded-xl bg-white">
                <img className="w-[14rem]" src="https://imgurl.ir/uploads/l096975_Icn1001445www_tiktarh_com_.jpg" alt="png" />
            </div>
        </div>
    )
}