import React, { useState } from 'react';

import { sample } from '../../utils';
import { WORDS } from '../../data';
import GuessInput from '../GuessInput';
import GuessLog from '../GuessLog';
import { NUM_OF_GUESSES_ALLOWED } from '../../constants';

// Pick a random word on every pageload.
const answer = sample(WORDS);

console.info({ answer });

function Game() {
	// running, won, lost
	const [gameStatus, setGameStatus] = useState('running');
	const [guesses, setGuesses] = useState([]);

	function handleSubmitGuess(guess) {
		const nextGuesses = [...guesses, guess];
		setGuesses(nextGuesses);

		if (guess.toUpperCase() === answer) {
			setGameStatus('won');
		} else if (nextGuesses.length >= NUM_OF_GUESSES_ALLOWED) {
			setGameStatus('lost');
		}
	}

	return (
		<>
			<div>
				<p>
					Debugging game status: <span>{gameStatus}</span>
				</p>
			</div>
			<div className='answerhint'>
				<p>
					Debugging game answer (hover to reveal): <span>{answer}</span>
				</p>
			</div>
			<div className='reload'>
				<button onClick={() => window.location.reload(true)}>New Game</button>
			</div>

			<GuessLog guesses={guesses} answer={answer} />
			<GuessInput
				gameStatus={gameStatus}
				handleSubmitGuess={handleSubmitGuess}
			/>
		</>
	);
}

export default Game;
