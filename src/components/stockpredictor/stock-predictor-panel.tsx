'use client';

import { useEffect, useState } from 'react';
import { Stocks, Stock, Attributes, TickerSymbol } from '../../interfaces/interfaces';


export default function StockPredictorPanel() {
  const [stocks, setStocks] = useState<Stocks>();
  const [currentTickerSymbol, setCurrentTickerSymbol] = useState<TickerSymbol>('MSFT');

  useEffect(() => {
    async function fetchStocksFromAPI(url: string) {
      try {
        const response = await fetch(url);
        const data = await response.json();
        setStocks(data);
      } catch (error) {
        console.error('There was an issue with Data Fetching: ', error);
      }
    }
    fetchStocksFromAPI('http://146.190.112.250/api/stockpredictions');
  },[])

  return (
    <>
    </>
  )
}