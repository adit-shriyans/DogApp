import React,{Component} from "react";
import "./Dog.css";
import { Link, Route, Routes } from "react-router-dom";
import DogBreed from "./DogBreed";
class Dog extends Component{

    // constructor(props){
    //     super(props);
    //     this.handleClick=this.handleClick.bind(this);

    // }
    // handleClick(evt){
    // //    <Routes>
    // //         <Route exact path="/Dog/whiskey" render={()=> }
    // //    </Routes> 
    // console.log(evt);
    // }

    render(){
        let name=this.props.info.name;
        return(
        <div>          
             <Link to={`/Dog/${name}`}> <div className="Dog" >
                <img className="Dog-img" src={this.props.info.src}/>
                <p className="Dog-name" >{this.props.info.name}</p>
            </div>
            </Link>

            {/* <Routes>
                <Route exact path="/Dog/Whiskey" render={()=> <DogBreed />} />
                <Route exact path="/Dog/Hazel" render={()=> <DogBreed />} />
                <Route exact path="/Dog/Tubby" render={()=> <DogBreed />} />
            </Routes> */}
        </div>

        );
    }
}

export default Dog;