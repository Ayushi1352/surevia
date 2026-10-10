import About from "@/components/About";
import Blogs from "@/components/Blogs";
import Cta from "@/components/Cta";
import Hero from "@/components/Hero";
import Highlights from "@/components/Highlights";
import Plans from "@/components/Plans";
import Process from "@/components/Process";
import Stats from "@/components/Stats";
import Testimonials from "@/components/Testimonials";
import data from "@/data";

export default function Home() {
  return (
    <>
      <Hero />
      <Highlights />
      <About />
      <Plans />
      <Process />
      <Stats />
      <Testimonials />
      <Cta />
      <Blogs limit={data.blogs.homeCount} />
    </>
  );
}
