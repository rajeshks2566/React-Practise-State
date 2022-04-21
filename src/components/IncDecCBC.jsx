// // increment decrement using CBC
// import React, { Component } from 'react'

// export default class IncDecCBC extends Component {
//     state = {
//         count:0,
//     }

//     // Increment Function
//     Addition = () => {
//         this.setState({ count: this.state.count + 1 })//0-1-2-3-4-5...
//         this.setState({ count: this.state.count + 1 })//before value memorize agiralla
//     }

//     // decrement function
//     Subtraction = () => {
//       this.setState({ count: this.state.count - 1 });//-1-2-3-4-5-6...
//       this.setState({ count: this.state.count - 1 }); //before value memorize agiralla
//     }

//     // reset function
//     Reset = () => {
//         this.setState({count:0})
//     }

//   render() {
//     return (
//         <div>
//             <h1>{this.state.count}</h1>
//             <button onClick={this.Addition}>Increment</button>
//             <button onClick={this.Subtraction}>Decrement</button>
//             <button onClick={this.Reset}>Reset</button>
//       </div>
//     )
//   }
// }

// increment decremnt using previous value-method to print 2-4-6-8...in single click
// recommended method
import React, { Component } from 'react'

export default class IncDecCBC extends Component {
    state = {
        count:0,
    }

    // increment function
    addition = () => {
        this.setState(prev => ({ count: prev.count + 1 }))//0+1=1
        this.setState(prev => ({ count: prev.count + 1 }));//1+1=2,4,6,8..
   
    }

    // decrement function
    subtraction = () => {
        this.setState(prev => ({ count: prev.count - 1 }))
        this.setState(prev => ({ count: prev.count - 1 }));
    }

    // reset
    reset = () => {
        this.setState({count:0})
    }
  render() {
    return (
        <section id='secBlock'>
            <article className='secArticle'>
                <h1>{this.state.count}</h1>
                <main className='main'>
                    <button onClick={this.addition}>Increment</button>
                    <button onClick={this.subtraction}>Decrement</button>
                    <button onClick={this.reset}>Reset</button>
                </main>
            </article>
      </section>
    )
  }
}

