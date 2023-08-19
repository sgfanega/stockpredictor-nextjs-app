'use client';

import Container from 'react-bootstrap/Container';
import StockPredictor from "../components/stockpredictor/stock-predictor";

export default function Home() {
  return (
    <Container className="home">
      <StockPredictor/>
    </Container>
  )
}
