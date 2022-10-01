import { useContext } from 'react';
import { TaskContext } from '../Context/TaskContext';
import TaskCard from './TaskCard';

function TasksList() {
	const { tasks } = useContext(TaskContext);

	if (tasks.length === 0)
		return <h1 className='text-white font-bold capitalize text-4xl text-center'> Tasks list is empty </h1>;
	return (
		<div className='grid grid-cols-4 gap-2'>
			{tasks.map((task) => (
				<TaskCard task={task} key={task.id} />
			))}
		</div>
	);
}

export default TasksList;
