import React from 'react';
import './main.scss';
import { Header, Main, Footer, Card } from './components';

function App() {
  return (
    <div className="container">
      <Header></Header>
      <Main>
        <Card></Card>
        <Card></Card>
        <Card></Card>
        <Card></Card>
      </Main>
      <Footer></Footer>
    </div>
  );
}

export default App;
