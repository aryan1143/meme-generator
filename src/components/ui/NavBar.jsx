import logo from '../../assets/croppedLogo.png'
import Button from './Button'

function NavBar() {
    return (
        <div className='flex items-center justify-between main-padding py-2 bg-gray-200 border-b border-gray-400'>
            <img className='cursor-pointer' src={logo} alt="Logo" width={100} />
            <div className='flex items-center gap-4'>
                <Button btnText="Upload Image" isRoundedProp={true} colorProp={'bg-orange-400 hover:bg-orange-500'} sizeProp={'small'} isBoldProp={true} />
                <Button btnText="AI Meme" isRoundedProp={true} colorProp={'bg-blue-400 hover:bg-blue-500'} sizeProp={'small'} isBoldProp={true} />
            </div>
            
        </div>
    )
}

export default NavBar