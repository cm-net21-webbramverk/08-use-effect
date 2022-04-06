import { useState, useEffect } from 'react'

const Sunrise = () => {
	const [sunriseToday, setSunriseToday] = useState(null)
	const [isFetching, setIsFetching] = useState(false)
	
	const getData = async () => {
		setIsFetching(true)
		let position = {
			lat: 57.669950,
			lon: 12.008410
		}
		const url = `https://api.sunrise-sunset.org/json?lat=${position.lat}&lng=${position.lon}`
		console.log('About to send request: ', url)
		const response = await fetch(url)
		const data = await response.json()
	
		console.log('Response from API:', data)
		setSunriseToday(data.results.sunrise)
		setIsFetching(false)
	}

	useEffect(() => {
		getData()
	}, [])

	return (
		<section>
			<button disabled={isFetching} onClick={getData}> Get sunrise </button>
			{ sunriseToday !== null
				? <p>The sun rose today at {sunriseToday}.</p>
				: <p>Click button to get data.</p>
			}
		</section>
	)
}

export default Sunrise