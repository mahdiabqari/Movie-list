'use client'
import Link from "next/link"
import { useState } from "react"

export default function Header(){

    const [info , setInfo] = useState([
    ])
    const [check , setCheck] = useState(false)
    const [pic , setPic] = useState([])

    const showmeno = (e) => {
        e.preventDefault()
        if(!check){
            setInfo([
                {title: 'Marvel' , to:'./' , id:1},
                {title: 'Action' , to:'./Action' , id:2},
                {title: 'Drum' , to:'./Drum' , id:3},
            ])
            setPic([{src: 'https://imgurl.ir/uploads/l096975_Icn1001445www_tiktarh_com_.jpg' , id:4}])
            setCheck(true)
        }
        else{
            setInfo([])
            setPic([])
            setCheck(false)
        }
    }

    return(
        <div className="container-header flex justify-center items-center w-full h-[4.5rem] border-b-white border-b-4 py-4 px-5 md:px-2">
            <div className="icons w-[10%] md:w-[25%] flex justify-center items-center gap-2">
                <Link className="icon-header cursor-pointer w-10 rounded-full" href='https://t.me/mahdiabqari'><img className="icon-header cursor-pointer w-10 rounded-full" src="https://uploadkon.ir/uploads/779116_24telegram.jpg" alt="png" /></Link>
                <Link className="icon-header cursor-pointer w-10 rounded-full" href='https://www.instagram.com/mahdiabqari/'><img className="icon-header cursor-pointer w-10 rounded-full" src="https://uploadkon.ir/uploads/ae8216_24instagram.jpg" alt="png" /></Link>
                <Link className="icon-header cursor-pointer w-10 rounded-full" href='https://github.com/mahdiabqari'><img className="icon-header cursor-pointer w-10 rounded-full" src="https://imgurl.ir/uploads/f085_mf6e1dnm_thumb.png" alt="png" /> </Link>
            </div>
            <div className="title w-[85%] md:w-[50%] flex gap-14 md:gap-3 justify-center items-center">
                <h1 className="text-white font-bold text-[30px]">M</h1>
                <h1 className="text-white font-bold text-[30px]">O</h1>
                <h1 className="text-white font-bold text-[30px]">V</h1>
                <h1 className="text-white font-bold text-[30px]">I</h1>
                <h1 className="text-white font-bold text-[30px]">E</h1>
                <h1 className="text-white font-bold text-[30px]">S</h1>
            </div>
            <div className="picture w-[5%] md:w-[20%] flex justify-center items-center">
                <img className="w-14 rounded-full" src="https://imgurl.ir/uploads/w23876_mns-high-resolution-logo-white.png" alt="png" />
            </div>


            <div className="button hidden absolute top-40 ml-[100%] md:flex mr-[2%]">
                
                <h1 onClick={showmeno} className="text-2xl rounded-l-xl cursor-pointer bg-[#D1D1D1] transition-all text-black hover:bg-white py-5 px-1 md:flex md:justify-center md:items-center">«</h1>

 
                <div className="ani flex mr-[100%] flex-col gap-2 justify-center items-center py-2 rounded-l-xl">
                    <div className="ani border-black border-4 flex bg-[#D9D9D9] rounded-l-xl py-5 mr-[100%] flex-col justify-center items-center w-full gap-3">    
                        {info.map((item) => {
                            return(
                                <Link key={item.id} href={item.to} className="ani button mx-2 cursor-pointer gap-3 flex justify-center items-center w-[10rem] py-1 rounded-2xl bg-[#5D5D5D]">
                                    <div className="bg-[#D9D9D9] w-6 h-6 rounded-full"></div>
                                    <h1 className="text-[17px] text-[#D9D9D9] font-bold w-[60%]">{item.title}</h1>
                                </Link>
                            )
                        })}
                    </div>
                    {pic.map((item) => {
                        <div key={item.id} className="none flex justify-center items-center w-[95%] h-[7rem] rounded-xl bg-white">
                            <img className="w-[10rem]" src={item.src} alt="png" />
                        </div>
                    })}

                </div>

            </div>
        </div>
    )
}