import { useState } from 'react';
import './navbar.scss';
import { Link } from 'react-router-dom';

function Navbar() {
	const [open, setOpen] = useState(false);

	const user = true;
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
				{user ? (
					<div className='user'>
						<img
							src='https://imgs.search.brave.com/Gt2C5lfw9yXnR39dKmt2d769kUne8XhtjOgrwlnLfpw/rs:fit:860:0:0/g:ce/aHR0cHM6Ly9tZWRp/YS5pc3RvY2twaG90/by5jb20vaWQvMTQy/MzM2OTg5Ny9waG90/by9jYWxsLWNlbnRl/ci13b3JrZXIuanBn/P2I9MSZzPTE3MDY2/N2Emdz0wJms9MjAm/Yz1TS2VvSUJvaDlT/RzE1aUZ6OTR0RW9P/T1BnOE9BMGlpdm10/R2owSFlfSkwwPQ'
							alt=''
						/>
						<span>Karen</span>
						<Link to={'/profile'} className='profile'>
							<div className='notifications'>3</div>
							<span>Profile</span>
						</Link>
					</div>
				) : (
					<>
						<a href='/signIn'>Sign in</a>
						<a href='/signUp' className='register'>
							Sign up
						</a>
					</>
				)}
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
