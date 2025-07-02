'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faWebAwesome } from '@fortawesome/free-solid-svg-icons';

export default function Navbar() {
    const pathname = usePathname()

    const isActive = (path:string) => path === pathname
  return (
    <nav className="navbar navbar-expand-lg navbar-dark text-white shadow-sm">
      <div className="container">
        <Link href="/" className="navbar-brand text-white">
        <FontAwesomeIcon style={{width: "50px", height: "50px", color: "#6e5796" }} icon={faWebAwesome} size="2x" beat/></Link>
        <div className="collapse navbar-collapse">
          <ul className="navbar-nav ms-auto">
            <li className="nav-item">
              <Link href="/about" className="nav-link link"><b>About</b></Link>
            </li>
            <li className="nav-item">
              <Link href="/projects" className="nav-link link"><b>Projects</b></Link>
            </li>
            <li className="nav-item">
                <Link href="/resume" className="nav-link link"><b>Resume</b></Link>
            </li>
            <li className="nav-item">
                <Link href="/contact" className="nav-link link"><b>Contact</b></Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}
