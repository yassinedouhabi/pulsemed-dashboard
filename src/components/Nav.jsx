import { useContext, useEffect, useState } from 'react';
import { Link, NavLink, useNavigate, useLocation } from 'react-router-dom';
import { HiMenuAlt3 } from 'react-icons/hi';
import { AuthContext } from '../context/AuthContext';
import { Drawer } from 'vaul';

const Nav = () => {
  const { role, logout } = useContext(AuthContext);
  const navigate = useNavigate();
  const location = useLocation();

  const [isDrawerOpen, setIsDrawerOpen] = useState(false);

  const handleLogout = () => {
    logout();
    setIsDrawerOpen(false);
    navigate('/login');
  };

  const handleLinkClick = () => {
    setIsDrawerOpen(false);
  };

  useEffect(() => {
    setIsDrawerOpen(false);
  }, [location.pathname]);

  return (
    <Drawer.Root open={isDrawerOpen} onOpenChange={setIsDrawerOpen} direction='right'>
      <nav className={`flex items-center justify-between p-4 bg-white border border-slate-100 rounded-full`}>
        <Link to='/' className='text-xl font-bold text-blue-500' onClick={handleLinkClick}>
          Pulsemed
        </Link>
        <Drawer.Trigger className='relative flex h-10 flex-shrink-0 items-center justify-center gap-2 rounded-full px-4 text-sm font-medium cursor-pointer hover:bg-blue-50'>
          <HiMenuAlt3 size={26} />
        </Drawer.Trigger>
      </nav>
      <Drawer.Portal>
        <Drawer.Overlay className='fixed inset-0 bg-black/40' />
        <Drawer.Content className='right-2 top-2 bottom-2 fixed z-10 outline-none w-[310px] flex' style={{ '--initial-transform': 'calc(100% + 8px)' }}>
          <div className='bg-zinc-50 h-full w-full grow p-5 flex flex-col rounded-[16px]'>
            <div className='max-w-md mx-auto'>
              <Drawer.Title className='font-medium mb-2 text-zinc-900'>It supports all directions.</Drawer.Title>
              <Drawer.Description className='text-zinc-600 mb-2'>This one specifically is not touching the edge of the screen, but that&apos;s not required for a side drawer.</Drawer.Description>
              {!role ? (
                <NavLink to='/login' className='text-blue-600 font-medium hover:underline' onClick={handleLinkClick}>
                  Login
                </NavLink>
              ) : (
                <div className='flex flex-col gap-3'>
                  <span className='font-medium text-gray-700'>Role: {role}</span>
                  <button onClick={handleLogout} className='bg-red-600 text-white px-4 py-2 rounded hover:bg-red-700 transition'>
                    Logout
                  </button>
                </div>
              )}
            </div>
          </div>
        </Drawer.Content>
      </Drawer.Portal>
    </Drawer.Root>
  );
};

export default Nav;
