import Search from "./components/Search";
import Main from "./components/Main";
import { useState } from 'react'


function App() {
  const [info, setInfo] = useState([]);
  const [state, setState] = useState(false);

  return (
    <div className="App">
      <Search setInfo={setInfo} setState={setState}/>
      <Main info={info} state={state}/>
    </div>
  );
}

export default App;
