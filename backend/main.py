from datetime import datetime, timezone
from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware

app = FastAPI(title="MarketMind AI API", version="0.1.0")
app.add_middleware(CORSMiddleware, allow_origins=["*"], allow_credentials=True, allow_methods=["*"], allow_headers=["*"])

@app.get("/api/health")
def health():
    return {"status": "ok", "service": "marketmind-api", "timestamp": datetime.now(timezone.utc).isoformat()}

@app.get("/api/market/overview")
def market_overview():
    return {
        "mode": "demo",
        "indices": [
            {"symbol": "NIFTY 50", "value": 25120.65, "change_pct": 0.72},
            {"symbol": "BANK NIFTY", "value": 57845.20, "change_pct": 0.91},
            {"symbol": "SENSEX", "value": 82450.30, "change_pct": 0.64},
            {"symbol": "INDIA VIX", "value": 14.20, "change_pct": 0.18},
        ],
        "outlook": {"label": "BULLISH", "probability": 0.68, "confidence": "moderate"},
        "message": "Replace demo values with licensed live market data in Phase 2."
    }

@app.get("/api/companies/{symbol}")
def company(symbol: str):
    return {
        "symbol": symbol.upper(),
        "mode": "demo",
        "status": "ready",
        "next_phase": ["live price", "historical data", "fundamentals", "technical indicators", "news sentiment", "prediction model"]
    }
