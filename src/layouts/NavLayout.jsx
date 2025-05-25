import { Outlet } from 'react-router-dom';
import Nav from '../components/Nav'; // make sure the path is correct

function NavLayout() {
  return (
    <>
      <header className='sticky top-4 m-4'>
        <Nav />
      </header>
      <main className='p-4'>
        <Outlet />
      </main>
    </>
  );
}

export default NavLayout;
