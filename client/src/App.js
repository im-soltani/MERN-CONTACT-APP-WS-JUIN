
import './App.css';
import{Routes,Route,Link} from "react-router-dom"
import NavBar from './components/NavBar';
import ContactList from './components/ContactList';
import AddForm from './components/AddForm';

function App() {
  return (
    <div className="App">
      <NavBar/>
      <Link  to="/list">
        <button>Contact List</button>
      </Link>
      <Link to="/form">
      <button>Add Contact</button>
      </Link>

<Routes>
  <Route path="/list" element={<ContactList/>} />
  <Route path="/form" element={<AddForm/>} />

</Routes>
    </div>
  );
}

export default App;
