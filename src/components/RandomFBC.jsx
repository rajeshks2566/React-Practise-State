// Random number using FBC

import React from 'react'

const RandomFBC = () => {
    let [number, setNumber] = React.useState(0);

    // function for random
  // let RandomNumber = () => {
  //       setNumber(number=Math.round(Math.random()*100))
  //   }
  return (
      <div>
          <h1>{number}</h1>
      {/* <button onClick={RandomNumber}>Ckick to Random Number</button> */}
      <button onClick={() => { setNumber(number = Math.round(Math.random() * 100)) }}>click</button>
      
    </div>
  )
}

export default RandomFBC