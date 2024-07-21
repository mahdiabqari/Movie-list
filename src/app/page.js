'use client'
import Header from "./commponents/header";
import Meno from "./commponents/meno";
import { useState } from "react";

export default function Home() {

    const [img , setImg] = useState([
      {src:'https://th.bing.com/th/id/OIP.AtBMGvu1LyNPj4npjGYH-AHaK-?rs=1&pid=ImgDetMain' , id:1 },
      {src:'https://s1vino.vidiviz.com/stream/KwLzl/processed/content-poster/3def8e1e-d551-430a-87ba-6ad4d15c6505/3def8e1e-d551-430a-87ba-6ad4d15c6505.jpg' , id:2 },
      {src:'https://th.bing.com/th/id/OIP.WrSozgImrHdHdMoIJYOQ5gAAAA?rs=1&pid=ImgDetMain' , id:3 },
      {src:'https://th.bing.com/th/id/R.f16dc6f627ae65879a2720282d024965?rik=IjrgckE2kwMgdQ&riu=http%3a%2f%2fvignette3.wikia.nocookie.net%2fdoblaje%2fimages%2f5%2f56%2fIron_Man_2_Poster.jpg%2frevision%2flatest%3fcb%3d20120712032006%26path-prefix%3des&ehk=7q1uqkfPVsP%2bvcc7yoZik88iXWCZmBuNmPiaMx36%2f1s%3d&risl=&pid=ImgRaw&r=0' , id:4},
      {src:'https://th.bing.com/th/id/OIP.ELX7psC3jSRS6Y9EOtBzmwHaK9?w=510&h=755&rs=1&pid=ImgDetMain' , id:5},
      {src:'https://th.bing.com/th/id/OIP.4ve159V9rTWonhFoVUHGkwHaK-?w=640&h=948&rs=1&pid=ImgDetMain' , id:6},
      {src:'https://melofilm.ir/storage/assets/movies/1161/images/rAGiXaUfPzY7CDEyNKUofk3Kw2e_400.jpeg' , id:7}
    ])
    const [input , setInput] = useState('')

    const Searchhandler = (e) => {
      e.preventDefault()
      if(input){
        if(/(A|a)vengers/.test(input)){
          setImg([
            {src:'https://th.bing.com/th/id/OIP.AtBMGvu1LyNPj4npjGYH-AHaK-?rs=1&pid=ImgDetMain' , id:1},
            {src:'https://th.bing.com/th/id/OIP.ELX7psC3jSRS6Y9EOtBzmwHaK9?w=510&h=755&rs=1&pid=ImgDetMain' , id:5},
          ])
        }
        else if(/(S|s)pider( |-|  )(M|m)an/.test(input)){
          setImg([{src:'https://s1vino.vidiviz.com/stream/KwLzl/processed/content-poster/3def8e1e-d551-430a-87ba-6ad4d15c6505/3def8e1e-d551-430a-87ba-6ad4d15c6505.jpg' , id:2}])
        }
        else if(/(C|c)aptain( |-|  )(A|a)merica/.test(input)){
          setImg([
            {src:'https://th.bing.com/th/id/OIP.WrSozgImrHdHdMoIJYOQ5gAAAA?rs=1&pid=ImgDetMain' , id:3},
            {src:'https://melofilm.ir/storage/assets/movies/1161/images/rAGiXaUfPzY7CDEyNKUofk3Kw2e_400.jpeg' , id:7}
          ])
        }
        else if(/(I|i)ron( |-|  )(M|m)an/.test(input)){
          setImg([
            {src:'https://th.bing.com/th/id/R.f16dc6f627ae65879a2720282d024965?rik=IjrgckE2kwMgdQ&riu=http%3a%2f%2fvignette3.wikia.nocookie.net%2fdoblaje%2fimages%2f5%2f56%2fIron_Man_2_Poster.jpg%2frevision%2flatest%3fcb%3d20120712032006%26path-prefix%3des&ehk=7q1uqkfPVsP%2bvcc7yoZik88iXWCZmBuNmPiaMx36%2f1s%3d&risl=&pid=ImgRaw&r=0' , id:4},
            {src:'https://th.bing.com/th/id/OIP.4ve159V9rTWonhFoVUHGkwHaK-?w=640&h=948&rs=1&pid=ImgDetMain' , id:6},          
          ])
        }
      }
      else{
        alert('Please write something...')
      }
    }


  return (
    <main className="flex flex-col justify-center items-center">
      <Header/>
      
      <div className="banner flex justify-center items-center w-[95%] mt-9 gap-10">

        <Meno/>

        <div className="movies h-[41rem] w-[70%] md:w-[95%] flex flex-col justify-center items-center bg-[#D5D5D5] rounded-xl">
          
          <div className="top py-14 md:py-10 border-b-4 border-b-black w-full flex justify-center items-center h-[6rem] gap-2">
            <i onClick={Searchhandler}><img className="w-12 cursor-pointer rounded-full md:border-[3px] md:border-black" src="https://imgurl.ir/uploads/c94116_search.png" alt="png" /></i>
            <input 
              className="h-12 w-[25rem] text-2xl bg-[#D1D1D1] px-3 border-b-2 border-l-2 border-black md:w-[20rem] md:rounded-xl md:border-2 md:text-xl" 
              type="text"
              placeholder="Movie name"
              onChange={(e) => setInput(e.target.value)}
            />
          </div>

          <div className="bottom flex justify-center items-center flex-wrap gap-10 w-[95%] mt-4 overflow-y-scroll">
            {img.map((item) => {
                return(
                    <div key={item.id} className="card w-[15rem] md:w-[16rem] overflow-hidden rounded-xl">
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
