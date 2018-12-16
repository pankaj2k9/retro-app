import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { Link } from 'react-router-dom';
import topBanner from '../../assets/topBanner.png';

export default class Home extends Component {
    static propTypes = {
        prop: PropTypes
    }

    render() {
        return (
            <div className="container-fluid  home-first-row">
                <div className="row">
                    <div className="col-sm-4 first-col">
                        <h1 className="bannerHeading">Remote Teams. <br></br>Shared Space.</h1>
                        <button type="button" className="btn btn-primary button-one">Join Retro</button>
                        <Link to="/create">
                            <button type="button" className="btn btn-primary button-two">Create Retro</button>
                        </Link>
                    </div>
                    <div className="col-sm-8">
                        <div className="image-holder">
                            <img src={topBanner} alt="Retro" width="100%" height="auto" />
                        </div>

                    </div>

                </div>
            </div>

        )
    }
}
