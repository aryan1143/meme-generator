import logo from '../../assets/croppedLogo.png'
import Button from './Button'
import { FiUpload } from "react-icons/fi";

function NavBar({setImageSrc}) {
    return (
        <div className='sticky top-0 left-0 z-10'>
            <div className='flex items-center justify-between main-padding py-2 bg-sub-main border-b border-gray-400'>
                <img className='cursor-pointer' src={logo} alt="Logo" width={100} />
                <div className='flex items-center gap-4'>
                    <Button btnText={<><label className='cursor-pointer' htmlFor="imageSelector"><FiUpload className="inline mr-2 cursor-pointer" /> Upload Image</label><input type="file" id='imageSelector' accept='image/*' className='hidden' onChange={(e) => { setImageSrc(URL.createObjectURL(e.target.files[0])); }} /></>} isRoundedProp={true} colorProp={'bg-card'} sizeProp={'small'} isBoldProp={true} />
                    {/* <Button btnText="AI Meme" isRoundedProp={true} colorProp={'bg-highlighted-card'} sizeProp={'small'} isBoldProp={true} /> */}
                </div>
            </div>
        </div>
    )
}

export default NavBar