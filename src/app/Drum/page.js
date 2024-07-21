'use client'
import { useState } from "react";
import Header from "./../commponents/header";
import Meno from "./../commponents/meno";

export default function Drum() {

    const [img , setImg] = useState([
        {src:'https://th.bing.com/th/id/R.ad235c262ce8fcd6d073447f9e3a088f?rik=waSQfJ7rLnqJBg&riu=http%3a%2f%2fwww.legaldl.ir%2fwp-content%2fuploads%2f2020%2f10%2fFirends-Series.jpg&ehk=WcwV0igvXp4S0VRDDAB2xsc%2fUnN14%2bAdd0mPyATxmds%3d&risl=&pid=ImgRaw&r=0' , name:'friends'},
    ])

  return (
    <main className="flex flex-col justify-center items-center">
      <Header/>
      
      <div className="banner flex justify-center items-center w-[95%] mt-9 gap-10">

        <Meno/>

        <div className="movies h-[41rem] w-[70%] md:w-[95%] flex flex-col justify-center items-center bg-[#D5D5D5] rounded-xl">
          <div className="top py-14 md:py-10 border-b-4 border-b-black w-full flex justify-center items-center h-[6rem] gap-2">
            <i><img className="w-12 cursor-pointer rounded-full md:border-[3px] md:border-black" src="https://imgurl.ir/uploads/c94116_search.png" alt="png" /></i>
            <input 
              className="h-12 w-[25rem]  text-2xl bg-[#D1D1D1] px-3 border-b-2 border-l-2 border-black md:w-[20rem] md:rounded-xl md:border-2 md:text-xl" 
              type="text"
              placeholder="Movie name"
            />
          </div>
          <div className="bottom flex justify-center items-center flex-wrap gap-10 w-[95%] mt-4 overflow-y-scroll">
            
            {img.map((item) => {
                return(
                    <div key={item.name} className="card w-[15rem] md:w-[16rem] overflow-hidden rounded-xl">
                        <img className="movie cursor-pointer w-full rounded-xl" src={item.src} alt="png" />
                    </div>
                )
            })}


          </div>
        </div>

      </div>
    </main>
  );
}