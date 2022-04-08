import React from "react";
import { Link } from "react-router-dom";
import "../Styles/NavBar.css"

const NavBar = () => {
	return (
		<div className='nav-bar'>
			<ul className="list">
				<li>
					<Link className="link" to='/'>HOME</Link>
				</li>
				<li>
					<Link  className="link" to='/about-us'>ABOUT US</Link>
				</li>
				<li>
					{" "}
					<Link  className="link" to='/bank-services'>BANK SERVICES</Link>
				</li>
				<li>
					<Link className="link" to='/person-services'>PERSON SERVICES</Link>
				</li>
				<li>
					<Link className="link" to='/contact-us'>CONTACT US</Link>
				</li>
			</ul>
		</div>
	);
};

export default NavBar;
