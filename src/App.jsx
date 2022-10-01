import TasksList from './components/Tasks/TasksList';
import TasksForm from './components/Tasks/TasksForm';
import { TaskContextProvider } from './components/Context/TaskContext';

function App() {
	return (
		<main className='h-screen bg-gray-800'>
			<div className='mx-auto container p-10'>
				<TaskContextProvider>
					<TasksForm></TasksForm>
					<TasksList data={[]}></TasksList>
				</TaskContextProvider>
			</div>
		</main>
	);
}

export default App;
