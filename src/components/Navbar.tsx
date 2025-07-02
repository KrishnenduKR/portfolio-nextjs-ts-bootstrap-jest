'use client';

import Link from 'next/link';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faWebAwesome } from '@fortawesome/free-solid-svg-icons';

export default function Navbar() {
    return (
        <nav className="navbar navbar-expand-lg navbar-dark text-white shadow-sm">
            <div className="container">
                <Link href="/" className="navbar-brand text-white">
                    <FontAwesomeIcon style={{ width: "50px", height: "50px", color: "#6e5796" }} icon={faWebAwesome} size="2x" beat />
                </Link>
                <button
                    className="navbar-toggler"
                    type="button"
                    data-bs-toggle="collapse"
                    data-bs-target="#navbarNav"
                >
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarNav">
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
