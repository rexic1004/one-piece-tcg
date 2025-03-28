import React from 'react';
import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Home, Play, DeckEditor, Settings } from './pages'
import { NavbarLayout } from './components/NavbarLayout'

const App = () => {
	return (
		<div className="App">
			<Router>
				<Routes>
					<Route path='/' element={<Home />} />
					<Route element={<NavbarLayout />}>
						<Route path='/play' element={<Play />} />
						<Route path='/deckEditor' element={<DeckEditor />} />
						<Route path='/settings' element={<Settings />} />
					</Route>
				</Routes>
			</Router>
		</div>
	);
}

export default App;
