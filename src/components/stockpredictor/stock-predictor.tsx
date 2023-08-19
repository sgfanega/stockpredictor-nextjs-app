"use client";

import { useEffect, useState } from 'react';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';
import StockPredictorLineChart from './stock-predictor-line-chart';
import StockPredictorBox from './stock-predictor-box';
import { Stocks, Stock, Attributes, TickerSymbol } from '../../interfaces/interfaces';

export default function StockPredictor() {
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
    fetchStocksFromAPI(`api/stockpredictions`);
  },[])

  function getStock(stocks: Stocks, currentTickerSymbol : TickerSymbol) {
    const stock = stocks.data.find((stock : Stock) => stock.attributes.ticker_symbol === currentTickerSymbol);
    return stock?.attributes
  }

  if (!stocks || !currentTickerSymbol) { return <p className="fs-4 text-center">Loading...</p>}

  function StockSelection() {
    return (
      <Form.Select
        className="rounded-3 border shadow-sm w-100"
        aria-label="Ticker Symbol Select" 
        value={currentTickerSymbol} 
        onChange={(event) => setCurrentTickerSymbol(event.target.value)}>
          {
            stocks?.data.map((stock : Stock) => (
              <option 
              key={stock.attributes.ticker_symbol}
              value={stock.attributes.ticker_symbol}>
                {stock.attributes.company_name}
              </option>
            ))
          }
      </Form.Select>
    );
  }

  return (
    <section id="stockpredictorchartjs" className="stockpredictorchartjs">
      <Row className="g-3">
        <Col xs={12} md={7} lg={8} >
          <div className="canvas rounded-3 border shadow-sm p-3">
            <StockPredictorLineChart id={currentTickerSymbol} attributes={getStock(stocks, currentTickerSymbol) as Attributes}/>
          </div>
        </Col>
        <Col xs={12} md={5} lg={4}>
          <Row className="flex-column g-3">
            <Col xs={12}>
              <StockSelection/>
            </Col>
            <StockPredictorBox id={currentTickerSymbol} attributes={getStock(stocks, currentTickerSymbol) as Attributes}/>
          </Row>
        </Col>
      </Row>
    </section>
  );
}