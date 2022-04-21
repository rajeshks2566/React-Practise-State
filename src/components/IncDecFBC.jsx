import React from 'react'

const IncDecFBC = () => {
    let [count, setCount] = React.useState(0);

    // addition
    let addition = () => {
        setCount(prev=>(count=prev+1))
    }

    // subtraction
    let subtraction = () => {
        setCount(prev=>(count=prev-1))
    }

    // reset
    let reset = () => {
        setCount(count=0)
    }
  return (
    <section id='secBlock'>
      <article>
              <h1>{count}</h1>
              <main>

                  <button onClick={addition}>Increment</button>
                  <button onClick={subtraction}>Decrement</button>
                  <button onClick={reset}>Reset</button>
              </main>
      </article>
    </section>
  );
}

export default IncDecFBC