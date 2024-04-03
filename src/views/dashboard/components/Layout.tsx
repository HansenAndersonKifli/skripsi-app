import { Outlet } from 'react-router-dom';
import Header from './Header';
import './Layout.css'

const Layout = () => {
  return (
    <div className='content-container'>
      <Header />
        <div className="content">
            {/* buat render route */}
            <Outlet />
            
        </div>
    </div>
  );
};

export default Layout;