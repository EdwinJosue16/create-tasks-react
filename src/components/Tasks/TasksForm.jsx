import { useState, useContext } from 'react';
import { TaskContext } from '../Context/TaskContext';

function TasksForm() {
	const [title, setTitle] = useState('');
	const [description, setDescription] = useState('');

	const { createTask } = useContext(TaskContext);

	const submitHandler = (e) => {
		e.preventDefault();
		createTask({ title, description });
		setTitle('');
		setDescription('');
	};

	return (
		<div className='container max-w-md mx-auto'>
			<h1 className='text-white font-bold capitalize text-2xl text-center'> Create your task</h1>
			<form onSubmit={submitHandler} className='bg-slate-500 mb-4 p-5 rounded-md'>
				<input
					className='bg-slate-300 p-3 w-full mb-2'
					placeholder='Type a task title'
					onChange={(e) => setTitle(e.target.value)}
					value={title}
				/>
				<br></br>
				<textarea
					className='bg-slate-300 p-3 w-full mb-2'
					placeholder='Type a task description'
					onChange={(e) => setDescription(e.target.value)}
					value={description}></textarea>
				<br></br>
				<button className='bg-green-600 rounded-md px-3 py-1 hover:bg-green-400 text-white font-mono'> Save </button>
			</form>
		</div>
	);
}

export default TasksForm;
