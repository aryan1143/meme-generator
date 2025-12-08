import { FiUpload } from "react-icons/fi";

const MemeImageControl = ({setImageSrc}) => {

    const handleImageChange = (event) => {

        setImageSrc(URL.createObjectURL(event.target.files[0]));
    }

    return (
        <div className='flex flex-col p-2 items-center justify-between py-5'>
            <label htmlFor="imageSelector" className="cursor-pointer">
                <div className='flex flex-col justify-center items-center h-fit w-fit p-5 bg-gray-200 text-gray-500 rounded-xl border-dashed border-2 border-gray-400'>
                    <FiUpload className="mx-auto text-3xl" />
                    <p className='text-gray-700'>Click to upload image</p>
                    <p className='text-gray-500'>JPG, PNG up to 10MB</p>
                </div>
                <input type="file" id='imageSelector' accept='image/*' className='hidden' onChange={(e) => { handleImageChange(e) }} />
            </label>
            <div className="h-7/10 w-full bg-gray-100 rounded-md border border-gray-300">
                
            </div>
        </div>
    )
}

export default MemeImageControl