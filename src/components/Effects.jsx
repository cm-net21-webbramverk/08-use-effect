import { useState, useEffect } from 'react'

const Effects = () => {
	const [x, setX] = useState(10)
	const [y, setY] = useState(20)

	// Körs varje gång något i komponenten ändrats
	useEffect(() => {
		console.log('effekt x')
		document.title = `x === ${x}`
	})
	// Körs bara när y ändras
	useEffect(() => {
		console.log('effekt y')
		document.title = `y === ${y}`
	}, [y])

	useEffect(() => {
		console.log('Bara när komponenten blir MOUNTED')
	}, [])

	return (
		<div>
			<button onClick={() => setX(x + 1)}> Ändra x </button>
			<button onClick={() => setY(y + 1)}> Ändra y </button>
		</div>
	)
}

export default Effects
