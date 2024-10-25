import Product from './components/Product/Product';
import Footer from './components/Footer/Footer';
import './scss/main.scss';
import product from './data/product';

function App() {
  return (
    <div className="container">
      <main>
        <Product {...product}></Product>
      </main>
      <Footer></Footer>
    </div>
  );
}

export default App;
