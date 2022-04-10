import {HashRouter as Router, Route} from 'react-router-dom';
import './App.css';
import MovieList from '../MovieList/MovieList';
import MovieDetails from '../MovieDetails/MovieDetails';


function App() {
  return (
    <div className="App">
      
      
      <Router>  

         {/* Route to home page */}    
        <Route path="/" exact>
          <MovieList />
        </Route>
        
        {/* Route to details page */}
        <Route path='/details'>
        <MovieDetails/>
        </Route>
    
      </Router>
    </div>
  );
}


export default App;
