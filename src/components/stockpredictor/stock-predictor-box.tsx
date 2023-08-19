'use client';

import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { Stock, Attributes, TickerSymbol, Predictions } from '../../interfaces/interfaces';
import React from 'react';



export default function StockPredictorBox({ attributes } : Stock) {
  function PredictionIcon() {
    let firstPrediction = attributes.predictions['day 1'];
    let lastPrediction = attributes.predictions['day 10'];

    if (firstPrediction < lastPrediction) {
      return <i className="bi bi-caret-up-fill fc-light-green"></i>;
    } else if (firstPrediction > lastPrediction) {
      return <i className="bi bi-caret-down-fill fc-light-red"></i>;
    } else {
      return <i className="bi bi-dash-square fc-light-gray"></i>;
    }
  }

  function PredictionSet() {
    const predictionList = [];
    const predictionArr = Object.entries(attributes.predictions);

    for (const [key, value] of predictionArr) {
      predictionList.push(<li className="list-group-item" key={key}><b>{key}:</b> ${value.toFixed(2)}</li>)
    }

    return (
      <div className="prediction-list rounded-3 border shadow-sm p-3">
        {predictionList}
      </div>
    );
  }

  return (
    <React.Fragment>
      <Col xs={12}>
        <div className="rounded-3 border shadow-sm p-3">
          <p className="fs-6 mb-0"><b>Stock Name:</b> { attributes.company_name + ' '} <PredictionIcon/></p>
          <p className="fs-6 mb-0"><b>Ticker Symbol:</b> { attributes.ticker_symbol }</p>
          <p className="fs-6 mb-0"><b>Confidence:</b> { attributes.confidence}</p>
        </div>
      </Col>
      <Col xs={12}>
        <PredictionSet/>
      </Col>
    </React.Fragment>
  )
}