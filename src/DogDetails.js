import React, { Component } from "react";
import { Link } from "react-router-dom";
import "./DogDetails.css";
import hazel from "./hazel.jpg";
import tubby from "./tubby.jpg";
import whiskey from "./whiskey.jpg";

class DogDetails extends Component {
  static defaultProps={
    dogs: [
      {
        name: "Whiskey",
        age: 5,
        src: whiskey,
        facts: [
          "Whiskey loves eating popcorn.",
          "Whiskey is a terrible guard dog.",
          "Whiskey wants to cuddle with you!"
        ]
      },
      {
        name: "Hazel",
        age: 3,
        src: hazel,
        facts: [
          "Hazel has soooo much energy!",
          "Hazel is highly intelligent.",
          "Hazel loves people more than dogs."
        ]
      },
      {
        name: "Tubby",
        age: 4,
        src: tubby,
        facts: [
          "Tubby is not the brightest dog",
          "Tubby does not like walks or exercise.",
          "Tubby loves eating food."
        ]
      }
    ]
  }
  render() {
    // let { dog } = this.props.dog[0];
    let currentDog = this.props.dogs.find(
          dog => dog.name.toLowerCase() === this.props.name.toLowerCase()
        );
        console.log(currentDog);
    return (
      <div className='DogDetails row justify-content-center mt-5'>
        <div className='col-11 col-lg-5'>
          <div className='DogDetails-card card'>
            <img className='card-img-top' src={currentDog.src} alt={currentDog.name} />
            <div className='card-body'>
              <h2 className='card-title'>{currentDog.name}</h2>
              <h4 className='card-subtitle text-muted'>{currentDog.age} years old</h4>
            </div>
            <ul className='list-group list-group-flush'>
              {currentDog.facts.map((fact, i) => (
                <li className='list-group-item' key={i}>
                  {fact}
                </li>
              ))}
            </ul>
            <div className='card-body'>
              <Link to='/' className='btn btn-info'>
                Go Back
              </Link>
            </div>
          </div>
        </div>
        <h1>Details</h1>
      </div>
    );
  }
}
export default DogDetails;
