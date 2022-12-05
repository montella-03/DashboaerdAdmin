import React from 'react';
import { Link, NavLink } from 'react-router-dom';
import { SiShopware } from 'react-icons/si';
import { MdOutlineCancel } from 'react-icons/md';
import { TooltipComponent } from '@syncfusion/ej2-react-popups';

import { links } from '../data/dummy';
import { useStateContext } from '../contexts/ContextProvider';


function Sidebar() {
  const { activeMenu, setActiveMenu, screenSize } = useStateContext();
  const handleScreen = () => {
    if (activeMenu && screenSize <= 900) {
      setActiveMenu(false);
    }
  }
  const activeLink = 'flex items-center gap-5 pl-4 pt-3 pb 2.5 rounded-lg text-white text-md'
  const normalLink = 'flex items-center gap-5 pl-4 pt-3 pb 2.5 rounded-lg dark:text-gray-200 dark:hover:text-black m-2 text-md text-gray-500'
  return (
    <div className='ml-3 h-screen md:overflow-hidden overflow-auto md:hover:overflow-auto pb-10'>
      {
        activeMenu && (
          <>
            <div className='flex justify-between items-center'>
              <Link to='/' onclick={handleScreen} className='items-center gap-3 ml-3 mt-4 flex text-xl tracking-tight text-slate-900 font-extrabold'>
                <SiShopware/> <span>Shoppy</span>
              </Link>
              <TooltipComponent content='Close' position='BottomCenter'>
                <button type='button' onClick={()=>setActiveMenu((prevActiveMenu)=>!prevActiveMenu)}className='text-xl rounded-full p-3 hover:bg-gray-100 mt-4 block md:hidden'>
                  <MdOutlineCancel/>
                </button>
              </TooltipComponent>
            </div>
            <div className='mt-10'>
              {links.map(item => (
                <div key={item.title}>
                  <p className='m-3 mt-4 uppercase text-gray-600'>
                    {item.title}
                  </p>
                  {item.links.map((link) => (
                    <NavLink to={`/${link.name}`}
                      key={link.name}
                      onClick={handleScreen}
                      className={({isActive})=>
                        isActive ? activeLink : normalLink
                      }
                    >
                      {link.icon}
                      <span className='capitalize'>
                        {link.name}
                      </span>

                    </NavLink>
                  ))}
                  
                </div>
              ))}

            </div>
          </>
        )
      }


    </div>
  )
}

export default Sidebar