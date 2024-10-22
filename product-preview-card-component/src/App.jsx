import Product from './components/Product/Product';
import './scss/main.scss';
import product from './data/product';

function App() {
  return (
    <div className="container">
      <Product {...product}></Product>
    </div>
  );
}

export default App;
