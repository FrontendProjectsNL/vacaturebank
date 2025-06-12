import Link from 'next/link';
import React from 'react';

const Navbar: React.FC = () => (
  <nav
    style={{
      display: 'flex',
      justifyContent: 'space-between',
      alignItems: 'center',
      padding: '1rem 2rem',
      background: '#222',
      color: '#fff',
    }}
  >
    <div style={{ fontWeight: 'bold', fontSize: '1.2rem' }}>Logo</div>
    <ul
      style={{
        display: 'flex',
        gap: '1rem',
        listStyle: 'none',
        margin: 0,
        padding: 0,
      }}
    >
      <li>
        <Link href="/" style={{ color: '#fff', textDecoration: 'none' }}>
          Home
        </Link>
      </li>
      <li>
        <Link href="/about" style={{ color: '#fff', textDecoration: 'none' }}>
          About
        </Link>
      </li>
      <li>
        <Link href="/contact" style={{ color: '#fff', textDecoration: 'none' }}>
          Contact
        </Link>
      </li>
    </ul>
  </nav>
);

export default Navbar;
