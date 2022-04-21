import React, { Component } from "react";
export default class ClassState extends Component {
//   state using constructor method
    constructor() {
      super();
      this.state = {
        username: "Rajesh",
          salary: 30000,
          content: "State using constructor method",
        skills:["JAVA","PYTHON","REACT"]
      };
    }

  // using only state method
  state = {
    username: "Rajesh",
    salary: 30000,
    content: "State using constructor method",
    skills: ["JAVA", "PYTHON", "REACT"],
  };
  render() {
    return (
      <div>
        <h1>{this.state.content}</h1>
        <h2>Name is : {this.state.username}</h2>
        <h3>Salary is : {this.state.salary}</h3>
        {this.state.skills.map(skill => {
          return <h3>{skill}</h3>;
        })}
      </div>
    );
  }
}

// **************************************************************************************
// Difference between writing state inside constructor and inside render

// import React, { Component } from "react";

// export default class ClassState extends Component {
//   constructor() {
//     super();
//     this.state = {
//       username: "Rajesh",
//       age: 22,
//       designation: "React Dev",
//     };
//     console.log(this.state);
//   }

//   // button function
//     clickMe = () => {
//       console.log("hello");
//     this.setState({ designation: "Java Developer" });
//   };
//   render() {
//     return (
//       <div>
//         <h2>{this.state.username}</h2>
//         <h2>{this.state.age}</h2>
//         <h2>{this.state.designation}</h2>
//         <button onClick={this.clickMe}>Click to Change</button>
//       </div>
//     );
//   }
// }
