import React from 'react';
import Link from 'next/link';

const Navbar: React.FC = () => {
  return (
    <nav
      style={{
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
        padding: '1rem 2rem',
        background: '#222',
        color: '#fff',
      }}
    >
      <div style={{ fontWeight: 'bold', fontSize: '1.5rem' }}>
        <Link href="/" style={{ color: '#fff', textDecoration: 'none' }}>
          Vacaturebank
        </Link>
      </div>
      <div style={{ display: 'flex', gap: '1.5rem' }}>
        <Link href="/" style={{ color: '#fff', textDecoration: 'none' }}>
          Home
        </Link>
        <Link
          href="/vacatures"
          style={{ color: '#fff', textDecoration: 'none' }}
        >
          Vacatures
        </Link>
        <Link href="/about" style={{ color: '#fff', textDecoration: 'none' }}>
          About
        </Link>
        <Link href="/contact" style={{ color: '#fff', textDecoration: 'none' }}>
          Contact
        </Link>
      </div>
    </nav>
  );
};

export default Navbar;
