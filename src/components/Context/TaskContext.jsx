import { createContext, useState, useEffect } from 'react';
import { tasks as defaultTasks } from '../../data/tasks';

export const TaskContext = createContext();

export function TaskContextProvider(props) {
	const [tasks, setTasks] = useState([]);
	const [identityId, setIdentityId] = useState(0);

	useEffect(() => {
		setTasks(defaultTasks);
		setIdentityId(defaultTasks.length);
	}, []);

	const createTask = (task = {}) => {
		const createdTask = {
			title: task.title,
			description: task.description,
			id: identityId,
		};
		setTasks([...tasks, createdTask]);
		setIdentityId(identityId + 1);
	};
	const deleteTask = (taskId) => {
		setTasks(tasks.filter((x) => x.id !== taskId));
	};

	return <TaskContext.Provider value={{ tasks, createTask, deleteTask }}>{props.children}</TaskContext.Provider>;
}
