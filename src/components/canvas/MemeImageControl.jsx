import { FiUpload } from "react-icons/fi";
import MemeTemplates from "./MemeTemplates";

const MemeImageControl = ({setImageSrc}) => {

    const handleImageChange = (event) => {

        setImageSrc(URL.createObjectURL(event.target.files[0]));
    }

    

    return (
        <div className='flex flex-col p-2 h-full w-[20%] items-center gap-5 py-5'>
            <label htmlFor="imageSelector" className="cursor-pointer">
                <div className='flex flex-col justify-center items-center h-fit w-fit p-5 bg-main rounded-xl border-dashed border-2 border-gray-400'>
                    <FiUpload className="mx-auto text-3xl text-gray-300" />
                    <p className='text-gray-300'>Click to upload image</p>
                    <p className='text-gray-500'>JPG, PNG up to 10MB</p>
                </div>
                <input type="file" id='imageSelector' accept='image/*' className='hidden' onChange={(e) => { handleImageChange(e) }} />
            </label>
            <MemeTemplates setImageSrc={setImageSrc}/>
        </div>
    )
}

export default MemeImageControl