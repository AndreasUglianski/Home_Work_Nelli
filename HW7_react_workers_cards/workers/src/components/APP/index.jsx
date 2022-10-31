import Worker from '../Worker';
import { workers } from '../../data/workers';

function App() {
	return (
		<div>
			{workers.map((el) => (
				<Worker {...el} key={el.id} />
			))}
		</div>
	);
}

export default App;
