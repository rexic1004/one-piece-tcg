import { Link, Outlet } from "react-router-dom";

export const NavbarLayout = () => {
	return (
		<div>
			<nav>
				<Link to='/'>Home</Link>
				<Link to='/play'>Play</Link>
				<Link to='/deckEditor'>Deck Editor</Link>
				<Link to='/settings'>Settings</Link>
			</nav>
			<div>
				<Outlet />
			</div>
		</div>
	)
}