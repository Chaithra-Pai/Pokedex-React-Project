import './App.css';
import Header from './components/Header/Header';
import SearchBar from './components/SearchBar/SearchBar';
import Button from './components/Button/Button';
import SelectCustom from './components/Select/SelectCustom';
import CustomSelectContainer from './components/Select/CustomSelectContainer';

function App() {
  return (
    <div className="App">
      <Header/>
        <div className='searchFilter'>
          <SearchBar />
          <CustomSelectContainer />
          <Button/>
        </div>  
    </div>
  );
}

export default App;
