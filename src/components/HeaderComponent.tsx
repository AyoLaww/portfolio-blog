import { Instagram, Twitter, TwitterIcon } from "lucide-react";
import Image from "next/image";

export function HeaderComponent(){
    return(
        <>
        <div>
            <Image
              src='/assets/Avatar.png'
              alt="avatar"
              width={500}
              height={500}
              className="w-24"
              />

              <h1 className="text-2xl font-bold opacity-85 py-5">Im Law -- A web designer and developer</h1>
              <p className="opacity-80">I am currently a university student majoring in computer science. I have a burning passion for tech and entrepreneurship, I am currently working on a few exciting projects like <a href="https://x.com/thewebstars" className="text-blue-500 hover:underline" target="_blank">@webstars</a> and <a href="https://www.tiktok.com/@internetmoneysagas" className="text-blue-500 hover:underline" target="_blank">@internetmoneysagas</a>. I also dabble in freelance work so feel free contact me. </p>
          </div>
          

          <div className="flex flex-row pt-5 gap-5">
            <a href="https://x.com/AyoLaww" target="_blank">
              <Twitter size={25} strokeWidth={1}  className="hover:cursor-pointer opacity-50" />
            </a>

            <a href="https://www.instagram.com/ayolaww/" target="_blank">
              <Instagram size={25} strokeWidth={1} className="hover:cursor-pointer opacity-50" />
            </a>
            
          </div>
        </>
    )
}