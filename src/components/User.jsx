// import React, { Component } from "react";
// import JSON from "../Data.json";

// export default class User extends Component {
//   constructor() {
//     super();
//     this.state = {
//       details: JSON,
//     };
//   }
//     render() {
//         return (
//           <section>
//             <article>
    
//               {this.state.details.map(x => {
//                 return (
//                   <>
//                     <figure>
//                       <img src={x.avatar_url}  />
//                     </figure>
//                     <p>{x.id}</p>
//                     <p>{x.login}</p>
//                     <p>
//                       <a href={x.html_url}>View</a>
//                     </p>
//                   </>
//                 );
//               })}
//             </article>
//           </section>
//         );
        
    
//   }
// }



// 
import React, { Component } from 'react'
import JSON from '../Data.json'

export default class User extends Component {
    constructor()
    {
        super();
        this.state = {
            gitUser: JSON,
        }
    }
  render() {
    return (
        <section id='secBlock'>
            <article>
                {this.state.gitUser.map(x =>
                {
                    // destructuring
                    let {avatar_url,login,id,html_url } = x;
                    return (
                      <div>
                        <figure>
                          <img src={avatar_url} />
                        </figure>
                        <p>{login}</p>
                        <p>{id}</p>
                        <p>
                          <a href={html_url}>View Profile</a>
                        </p>
                      </div>
                    );
                    })}
            </article>
        </section>
    )
  }
}

