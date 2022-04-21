// change state value using Functional Based

import React from 'react'

const SingleFBC = () => {
    let [name, setName] = React.useState("Rajesh");

    // function to change state value
    let changeName = () => {
        setName(name="Harish")
    }


  return (
      <div>
          <h1>{name}</h1>
          <button onClick={changeName}>Click to change name</button>
    </div>
  )
}

export default SingleFBC