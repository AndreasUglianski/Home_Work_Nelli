import WordsContainer from '../WordsContainer';
import { words } from '../../data/words';

function App() {
	return (
		<div>
			<WordsContainer words_arr={words} />
		</div>
	);
}

export default App;
