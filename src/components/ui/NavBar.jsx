import logo from '../../assets/croppedLogo.png'
import Button from './Button'
import { FiUpload } from "react-icons/fi";

function NavBar() {
    return (
        <div className='flex items-center justify-between main-padding py-2 bg-sub-main border-b border-gray-400'>
            <img className='cursor-pointer' src={logo} alt="Logo" width={100} />
            <div className='flex items-center gap-4'>
                <Button btnText={<><FiUpload className="inline mr-2" /> Upload Image</>} isRoundedProp={true} colorProp={'bg-card'} sizeProp={'small'} isBoldProp={true} />
                <Button btnText="AI Meme" isRoundedProp={true} colorProp={'bg-highlighted-card'} sizeProp={'small'} isBoldProp={true} />
            </div>
            
        </div>
    )
}

export default NavBar