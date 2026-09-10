# MarketMind AI Architecture

## Product goal

MarketMind AI is an evidence-based market intelligence application for Indian equities, intraday, F&O, mutual funds and SIP research. Predictions will be probabilistic and explainable rather than presented as guaranteed outcomes.

## Phase 1 foundation

- Responsive web dashboard
- Company search/research entry point
- Market overview UI
- AI outlook placeholder with confidence and key levels
- Watchlist and global-context panels
- Dark-mode interaction
- FastAPI backend foundation
- Health, market-overview and company API contracts
- Demo mode clearly separated from future live-data mode

## Planned data flow

`Market / Company / News sources -> ingestion -> PostgreSQL + Redis -> analytics -> ML prediction -> AI explanation -> web API -> dashboard`

## Planned modules

1. Market data and historical prices
2. Fundamentals and company filings
3. Technical indicators
4. News ingestion and sentiment
5. Global market context
6. ML prediction and backtesting
7. F&O analytics
8. Mutual funds and SIP analytics
9. Portfolio and alerts

## Reliability principles

- Show data timestamp/source in production.
- Keep predictions probabilistic.
- Backtest models before presenting performance claims.
- Separate raw data, derived indicators, model output and AI explanation.
- Never expose secrets in frontend code or Git history.
