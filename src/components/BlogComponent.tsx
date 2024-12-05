import { blogLinks } from "@/app/lib/interface"
import { client } from "@/app/lib/sanity"

async function getData(){
  const query = `
  *[_type == 'post'] | order(_createdAt desc){
  title,
    "currentSlug": slug.current,
    publishedAt
}`

const data = await client.fetch(query)

return data
}

export async function BlogComponent(){
  const data: blogLinks[] = await getData()

    return(
        <>
        <div className="flex flex-col mt-10">
          <h1 className="text-xl font-bold opacity-50">Blog</h1>
          {data.map((post, idx) => (
            <ul key={idx} className="pt-5 font-bold flex flex-col gap-5 opacity-80">
              <a href={`/blog/${post.currentSlug}`}>
                <li><span className="lg:hover:underline md:hover:underline underline-offset-2 decoration-sky-400 decoration-2">{post.title}</span><span className="font-bold font-robotomono ml-10 opacity-50">{post.publishedAt}</span></li>
              </a>
              
            </ul>
          ))}
        </div>
        </>
    )
}

{/* <ul className="pt-5 font-medium flex flex-col gap-5 opacity-80">
            <li>Title of the blog 1 <span className="font-bold font-robotomono ml-10 opacity-50">Date of the blog</span></li>
            <li>Title of the blog 1 <span className="font-bold font-robotomono ml-10 opacity-50">Date of the blog</span></li>
            <li>Title of the blog 1 <span className="font-bold font-robotomono ml-10 opacity-50">Date of the blog</span></li>
</ul> */}