import React, { Component } from "react";
import { BrowserRouter, Route, Redirect, Routes } from "react-router-dom";
import DogList from "./DogList";
import DogDetails from "./DogDetails";

class Routess extends Component {
  render() {
    const getDog = props => {
      let name = props.match.params.name;
      let currentDog = this.props.dogs.find(
        dog => dog.name.toLowerCase() === name.toLowerCase()
      );
      return <DogDetails {...props} dog={currentDog} />;
    };
    return (
      <BrowserRouter>
      <Routes>
        <Route
          path='/dogs'
          render={() => <DogList dogs={this.props.dogs} />}
        />
        <Route path='/dogs/:name' render={getDog} />
        <Route path='/dogs' />
      </Routes>
      </BrowserRouter>
    );
  }
}
export default Routess;
