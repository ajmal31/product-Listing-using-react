
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Products } from './componets/products/Products';
import { Container } from 'react-bootstrap';


function App() {
  return (
    <div className="App ">
      <Container>
      <Products/>
      </Container>
    </div>
  );
}

export default App;
