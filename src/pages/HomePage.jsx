import CanvasMain from "../components/canvas/CanvasMain"
import HeroSection from "../components/ui/HeroSection"

function HomePage() {
  return (
    <div className='flex flex-col justify-center w-full h-full items-center mt-5 gap-1 py-5 t'>
      <HeroSection />
      <CanvasMain />
    </div>
  )
}

export default HomePage