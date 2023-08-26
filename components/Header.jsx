import React, { useState } from 'react';
import Link from 'next/link';
import { useRouter } from 'next/router';

const Header = () => {
  const [transition, setTransition] = useState('0px');
  const [collapsed, setCollapsed] = useState('collapsed');

  const handleClick = () => {
    transition === '0px' ? setTransition('284px') : setTransition('0px');
    collapsed == 'collapsed' ? setCollapsed('') : setCollapsed('collapsed');
  };

  const router = useRouter();

  const menu = [
    { title: 'home', path: '/' },
    { title: 'our beliefs', path: '/our-beliefs' },
    { title: 'videos', path: '/videos' },
    { title: 'events', path: '/events' },
    { title: 'prayer requests', path: '/prayer-request' },
    { title: 'contact', path: '/contact' },
    { title: 'new here?', path: '/new-here' },
  ];

  const menuMap = menu.map(item => {
    return (
      <li key={item.title}>
        <h5>
          <Link
            className={`nav-link mobile-nav-links pb-0 ${
              router.pathname === item.path ? 'text-info' : 'text-dark'
            }`}
            href={item.path}
            onClick={handleClick}
          >
            {item.title}
          </Link>
        </h5>
      </li>
    );
  });

  return (
    <nav className='navbar fixed-top navbar-light'>
      <div className='container'>
        <div className='d-none d-sm-block px-1 mx-auto'>
          <h2>HONESDALE COMMUNITY CHURCH</h2>
        </div>

        <div className='d-none d-sm-flex mx-auto'>
          <ul className='nav d-flex justify-content-evenly'>{menuMap}</ul>
        </div>

        {/* Mobile Menu */}
        <div className='d-block d-sm-none mx-auto'>
          <h2>
            HONESDALE <br /> COMMUNITY CHURCH
          </h2>
        </div>

        <div className='hamburger z-3 position-absolute top-0 end-0 d-sm-none'>
          <button
            className={`navbar-toggler ${collapsed} ms-2`}
            type='button'
            onClick={handleClick}
            aria-label='Collapsible Menu Button'
          >
            <span></span>
            <span></span>
            <span></span>
          </button>
        </div>

        <div
          className='d-block d-sm-none expand collapse navbar-collapse'
          style={{ height: transition }}
        >
          <ul className='navbar-nav'>{menuMap}</ul>
        </div>
      </div>
    </nav>
  );
};

export default Header;
