import React from "react"
import { Link } from "react-router-dom"
import brook from '../../assets/static/images/brook.svg'
import luffy from '../../assets/static/images/luffy.svg'
import zoro from '../../assets/static/images/zoro.svg'
import './style.css'


export const Home = () => {
	return (
		<div className="home-container">
			<div className="home-img-container">
				<Link to='/settings'>
					<img className="home-img" src={brook} alt='settings' />
				</Link>
				<Link to='/deckEditor'>
					<img className="home-img" src={luffy} alt='deck editor' />
				</Link>
				<Link to='/play'>
					<img className="home-img" src={zoro} alt='play' />
				</Link>
			</div>
			<div className='home-text-container'>
				<p>Settings</p>
				<p>Play</p>
				<p>Deck Editor</p>
			</div>

		</div>
	)
}
