import './App.css';
import ClassState from './components/ClassState';
import Employee from './components/Employee';
import FuncState from './components/FuncState';
import './global.css'
import User from './components/User';
import SingleCBC from './components/SingleCBC';
import RandomCBC from './components/RandomCBC';
import SingleFBC from './components/SingleFBC';
import RandomFBC from './components/RandomFBC';
import IncDecCBC from './components/IncDecCBC';
import IncDecFBC from './components/IncDecFBC';

function App() {
  return (
    <div className="App">
      {/* state using constructor method and state method */}
      {/* <ClassState /> */}
      {/* ************************************************************************************}

      {/* Functional State */}
      {/* <FuncState /> */}

      {/* *****************************************************************************/}
      {/* employee table */}
      {/* <Employee /> */}

      {/* *****************************************************************************/}
      {/* Json Data */}
      <User />

      {/* update state value using onclick class based */}
      {/* <SingleCBC /> */}

      {/* random number using CBC */}
      {/* <RandomCBC /> */}

      {/* update state value using onclick Func  based  */}
      {/* <SingleFBC /> */}

      {/* random number using CBC */}
      {/* <RandomFBC /> */}

      {/* Inc Dec CBC-Memorise Value */}
      {/* <IncDecCBC /> */}

      {/* Inc Dec CBC-Memorise Value */}
      {/* <IncDecFBC /> */}

    </div>
  );
}

export default App;
