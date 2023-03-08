import './App.css';
import { Calculator } from './components/Calculator';
import { useSearchParams } from 'react-router-dom'
import { Login } from './components/Login';
import { Header } from './components/Header';

function App() {
  const [searchParams, setSearchParams] = useSearchParams(false)

const openCalculatorPage = () => {
 searchParams.set("calculator", true)
 setSearchParams(searchParams)
}

const deleteCalculatorPage = () => {
 searchParams.delete("calculator")
 setSearchParams(searchParams)
}
  return (
    <div className='App'>
      <Header logOut={deleteCalculatorPage} searchParams={searchParams}/>

      {
        searchParams.has("calculator") ? <Calculator /> : <Login openCalculatorPage={openCalculatorPage}/>
      }
    
    </div>
  );
}

export default App;
