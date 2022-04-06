import { useState, useEffect } from 'react'

const Timer = () => {
	const [time, setTime] = useState(0)
	const [isPaused, setIsPaused] = useState(false)
	const [intervalId, setIntervalId] = useState(null)

	const start = () => {
		setIsPaused(false)
		const DELAY = 100
		let id = setInterval( () => {
			console.log('Interval, time is ', time)
			setTime(t => t + DELAY)

			// Funkar inte! "time" ingår i funktionens CLOSURE och har alltid värdet 0
			// setTime(time + DELAY)
		}, DELAY )
		setIntervalId(id)
	}

	const stop = () => {
		setIsPaused(true)
		clearInterval(intervalId)
	}

	useEffect(() => {
		start()
	}, [])

	return (
		<section>
			<h3> Timer </h3>
			<p> The time is {time / 1000}! </p>
			<div>
				<button disabled={!isPaused} onClick={start}> Start timer </button>
				<button disabled={isPaused} onClick={stop}> Stop timer </button>
			</div>
		</section>
	)
}

export default Timer
