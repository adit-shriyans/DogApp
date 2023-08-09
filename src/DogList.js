import React, { Component } from "react";
import { Link } from "react-router-dom";
import PropTypes from "prop-types"; // Import PropTypes for prop validation
import hazel from "./hazel.jpg";
import tubby from "./tubby.jpg";
import whiskey from "./whiskey.jpg";
import "./DogList.css";

class DogList extends Component {
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
    // const { dogs } = this.props;

    // if (!dogs || dogs.length === 0) {
    //   // Handle case when 'dogs' prop is not provided or is empty
    //   return <div>No dogs to display.</div>;
    // }

    return (
      <div className='DogList'>
        <h1 className='display-1 text-center mt-3 mb-5'>Dog List!</h1>
        <div className='row'>
          {this.props.dogs.map(d => (
            <div className='Dog col-lg-4 text-center' key={d.name}>
              <img src={d.src} alt={d.name} />
              <h3 className='mt-3'>
                <Link className='underline' to={`/dogs/${d.name}`}>
                  {d.name}
                </Link>
              </h3>
            </div>
          ))}
        </div>
      </div>
    );
  }
}

// Prop validation using PropTypes
// DogList.propTypes = {
//   dogs: PropTypes.arrayOf(
//     PropTypes.shape({
//       name: PropTypes.string.isRequired,
//       src: PropTypes.string.isRequired
//     })
//   )
// };

// // Provide default props
// DogList.defaultProps = {
//   dogs: []
// };

export default DogList;
