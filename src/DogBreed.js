import React,{Component} from "react";
import hazel from "./hazel.jpg";
import tubby from "./tubby.jpg";
import whiskey from "./whiskey.jpg";
import { Route, Routes, useParams } from "react-router-dom";
import DogDetails from "./DogDetails";

export default function DogBreed(){
    // static defaultProps={
    //     dogs: [
    //       {
    //         name: "Whiskey",
    //         age: 5,
    //         src: whiskey,
    //         facts: [
    //           "Whiskey loves eating popcorn.",
    //           "Whiskey is a terrible guard dog.",
    //           "Whiskey wants to cuddle with you!"
    //         ]
    //       },
    //       {
    //         name: "Hazel",
    //         age: 3,
    //         src: hazel,
    //         facts: [
    //           "Hazel has soooo much energy!",
    //           "Hazel is highly intelligent.",
    //           "Hazel loves people more than dogs."
    //         ]
    //       },
    //       {
    //         name: "Tubby",
    //         age: 4,
    //         src: tubby,
    //         facts: [
    //           "Tubby is not the brightest dog",
    //           "Tubby does not like walks or exercise.",
    //           "Tubby loves eating food."
    //         ]
    //       }
    //     ]
    //   }
    // console.log(this.props);
        const {name} = useParams();
        // let currentDog = this.props.dogs.find(
        //     dog => dog.name.toLowerCase() === name.toLowerCase()
        // );

        return(
        <div>
            {/* <h1>{name}</h1> */}
            <DogDetails name={name} />
            {/* <h2>{this.props.dogs[0].name}</h2> */}
        </div>
        );
}