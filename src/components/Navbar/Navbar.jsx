import React, { useState } from 'react';
import about from '../../assets/about.png';
import archive from '../../assets/archive.png';
import blogging from '../../assets/blogging.png';
import equalizer from '../../assets/equalizer.png';
import idButton from '../../assets/id-button.png';
import memo from '../../assets/memo.png';
import schedule from '../../assets/schedule.png';
import HamburgerIcon from './HamburgerIcon';
import LinkWithIcon from './LinkWithIcon';

const Navbar = () => {
	const [isOpen, setIsOpen] = useState(false);

	const toggleMenu = () => {
		setIsOpen(!isOpen);
	};

	return (
		<section className="navbar flex items-center justify-between py-4 px-6 md:px-10 w-full bg-gray-900 fixed top-0 left-0 z-50">
			<div className="flex items-center">
				{/* Logo */}
				<h1 className="text-2xl md:text-4xl font-sans text-earthYellow">
					Groove Radio
				</h1>
			</div>

			{/* Hamburger Icon for Mobile */}
			<div className="md:hidden">
				<HamburgerIcon isOpen={isOpen} toggleMenu={toggleMenu} />
			</div>

			{/* Menu Items */}
			<div
				className={`${
					isOpen ? 'block' : 'hidden'
				} md:flex flex-col md:flex-row items-center md:space-x-6 space-y-4 md:space-y-0 w-full md:w-auto absolute md:relative top-full left-0 md:top-auto md:left-auto bg-gray-900 md:bg-transparent md:px-0 px-6 py-4 md:py-0 z-50`}
			>
				<LinkWithIcon title="Home" link="/" emoji={equalizer} />
				<LinkWithIcon title="Schedule" link="/" emoji={schedule} />
				<LinkWithIcon title="Archives" link="/" emoji={archive} />
				<LinkWithIcon title="Blog" link="/" emoji={blogging} />
				<LinkWithIcon title="About" link="/" emoji={about} />
				<LinkWithIcon title="Log In" link="/" emoji={idButton} />
				<LinkWithIcon title="Sign Up" link="/" emoji={memo} />
			</div>
		</section>
	);
};

export default Navbar;
