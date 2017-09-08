import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import Position from './Position';
import Routes from '../components/Routes';

class Home extends Component {
  render() {
    return (
      <div className="Home">
          <h2>Volunteer for 2018 elections</h2>
        <div>
          <p className="Home-intro">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ea sint earum fugit accusantium tempore voluptatum cum neque quae, nemo quos sapiente voluptatem nulla id. Sit praesentium, nemo sint eligendi saepe!
          </p>
        </div>
        <Link to="/position">START VOLUNTEERING</Link>
      </div>
    );
  }
}

export default Home;
