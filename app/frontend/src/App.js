import Home from './components/home/home';
import Navbar from './components/navbar/navbar';

function App() {

  const [searchEnabled, setSearchEnabled] = useState([]);

  state = { data : "Hello World" }

  return (
    <>
      < Navbar onNavbar={this.searchEnabled} />
      < Home onHome={this.searchEnabled} />
     </>
  );
}

export default App;
