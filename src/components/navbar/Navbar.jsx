import { useState } from 'react';
import './navbar.scss';

function Navbar() {
	const [open, setOpen] = useState(false);
	return (
		<nav>
			<div className='left'>
				<a href='/' className='logo'>
					<img src='/logo.png' alt='Logo' />
					<span>LamaEstate</span>
				</a>
				<a href='/'>Home</a>
				<a href='/about'>About</a>
				<a href='/contact'>Contact</a>
				<a href='/agents'>Agents</a>
			</div>
			<div className='right'>
				<a href='/signIn'>Sign in</a>
				<a href='/signUp' className='register'>
					Sign up
				</a>
				<div className='menuIcon'>
					<img
						src='/menu.png'
						alt=''
						onClick={() => setOpen((prev) => !prev)}
					/>
				</div>
				<div className={open ? 'menu active' : 'menu'}>
					<a href='/'>Home</a>
					<a href='/about'>About</a>
					<a href='/contact'>Contact</a>
					<a href='/agents'>Agents</a>
					<a href='/signIn'>Sign in</a>
					<a href='/signUp'>Sign up</a>
				</div>
			</div>
		</nav>
	);
}

export default Navbar;
