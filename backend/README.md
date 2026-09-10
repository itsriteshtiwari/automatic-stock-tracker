# MarketMind AI API

Phase 1 backend foundation built with FastAPI.

## Run locally

```bash
cd backend
python -m venv .venv
# Windows: .venv\\Scripts\\activate
# macOS/Linux: source .venv/bin/activate
pip install -r requirements.txt
uvicorn main:app --reload --port 8000
```

Endpoints:

- `GET /api/health`
- `GET /api/market/overview`
- `GET /api/companies/{symbol}`

The API intentionally returns demo values in Phase 1. Live market data, historical data, news, fundamentals and prediction models are added in later phases after data-source selection and validation.
