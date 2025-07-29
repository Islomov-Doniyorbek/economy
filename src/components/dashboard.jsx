import React from 'react'
import Header from './Header';
import Main from './Main';
import Footer from './Footer';
import '../index.css';
import Economy from './Economy';
import NationalHighlights from './Hightless';
import StockMarket from './Stock';
import CurrencyExchange from './Exchange';
const Dashboard = () => {
  return (
    <div>
      <Header />
                <Main />
                <NationalHighlights />
                <Economy/>
                <CurrencyExchange/>
                <StockMarket/>
                <Footer />
    </div>
  )
}

export default Dashboard
