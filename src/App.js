import { Fragment } from 'react';
import './App.scss';
import Footer from './Pages/Footer/Footer';
import Header from './Pages/header/Header';
import Index from './Pages/Main/Index';

function App() {
  return (
    <Fragment>
      <Header />
      <main>
        <Index />
      </main>
      <footer>
        <Footer />
      </footer>
    </Fragment>
  );
}

export default App;
