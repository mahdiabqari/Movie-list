'use client'
import { useState } from "react";
import Header from "./../commponents/header";
import Meno from "./../commponents/meno";

export default function Action() {

    const [img , setImg] = useState([
        {src:'https://th.bing.com/th/id/OIP.9WoV4mK9r3ScxNXeCJVvOwAAAA?rs=1&pid=ImgDetMain' , id:1},
        {src:'https://picfiles.alphacoders.com/388/thumb-1920-388945.jpg' , id:2},
        {src:'https://th.bing.com/th/id/OIP.jMPfAlwuReNXyN22NGYbowHaLH?rs=1&pid=ImgDetMain' , id:3},
        {src:'https://th.bing.com/th/id/OIP.CLyIuHYXKKuAExs9S-itHQHaKe?w=1400&h=1980&rs=1&pid=ImgDetMain' , id:4},
        {src:'https://th.bing.com/th/id/R.46080cf5ef51a287bea192e99b9b413a?rik=XrmHCVieqww8Yg&pid=ImgRaw&r=0' , id:5},
        {src:'https://th.bing.com/th/id/OIP.uc93Ls9uN0HSSMjN2O-XywHaK-?rs=1&pid=ImgDetMain' , id:6},
        {src:'https://filmparsi.ir/wp-content/uploads/2022/01/8094.jpg' , id:7},
    ])
    const [input , setInput] = useState('')

    const Searchhandler = (e) => {
      e.preventDefault()
      if(input){
        if(/(G|g)ray( |-|  )(M|m)an/.test(input)){
          setImg([
            {src:'https://th.bing.com/th/id/OIP.9WoV4mK9r3ScxNXeCJVvOwAAAA?rs=1&pid=ImgDetMain' , id:1},
          ])
        }
        else if(/(S|s)tartton/.test(input)){
          setImg([{src:'https://picfiles.alphacoders.com/388/thumb-1920-388945.jpg' , id:2}])
        }
        else if(/(J|j)ohn( |-|  )(W|w)ick/.test(input)){
          setImg([
            {src:'https://th.bing.com/th/id/OIP.jMPfAlwuReNXyN22NGYbowHaLH?rs=1&pid=ImgDetMain' , id:3},
            {src:'https://th.bing.com/th/id/OIP.CLyIuHYXKKuAExs9S-itHQHaKe?w=1400&h=1980&rs=1&pid=ImgDetMain' , id:4},
          ])
        }
        else if(/(J|j)umanji/.test(input)){
          setImg([
            {src:'https://th.bing.com/th/id/R.46080cf5ef51a287bea192e99b9b413a?rik=XrmHCVieqww8Yg&pid=ImgRaw&r=0' , id:5},      
          ])
        }
        else if(/(S|s)hazam/.test(input)){
            setImg([
                {src:'https://th.bing.com/th/id/OIP.uc93Ls9uN0HSSMjN2O-XywHaK-?rs=1&pid=ImgDetMain' , id:6},      
            ])
        }
        else if(/(B|b)atman/.test(input)){
        setImg([
            {src:'https://filmparsi.ir/wp-content/uploads/2022/01/8094.jpg' , id:7},      
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