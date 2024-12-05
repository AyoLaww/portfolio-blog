import { Github, Instagram, Twitter, TwitterIcon } from "lucide-react";
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
              className="w-20 md:w-20 lg:w-24"
              />

              <h1 className="text-lg  lg:text-3xl font-bold opacity-85 py-5">Im Law -- A web designer and developer</h1>
              <p className="opacity-80">I am currently a university student majoring in computer science. I have a burning passion for tech and entrepreneurship, I am currently working on a few exciting projects like <a href="https://x.com/NearStudios" className="text-sky-500 hover:underline" target="_blank">@NearStudios</a>, a web design and development studio, and learning cybersecurity on the side.</p>
          </div>
          

          <div className="flex flex-row pt-5 gap-5">
            <a href="https://x.com/AyoLaww" target="_blank">
              <Twitter size={25} strokeWidth={1.5}  className="hover:cursor-pointer opacity-50 lg:hover:text-sky-500 ease-in-out lg:duration-200 md:hover:text-sky-500 md:duration-200" />
            </a>

            <a href="https://www.instagram.com/ayolaww/" target="_blank">
              <Instagram size={25} strokeWidth={1.5} className="hover:cursor-pointer opacity-50 lg:hover:text-sky-500 ease-in-out lg:duration-200 md:hover:text-sky-500 md:duration-200" />
            </a>

            <a href="https://github.com/AyoLaww" target="_blank">
              <Github size={25} strokeWidth={1.5} className="hover:cursor-pointer opacity-50 lg:hover:text-sky-500 ease-in-out lg:duration-200 md:hover:text-sky-500 md:duration-200" />
            </a>
            
          </div>
        </>
    )
}