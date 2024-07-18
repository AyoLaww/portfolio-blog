import { BlogComponent } from "@/components/BlogComponent";
import { HeaderComponent } from "@/components/HeaderComponent";


export const revalidate = 30

export default function Home() {
  return (
    <>
    <div className="flex flex-col w-full h-lvh items-center">
      <div className="flex flex-col w-1/2 pt-20">
        <section>
          <HeaderComponent />
        </section>
      
        <section>
          <BlogComponent />
        </section>
      </div>
      
    </div>
    </>
  )
}
