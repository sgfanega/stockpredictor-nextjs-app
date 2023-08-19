export interface Stocks {
  data: Stock[];
}

export interface Stock {
  id: string;
  attributes: Attributes;
}

export interface Attributes {
  ticker_symbol: string;
  company_name: string;
  confidence: string;
  predictions: Predictions;
}

export interface Predictions {
  "day 1": number;
  "day 2": number;
  "day 3": number;
  "day 4": number;
  "day 5": number;
  "day 6": number;
  "day 7": number;
  "day 8": number;
  "day 9": number;
  "day 10": number;
}

export type TickerSymbol = string;