import { useState } from 'react';

const Form = () => {
	const [height, setHeight] = useState('');
	const [weight, setWeight] = useState('');

	return (
		<div className='container my-0 mx-auto'>
			<h1 className='text-3xl font-bold text-center my-4'>BMI Calculator</h1>
			<form
				className='flex justify-center items-center gap-8'
				onSubmit={(event) => {
					if (
						!height ||
						!weight ||
						isNaN(Number(weight)) ||
						isNaN(Number(height)) ||
						height < 0 ||
						weight < 0
					) {
						alert('please enter a valid input');
					} else {
						event.preventDefault();
						fetch(
							`https://fastapi-production-92af.up.railway.app/calculate-bmi?weight=${weight}&height=${height}`,
							{
								method: 'POST',
							}
						)
							.then((response) => response.json())
							.then((json) =>
								json.BMI === 0
									? alert('please enter a valid input')
									: alert(
											`Your BMI is ${json.BMI} and your are ${json.category}`
									  )
							);
					}
					setHeight('');
					setWeight('');
				}}>
				<input
					type='number'
					className='bg-gray-300 block my-4 rounded-sm p-1'
					placeholder='Weight (KG)'
					value={weight}
					onChange={({ target }) => setWeight(target.value)}
				/>
				<input
					type='number'
					className='bg-gray-300 block my-4 rounded-sm p-1'
					placeholder='Height (M)'
					value={height}
					onChange={({ target }) => setHeight(target.value)}
				/>
				<button
					className='text-white bg-blue-500 px-8 rounded-md shadow-sm h-8'
					type='submit'>
					Calculate
				</button>
			</form>
		</div>
	);
};

export default Form;
