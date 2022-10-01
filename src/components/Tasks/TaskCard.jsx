import { useContext } from 'react';
import { TaskContext } from '../Context/TaskContext';

function TaskCard({ task }) {
	const { deleteTask } = useContext(TaskContext);

	return (
		<div className='bg-gray-700 text-white p-4 rounded-md'>
			<h2 className='capitalize font-bold text-xl'>Title: {task.title}</h2>
			<p className='text-gray-400 text-sm mt-1'>Description: {task.description}</p>
			<button
				className='bg-red-400 px-2 py-1 rounded-md mt-4 mb-4 hover:bg-red-300'
				onClick={() => deleteTask(task.id)}>
				Delete
			</button>
			<hr></hr>
		</div>
	);
}

export default TaskCard;
