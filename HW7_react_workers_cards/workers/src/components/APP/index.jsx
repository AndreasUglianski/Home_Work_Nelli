import Worker from '../Worker';
import { workers } from '../../data/workers';

function App() {
	//const active_workers = workers.filter((el) => el.in_office);

	return (
		<div>
			{workers
				// .filter((el) => el.in_office)
				.map((el) => (
					<Worker {...el} key={el.id} />
				))}
		</div>
	);
}

export default App;
