import React from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Header from './Component/Header/Header';
import TopHeadLine from './Component/ToHeadLine/TopHeadLine';
import Recharts from './Component/Recharts/Recharts';

function App() {
  return (
    <div>
      <Recharts></Recharts>
      <Header></Header>
      <TopHeadLine></TopHeadLine>
    </div>
  );
}

export default App;
