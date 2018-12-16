import React from 'react';
import { Link } from 'react-router-dom';
import { withRouter } from 'react-router-dom';
import footerLogo from '../../assets/footerLogo.png';

const Footer = () => {
    return (
        <div className="container-fluid footer">
            <div className="row align-items-center">
                <div className="col-sm-4">
                    <ul className="nav">
                        <li className="nav-item">
                            <Link className="nav-link" to="/">Contact US</Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link" to="/">Terms and Condition</Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link" to="/">Privacy Policy</Link>
                        </li>
                    </ul>
                </div>
                <div className="col-sm-4 justify-content-center">
                    <div className="media">
                        <img className="d-flex mr-3 img-thumbnail align-self-center footerLogo" src={footerLogo} alt="Footer Logo" />
                        <div className="media-body">
                            <h2 className="mt-0">
                                Built by Dom &amp; Tom
                            </h2>
                            <p className="d-none d-sm-block">
                                Agile teams running retros every sprint
                            </p>
                        </div>
                    </div>

                </div>
                <div className="col-sm-4 footer-last-col justify-content-end">
                    <h6> &copy; Dom &amp; Tom 2018 <Link className="nav-link" to="/" >Visit our Website</Link></h6>
                </div>
            </div>
        </div>
    )
}

export default withRouter(Footer);