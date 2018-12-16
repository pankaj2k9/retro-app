import React from 'react';
import { Link } from 'react-router-dom';
import { withRouter } from 'react-router-dom';
import logo from '../../assets/logo.png';

const Header = () => {
    return (
        <div>
            <nav className="navbar navbar-expand-lg navbar-light bg-light">
                <Link className="navbar-brand" to="/"><img src={logo} alt="Retro" width="200" height="auto" /></Link>
                <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon" />
                </button>
                <div className="collapse navbar-collapse justify-content-end" id="navbarSupportedContent">
                    <ul className="nav navbar-nav navbar-right">
                        <li className="nav-item active">
                            <Link className="nav-link" to="/create">Join / Create </Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link" to="/">Features</Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link" to="/">Get the Beta</Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link" to="/">Price and Planing</Link>
                        </li>
                    </ul>
                    <button type="button" className="btn btn-dark">Log In/ Sign Up</button>
                </div>
            </nav>

        </div>
    )
}

export default withRouter(Header);

