import { BlogComponent } from "@/components/BlogComponent";
import { DockComponent } from "@/components/DockComponent";
import { HeaderComponent } from "@/components/HeaderComponent";


export const revalidate = 30

export default function Home() {
  return (
    <>
    <div className="flex flex-col w-full h-lvh items-center">
      <div className="flex flex-col md:w-1/2 lg:w-1/2 md:pt-20 lg:pt-20 pt-20 px-10">
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
