import React, { useEffect, useRef } from 'react'
import { FiUpload } from "react-icons/fi";
import Button from './Button';
import heroImg from '../../assets/hero-img.png'

const HeroSection = ({ canvasRef, imageSrc, setImageSrc }) => {

    function getStartedHandle() {
        const target = canvasRef.current;
        target.scrollIntoView({
            behavior: "smooth",
            block: "center"
        });
    }
const didMountRef = useRef(0)
    useEffect(() => {
        if (didMountRef.current < 1) {
            didMountRef.current += 1;
            return; // skip first run
        }
        getStartedHandle();
        console.log('mmmm', didMountRef)
    }, [imageSrc])


    return (
        <section className='flex max-md:flex-col max-md:gap-8 max-md:h-fit justify-between items-center h-[85vh] w-full max-md:pt-0 pt-10 pb-10'>
            <div className='flex flex-col w-4/10 max-md:w-full max-md:gap-2 gap-10 pt-5'>
                <h1 className='text-5xl max-md:text-4xl font-bold'>Make memes people actually want to share From idea to meme in seconds</h1>
                <p className='text-[#7e7e7e] pb-10'>Create and customize memes by uploading your own images, adding captions, adjusting styles, and getting smart text suggestions — all inside a simple, free web app.</p>
                <div className="flex gap-8">
                    <Button onClick={getStartedHandle} btnText={'Get Started'} isRoundedProp={true} colorProp={'bg-white text-[#002628]'} sizeProp={'large'} isBoldProp={true} />
                    <Button btnText={<><label className='cursor-pointer' htmlFor="imageSelector"><FiUpload className="inline mr-2" /> Upload Image</label><input type="file" id='imageSelector' accept='image/*' className='hidden' onChange={(e) => { setImageSrc(URL.createObjectURL(e.target.files[0])) }} /></>} isRoundedProp={true} colorProp={'bg-card'} sizeProp={'large'} isBoldProp={true} />
                </div>
            </div>
            <div className='flex justify-center w-6/10 max-md:w-full'>
                <img src={heroImg} className='h-120 rounded-2xl max-md:hidden' />
            </div>
        </section>
    )
}

export default HeroSection