import './Filter.scss';

const filterData = [
	{
		htm: 'minPrice',
		title: 'Min Price',
		type: 'number',
		id: 'minPrice',
		name: 'minPrice',
		placeholder: 'Any',
	},
	{
		htm: 'maxPrice',
		title: 'Max Price',
		type: 'number',
		id: 'maxPrice',
		name: 'maxPrice',
		placeholder: 'Any',
	},
	{
		htm: 'bedroom',
		title: 'Bedroom',
		type: 'number',
		id: 'bedroom',
		name: 'bedroom',
		placeholder: 'Any',
	},
];

function Filter() {
	return (
		<div className='filter'>
			<h2>
				Search results for <b>London</b>
			</h2>
			<div className='top'>
				<div className='item'>
					<label htmlFor='city'>Location</label>
					<input
						type='text'
						id='city'
						name='city'
						placeholder='City Location'
					/>
				</div>
			</div>
			<div className='bottom'>
				<div className='item'>
					<label htmlFor='type'>Type</label>
					<select name='type' id='type'>
						<option value=''>Any</option>
						<option value='buy'>Buy</option>
						<option value='rent'>Rent</option>
					</select>
				</div>
				<div className='item'>
					<label htmlFor='property'>Property</label>
					<select name='property' id='property'>
						<option value=''>Any</option>
						<option value='apartment'>Apartment</option>
						<option value='house'>House</option>
						<option value='condo'>Condo</option>
						<option value='land'>Land</option>
					</select>
				</div>
				{filterData.map((el) => (
					<>
						<div key={el.id} className='item'>
							<label htmlFor={el.htm}>{el.title}</label>
							<input
								type={el.type}
								id={el.id}
								name={el.name}
								placeholder={el.placeholder}
							/>
						</div>
					</>
				))}
				<button>
					<img src='/search.png' alt='Search img' />
				</button>
			</div>
		</div>
	);
}

export default Filter;
