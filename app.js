const watchlist = [
  {symbol:'RELIANCE', name:'Reliance Industries', price:'₹1,452.80', change:'+2.40%', tone:'positive'},
  {symbol:'TCS', name:'Tata Consultancy Services', price:'₹3,184.10', change:'+1.90%', tone:'positive'},
  {symbol:'HDFCBANK', name:'HDFC Bank', price:'₹1,964.35', change:'+1.70%', tone:'positive'},
  {symbol:'INFY', name:'Infosys', price:'₹1,598.20', change:'−0.40%', tone:'negative'}
];

const list = document.getElementById('watchlist');
const renderWatchlist = () => {
  list.innerHTML = '<div class="table-row"><span>Company</span><span>Price</span><span>Change</span></div>' + watchlist.map(s => `<div class="table-row"><div><strong>${s.symbol}</strong><span>${s.name}</span></div><strong>${s.price}</strong><strong class="${s.tone}">${s.change}</strong></div>`).join('');
};
renderWatchlist();

document.getElementById('refreshBtn').addEventListener('click', (event) => {
  event.currentTarget.textContent = 'Updated';
  setTimeout(() => event.currentTarget.textContent = 'Refresh', 900);
});

document.getElementById('researchForm').addEventListener('submit', (event) => {
  event.preventDefault();
  const value = document.getElementById('researchInput').value.trim();
  const result = document.getElementById('researchResult');
  if (!value) {
    result.textContent = 'Enter a company name or symbol to begin.';
    return;
  }
  result.innerHTML = `<strong>${value.toUpperCase()}</strong><br>Phase 1 search workflow is connected. Live price, fundamentals, technicals, news sentiment and probabilistic predictions will be wired into this research panel in the next phases.`;
});

document.getElementById('companySearch').addEventListener('keydown', (event) => {
  if (event.key === 'Enter') {
    document.getElementById('researchInput').value = event.currentTarget.value;
    document.getElementById('researchForm').requestSubmit();
  }
});

document.getElementById('themeBtn').addEventListener('click', () => document.body.classList.toggle('dark'));
