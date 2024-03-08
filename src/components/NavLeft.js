/* eslint-disable no-script-url */
/* eslint-disable jsx-a11y/anchor-is-valid */
import '../App.css';
import { useState } from 'react';
import { Outlet } from "react-router-dom";
import { useNavigate } from 'react-router-dom';
import logo from "../images/icons/itracside.svg";
import menuIcon from "../images/icons/menu.svg"
import iconExport from './iconExport';
import { Link } from 'react-router-dom';

function App() {
  const navigate = useNavigate();
  const [navigation, setNavigation] = useState([
    { name: 'Home', icon: iconExport.HomeIcon, href: '/app/home', current: true },
    { name: 'Analytics', icon: iconExport.AnalyticsIcon, href: '/app/analytics', current: false },
    { name: 'Bulk Stock Upload', icon: iconExport.BulkIcon, href: '/app/bulk', current: false },
    { name: 'Transit Stock', icon: iconExport.StockIcon, href: '/app/stock', current: false },
    { name: 'Master Data', icon: iconExport.MasterIcon, href: '/app/master', current: false },
    { name: 'Sales & Reports', icon: iconExport.SalesIcon, href: '/app/sales', current: false },
  ]);

  const [isOpen, setIsOpen] = useState(true);
  // eslint-disable-next-line no-unused-vars
  const [isOpens, setIsOpens] = useState(true);
  // eslint-disable-next-line no-unused-vars
  const [isLogoVisible, setIsLogoVisible] = useState(true);

  const ToggleBtn = () => {
    setIsOpen(prev => !prev); // Toggle sidebar
    setIsLogoVisible(prev => !prev);
    setIsOpens(prev => !prev);
  };

  const handleDashboard=()=>{
    navigate(``)
  }

  const handleNavItemClick = (name) => {
    window.scrollTo(0, 0);
    const updatedNavItems = navigation.map((item) => {
      if (item.name === name) {
        return { ...item, current: true };
      } else {
        return { ...item, current: false };
      }
    });

    // Update the state with the new navItems array
    setNavigation(updatedNavItems);
  };
  function classNames(...classes) {
    return classes.filter(Boolean).join(' ')
  }
  
  return (
    <div>
      <div className='parentDiv sidebarmbl dark:bg-[#051534]'>
        <div ToggleBtn={ToggleBtn} className={` bg-[#380179] pb-4 sidebar leftSide ${isOpen ? 'active' : ''}`}>
          <div className={` flex flex-shrink-0 items-center bg-[#380179] menuSide ${isOpen ? 'active' : ''}`}>
            <div className='logosec-content'>
              <a href={`javascript:void(0);`} onClick={handleDashboard}>
              <img className="logo-imgcontent block w-full" src={logo} alt="Zimzee-Logo"/></a>
            </div>
            <div className='menusec-content'>
              <img className="menuicon" src={menuIcon} onClick={ToggleBtn} alt="menu-icon" />
            </div> 
          </div>       
          <div className="flex flex-grow flex-col">
            <nav className="flex-1 space-y-1" aria-label="Sidebar">
              {navigation.map((item) => (
                <><>
                  <Link
                    key={item.name}
                    to={item?.href}
                    onClick={() => { handleNavItemClick(item.name); } }
                    className={classNames(
                      item.current ? 'relative font-semibold	bg-[#4B1985] text-white-900' : 'relative text-gray-600 hover:bg-[#4B1985] hover:text-gray-900 ',
                      'group flex w-full items-center px-2 py-2 text-sm font-medium'
                    )}
                  >
                    <p>
                      <img src={item.icon}
                        className={classNames(
                          item.current ? 'text-white-500 max-w-none ' : 'max-w-none text-gray-400 group-hover:text-gray-500',
                          'mr-3 flex-shrink-0 w-6 h-6 ml-1'
                        )}
                        aria-hidden="true" alt="image"/>
                    </p>
                    <span className={`relative menuNav`}>{item.name}</span>
                 </Link>
                </></>
              ))}
            </nav>
          </div>
        </div>
        <div>
          <main className={`rightSide bg-[#fff]  ${isOpen ? 'w-[100%] pl-[250px]' : '!w-[100%] pl-[100px]'}`}>
            <Outlet context={[isOpen]} />
          </main>
          
        </div>  
      </div>
    </div>
  ); 
}
  
export default App;
