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

              <h1 className="text-lg  lg:text-3xl font-bold opacity-85 py-5">Hi, Im Law.</h1>
              <p className="opacity-80">A computer science major at USIU-A. Apart from slaving away at school work involuntarily in school I am also slaving away at school work voluntarily at home where I teach myself cybersecurity🥲. I also run <a href="https://nearstudios.framer.website" className="text-sky-500 hover:underline" target="_blank">Near studios</a>, a web design and development agency that helps SMEs and individuals build their online presence, oh and I also love cars...a lot.</p>
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