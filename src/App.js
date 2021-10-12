import './stylesheets/App.css'
import {BrowserRouter as Router,Route} from 'react-router-dom'
import LandingPage from './components/LandingPage/LandingPage';
import Summary from './components/Summary/Summary';
const App=()=> {
  return (
    <div>
        <Router className="App">
          <Route exact path="/" component={LandingPage}/>
          <Route exact path="/summary/:id" component={Summary}/>
        </Router>
    </div>
  );
}

export default App;
