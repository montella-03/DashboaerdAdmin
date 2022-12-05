import React, { useEffect } from 'react';
import { AiOutlineMenu } from 'react-icons/ai';
import { FiShoppingCart } from 'react-icons/fi';
import { BsChatLeft } from 'react-icons/bs';
import {RiNotification3Line} from 'react-icons/ri';
import { MdKeyboardArrowDown } from 'react-icons/md';
import { TooltipComponent } from '@syncfusion/ej2-react-popups';
import avatar from '../data/avatar.jpg';
import { Cart, Chat, Notification, UserProfile } from './Index';
import { useStateContext} from '../contexts/ContextProvider';

const NavButton = ({ title, customFunc, icon, Color, dotColor }) => (
  <TooltipComponent context={title} position='BottomCenter'>
    <button type='button' onClick={customFunc}
      className='relative text-xl rounded-full p-4 hover:bg-light-gray'>
      <span style={{ background: dotColor }} className='absolute inline-flex rounded-full h-2 w-2 left--1 top-1'/>
        {icon}
      
    </button>

  </TooltipComponent>
)

function Navbar() {
  const { activeMenu, setActiveMenu, isClicked, setisClicked, handleClick, screenSize, setscreenSize } = useStateContext();
  useEffect(() => {
    const handleResize = () => setscreenSize(window.innerWidth);
    window.addEventListener('resize', handleResize);   
  
    return () => {
      window.removeEventListener('resize', handleResize);
      handleResize();
    }
  }, [])
  useEffect(() => {
    if (screenSize <= 900) {
      setActiveMenu(false);
    }
    else {
      setActiveMenu(true);
    }
  
  }, [screenSize])
  
  
  return (
    <div className='flex justify-between p-2 md:mx-6 relative'>
      <NavButton title='Menu' customFunc={() => setActiveMenu((prevActionMenu) => !prevActionMenu)}
        Color='blue' icon={<AiOutlineMenu />}  />
      
      <div className='flex'>
        <NavButton title='Cart' customFunc={() => handleClick('cart')}
          Color='blue' icon={<FiShoppingCart />} dotColor='black'/>
        <NavButton title='Chat' customFunc={() => handleClick('chat')}
          dotColor='green'
          Color='blue' icon={<BsChatLeft />} />
        <NavButton title='Notification' customFunc={() => handleClick('notification')}
        dotColor='red'
          Color='blue' icon={<RiNotification3Line />} />
        
        <TooltipComponent content='profile' position='BottomCenter'>
          <div className='flex items-center gap-2 p-1 hover:bg-gray-50 cursor-pointer' onClick={() => handleClick('userProfile')}>
            <img className='rounded-full w-8 h-8' src={avatar} />
            <p>
              <span className='text-gray-400 text-14'>Hi,</span>{' '}
              <span className='text-gray-400 text-14 font-bold ml-1'>Montella</span>
            </p>
            <MdKeyboardArrowDown className='text-14 text-gray-500'/>

          </div>

        </TooltipComponent>
        {isClicked.cart && <Cart />}
        {isClicked.chat && <Chat />}
        {isClicked.notification && <Notification />}
        {isClicked.userProfile &&<UserProfile/>}
       


      </div>

    </div>
  )
}

export default Navbar