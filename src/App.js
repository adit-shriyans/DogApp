import DogList from "./DogList";
import DogBreed from "./DogBreed";
import DogDetails from "./DogDetails";
import hazel from "./hazel.jpg";
import tubby from "./tubby.jpg";
import whiskey from "./whiskey.jpg";
import { Route, Routes, useParams } from "react-router-dom";
import './App.css';
import { Component } from "react";
import Navbar from "./Navbar";

class App extends Component {
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
  render(){
    // const getDog = props => {
    //   console.log("OK");
    //   console.log("Props:");
    //   console.log(props);
    //   console.log("Value:");
    //   console.log(props.value);
    //   console.log("matches:");
    //   console.log(props.value.matches);
    //   console.log("params:");
    //   console.log(props.value.matches.params);
    //   console.log("Name:");
    //   console.log(props.value.matches.params.name);
    //   const name = props.value.matches.params.name;
    //   let currentDog = this.props.dogs.find(
    //     dog => dog.name.toLowerCase() === name.toLowerCase()
    //   );
    //   return <DogBreed {...this.props} dog={currentDog}/>
    // }
  return (
    <div className="App">
      {/* <nav>Dog shelter</nav> */}
      <Navbar {...this.props} />
      <Routes>
              <Route exact path="/" Component={DogList } />
              <Route exact path="/dogs/:name" element={<DogBreed {...this.props} /> } />
              {/* <Route exact path="/Dog/Hazel" Component={DogBreed } /> */}
              {/* <Route exact path="/Dog/Tubby" Component={DogBreed } /> */}
      </Routes>
      
    </div>
  );
  }
}

export default App;
