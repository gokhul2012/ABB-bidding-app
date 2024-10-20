
const express = require('express');
const cors = require('cors');
const app = express();
const port = 5000;

app.use(cors());

const auctionItems = [
  { id: 1, title: 'Sony Black Headphones', minBid: 100, currentBid: 157, endsIn: '1 day 12 hrs 43 minutes' },
  { id: 2, title: 'Apple AirPod 2nd Gen', minBid: 80, currentBid: 95, endsIn: '1 day 12 hrs 43 minutes' },
  { id: 3, title: 'Mi 3i 20000mAh Power Bank', minBid: 40, currentBid: 46, endsIn: '1 day 12 hrs 43 minutes' },
  { id: 4, title: 'Tribit Bluetooth Speaker', minBid: 10, currentBid: 15, endsIn: '1 day 12 hrs 43 minutes' },
  { id: 5, title: 'WiFi Security Camera', minBid: 100, currentBid: 157, endsIn: '1 day 12 hrs 43 minutes' },
];

app.get('/api/auction-items', (req, res) => {
  res.json(auctionItems);
});

app.listen(port, () => {
  console.log(`Server running on http://localhost:${port}`);
});
