import Home from './components/home/home';
import Navbar from './components/navbar/navbar';
import Charts from './components/charts/charts';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";

function App() {

  // const [searchEnabled, setSearchEnabled] = useState([]);

  const searchEnabled = true;

  // useState = { data : "Hello World" }

  return (
    <Router>
    <div className="App">
      <Navbar />
      <div className="text-center">
        <div className="children">
          <div className="container">
            {/* <Link to="/">Home</Link>
            <Link to="/contact">Contact</Link>
            <Link to="/terms">Terms</Link> */}
            <Route exact path="/" component={Home} />
            <Route path="/charts" component={Charts} />
            <Route path="/search" component={Home} />
          </div>
        </div>

      </div>
    </div>
  </Router>
  )
}

export default App;
