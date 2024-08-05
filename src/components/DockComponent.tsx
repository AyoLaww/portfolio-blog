import { Folder, Github, House, Instagram, Twitter } from "lucide-react";
import { Dock, DockIcon } from "./magicui/dock";
import Link from "next/link";
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from "./ui/tooltip";

export function DockComponent(){
    return (
        <Dock direction="middle">

            <DockIcon>
            <TooltipProvider>
                    <Tooltip>
                        <TooltipTrigger>
                            <Link href="/">
                                <House size={25} strokeWidth={1.5} className="hover:cursor-pointer lg:hover:text-sky-500 ease-in-out lg:duration-200 md:hover:text-sky-500 md:duration-200" />
                            </Link>
                        </TooltipTrigger>
                        <TooltipContent>
                            <p>Home</p>
                        </TooltipContent>
                    </Tooltip>
                </TooltipProvider>
                
            </DockIcon>

            <DockIcon>
                <TooltipProvider>
                    <Tooltip>
                        <TooltipTrigger>
                            <Link href="#">
                                <Folder size={25} strokeWidth={1.5} className="hover:cursor-pointer opacity-50 lg:hover:text-sky-500 ease-in-out lg:duration-200 md:hover:text-sky-500 md:duration-200" />
                            </Link>
                        </TooltipTrigger>
                        <TooltipContent>
                            <p>Projects (Coming soon)</p>
                        </TooltipContent>
                    </Tooltip>
                </TooltipProvider>
                
            </DockIcon>

      </Dock>
    )
}