import './App.css'
import { useEffect } from 'react'

const API_URL = 'http://www.omdbapi.com/?apikey=74778896'

function App() {
	const searchMovies = async (title) => {
		const res = await fetch(`${API_URL}&s=${title}`)
		const data = await res.json()

		console.log(data.Search)
	}

	useEffect(() => {
		searchMovies('Thor')
	}, [])

	return (
		<div className='App'>
			<h1>Hello React</h1>
		</div>
	)
}

export default App

// async function getMemes() {
//   const res = await fetch('https://api.imgflip.com/get_memes')
//   const data = await res.json()
//   setAllMemes(data.data.memes)
// }
// getMemes()
