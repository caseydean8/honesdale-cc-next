import React from 'react';
import Link from 'next/link';
import { FaFacebookSquare, FaYoutube } from 'react-icons/fa';
import { IoMailOutline } from 'react-icons/io5';

const Footer = () => {
  return (
    <div className='footer'>
      <footer className='pt-4'>
        <div className='container-fluid px-4'>
          <div className='row text-center'>
            <ul className='social-icons'>
              <li>
                <Link
                  href='https://www.facebook.com/HonesdaleCommunityChurch'
                  aria-label='facebook page'
                >
                  <FaFacebookSquare />
                </Link>
              </li>
              <li>
                <Link
                  href='https://www.youtube.com/channel/UC2KX862afQKX4qc6ryGKQVA'
                  aria-label='YouTube channel'
                >
                  <FaYoutube style={{ color: '#FF0000' }} />
                </Link>
              </li>
              <li>
                <Link href='mailto:honesdalecc@gmail.com' aria-label='send email'>
                  <IoMailOutline />
                </Link>
              </li>
            </ul>
          </div>
          <div className='row pb-5'>
            <div className='col-md-5 text-center'>
              <div className='site-logo'>
                <h3>honesdale community church</h3>
              </div>
            </div>
            <div className='col-md-7 text-center text-md-end pb-5'>
              <ul className='nav-links nav-right'>
                <li>
                  <Link href='/' className='footer-links'>
                    home
                  </Link>
                </li>
                <li>
                  <Link href='/our-beliefs' className='footer-links'>
                    our beliefs
                  </Link>
                </li>
                <li>
                  <Link href='/videos' className='footer-links'>
                    videos
                  </Link>
                </li>
                <li>
                  <Link href='/events' className='footer-links'>
                    events
                  </Link>
                </li>
                <li>
                  <Link href='/prayer-request' className='footer-links'>
                    prayer requests
                  </Link>
                </li>
                <li>
                  <Link href='contact' className='footer-links'>
                    contact
                  </Link>
                </li>
              </ul>
            </div>
            <div className='copyright text-center'>
              <p>
                <small>Copyright 2023. All Rights Reserved.</small>
              </p>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Footer;
