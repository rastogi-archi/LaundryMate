import Hero from "@/components/Hero"
import AboutMain from "./AboutMain"
import WhyChoose from "./WhyChoose"

const Home = () => {
  return (
    <div>
      <div className="mb-10 sm:mb-14">
        <Hero />
      </div>
      <div className="mb-10 sm:mb-12">
        <AboutMain />
      </div>
      <WhyChoose/>
    </div>
  )
}

export default Home
