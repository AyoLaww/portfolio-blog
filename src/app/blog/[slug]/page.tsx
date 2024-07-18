import { blogPage } from "@/app/lib/interface"
import { client } from "@/app/lib/sanity"
import { PortableText } from "next-sanity"
import Link from "next/link"


export const revalidate = 30

async function getData(slug: string){
    const query = `
    *[_type == 'post' && slug.current == '${slug}']{
    "currentSlug": slug.current,
        title,
        content,
        publishedAt
    }[0]`

    const data = await client.fetch(query)
    return data
}

export default async function BlogPage({ params }: { params: {slug: string } }){
    const data: blogPage = await getData(params.slug)
    return(
        <>
        <div className="flex flex-col w-full h-lvh items-center">
            <div className="flex flex-col w-1/2 pt-20">
                <div className="flex flex-row gap-5 mb-5 ">
                    <p className="text-xl font-bold tracking-tighter opacity-50">blog</p>
                    <Link href='/' className="text-xl font-bold tracking-tighter underline decoration-sky-400">home</Link>
                </div>
                
                <h2 className="font-robotomono tracking-tighter text-lg font-bold opacity-60 mb-5">{data.publishedAt}</h2>
                <h1 className="text-4xl font-bold tracking-tight">{data.title}</h1>

                <hr className="border-black my-10 opacity-50"/>

                <div className="prose prose-blue prose-lg font-medium text-justify opacity-80 prose-a:text-sky-500 prose-a:underline prose-a:underline-offset-2">
                    <PortableText value={data.content}/>
                </div>

                <hr className="border-black my-10 opacity-50"/>

                <div className="flex flex-col">
                    <div className="flex flex-row gap-5">
                        <a href="https://github.com/AyoLaww" target="_blank" className="font-robotomono tracking-tighter font-bold text-sky-500 underline underline-offset-2">github</a>
                        <a href="https://x.com/AyoLaww" target="_blank" className="font-robotomono tracking-tighter font-bold text-sky-500 underline underline-offset-2">x.com</a>
                    </div>
                    <p className="font-robotomono tracking-tight font-bold opacity-50 mb-5 mt-2">© 2024 Law. all rights reserved</p>
                </div>
                
            </div>
        </div>
        </>
    )
}