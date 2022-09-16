import { useState } from 'react';

const Form = () => {
	const [height, setHeight] = useState('');
	const [weight, setWeight] = useState('');

	const onSubmit = (event) => {
		event.preventDefault();
		alert(Math.round(weight / height ** 2));
	};

	return (
		<div className='container my-0 mx-auto'>
			<h1 className='text-3xl font-bold text-center my-4'>BMI Calculator</h1>
			<form
				className='flex justify-center items-center gap-8'
				onSubmit={onSubmit}>
				<input
					type='number'
					className='bg-gray-300 block my-4 rounded-sm p-1'
					placeholder='Weight'
					value={weight}
					onChange={({ target }) => setWeight(target.value)}
				/>
				<input
					type='number'
					className='bg-gray-300 block my-4 rounded-sm p-1'
					placeholder='Height'
					value={height}
					onChange={({ target }) => setHeight(target.value)}
				/>
				<button
					className='bg-blue-500 px-8 rounded-md shadow-sm h-8'
					type='submit'>
					Calculate
				</button>
			</form>
		</div>
	);
};

export default Form;
