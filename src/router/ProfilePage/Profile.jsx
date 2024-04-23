import Chat from '../../components/chat/Chat';
import List from '../../components/list/List';
import './profile.scss';

function Profile() {
	return (
		<div className='profilePage'>
			<div className='details'>
				<div className='wrapper'>
					<div className='title'>
						<h1>User Information</h1>
						<button>Update Profile</button>
					</div>
					<div className='info'>
						<span>
							Avatar:{' '}
							<img
								src='https://imgs.search.brave.com/Gt2C5lfw9yXnR39dKmt2d769kUne8XhtjOgrwlnLfpw/rs:fit:860:0:0/g:ce/aHR0cHM6Ly9tZWRp/YS5pc3RvY2twaG90/by5jb20vaWQvMTQy/MzM2OTg5Ny9waG90/by9jYWxsLWNlbnRl/ci13b3JrZXIuanBn/P2I9MSZzPTE3MDY2/N2Emdz0wJms9MjAm/Yz1TS2VvSUJvaDlT/RzE1aUZ6OTR0RW9P/T1BnOE9BMGlpdm10/R2owSFlfSkwwPQ'
								alt=''
							/>
						</span>
						<span>
							Username: <b>Karen Pointing</b>
						</span>
						<span>
							Email: <b>karenpointing8362@email.com</b>
						</span>
					</div>
					<div className='title'>
						<h1>My List</h1>
						<button>Create New Post</button>
					</div>
					<List />
					<div className='title'>
						<h1>Saved List</h1>
					</div>
					<List />
				</div>
			</div>
			<div className='chatContainer'>
				<div className='wrapper'>
					<Chat />
				</div>
			</div>
		</div>
	);
}

export default Profile;
