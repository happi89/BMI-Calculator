import { useReducer, useState } from 'react';

const Form = () => {
	const [height, setHeight] = useState('');
	const [weight, setWeight] = useState('');
	const [unit, setUnit] = useState(true);

	return (
		<div className='container my-0 mx-auto max-w-[200px]'>
			<h1 className='text-3xl font-bold text-center my-6'>BMI Calculator</h1>

			<form
				className='flex flex-col'
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
							`https://web-production-4953.up.railway.app/calculate-bmi?weight=${weight}&height=${height}&unit=${unit}`,
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
				<button
					type='button'
					onClick={() => setUnit(!unit)}
					className='text-white bg-blue-500 px-8 rounded-md shadow-sm h-8'>
					{unit ? 'US Units' : 'Metric Units'}
				</button>
				<input
					type='number'
					className='bg-gray-300 my-4 rounded-sm p-1'
					placeholder={unit ? 'Weight (KG)' : 'Weight (Pounds)'}
					value={weight}
					onChange={({ target }) => setWeight(target.value)}
				/>
				<input
					type='number'
					className='bg-gray-300 my-4 rounded-sm p-1'
					placeholder={unit ? 'Height (M)' : 'Height (Inches)'}
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
