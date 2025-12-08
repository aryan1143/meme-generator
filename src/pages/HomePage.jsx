import CanvasMain from "../components/canvas/CanvasMain"

function HomePage() {
  return (
    <div className='flex flex-col justify-center w-full h-full items-center mt-5 gap-1'>
      {/* <h1 className='text-2xl mx-auto mt-5'>Meme Generator</h1>
      <p>Create memes with your own images or fully AI.</p> */}
      <CanvasMain />
    </div>
  )
}

export default HomePage