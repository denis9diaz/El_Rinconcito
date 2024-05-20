import React from "react";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars } from "@fortawesome/free-solid-svg-icons";
import "../../styles/Navbar.css";

export const Navbar = () => {
	return (
		<nav className="navbar navbar-expand-lg bg-body-tertiary">
			<div className="container-fluid">
				<Link className="navbar-brand no-underline" to="/">LOGO</Link>
				<button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
					<FontAwesomeIcon icon={faBars} />
				</button>
				<div className="collapse navbar-collapse" id="navbarSupportedContent">
					<ul className="navbar-nav me-auto mb-2 mb-lg-0 mx-auto">
						<li className="nav-item">
							<Link className="nav-link active underline-hover" aria-current="page" to="/">Nuestra historia</Link>
						</li>
						<li className="nav-item">
							<Link className="nav-link active underline-hover" aria-current="page" to="/carta">Carta</Link>
						</li>
						<li className="nav-item">
							<Link className="nav-link active underline-hover" aria-current="page" to="/menus">Menús</Link>
						</li>
						<li className="nav-item">
							<Link className="nav-link active underline-hover" aria-current="page" to="/galeria">Galería</Link>
						</li>
						<li className="nav-item">
							<Link className="nav-link active underline-hover" aria-current="page" to="/info">Información</Link>
						</li>
					</ul>
					<button className="btn btn-outline-dark" type="submit">Reservas</button>
				</div>
			</div>
		</nav>
	);
};
