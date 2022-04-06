import { useState, useEffect } from 'react'
import './App.css'
import Effects from './components/Effects'
import Timer from './components/Timer'
import Sunrise from './components/Sunrise'

function App() {
	return (
		<div>
			<Effects />
			<Timer />
			<Sunrise />
		</div>
	)
}

export default App
