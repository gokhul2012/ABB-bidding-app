import { useEffect, useState } from 'react';
import { ChevronDown, Globe, Play, Heart, Search } from 'lucide-react';
import './IntegratedPage.css';
import React from 'react';
import { Route, useNavigate } from 'react-router-dom';
import axios from 'axios';



const auctionItemss = [
  { id: 1, title: 'Sony Black Headphones', minBid: 100, currentBid: 157, endsIn: '1 day 12 hrs 43 minutes' },
  { id: 2, title: 'Apple AirPod 2nd Gen', minBid: 80, currentBid: 95, endsIn: '1 day 12 hrs 43 minutes' },
  { id: 3, title: 'Mi 3i 20000mAh Power Bank', minBid: 40, currentBid: 46, endsIn: '1 day 12 hrs 43 minutes' },
  { id: 4, title: 'Tribit Bluetooth Speaker', minBid: 10, currentBid: 15, endsIn: '1 day 12 hrs 43 minutes' },
  { id: 5, title: 'WiFi Security Camera', minBid: 100, currentBid: 157, endsIn: '1 day 12 hrs 43 minutes' },
];

export default function IntegratedPage() {

  const [language, setLanguage] = useState('English');
  let navigate = useNavigate(); 
  
  const [auctionItems, setAuctionItems] = useState([]);

  useEffect(() => {
    axios.get('http://localhost:5000/api/auction-items')
      .then((response) => {
        setAuctionItems(response.data);
      })
      .catch((error) => {
        console.error('There was an error fetching the auction items!', error);
      });
  }, []);
const routeChange = () =>{ 
  let path = '/login'; 
  navigate(path);
}

  return (
    <div className="page-container">
      <header className="page-header">
        <div className="header-content">
          <h1 className="logo">
            Genix Auctions
          </h1>
          <nav className="navigation">
            <ul>
              <li><a href="#">Auctions <ChevronDown size={16} /></a></li>
              <li><a href="#">Bidding <ChevronDown size={16} /></a></li>
              <li><a href="#">About Us <ChevronDown size={16} /></a></li>
            </ul>
          </nav>
          <div className="user-actions">
            <select value={language} onChange={(e) => setLanguage(e.target.value)}>
              <option>English</option>
              <option>Español</option>
              <option>Français</option>
            </select>
            <Globe size={16} />
            <button className="login-button" 
              onClick={routeChange}>Login</button>
            <button className="get-started-button">Get Started</button>
          </div>
        </div>
      </header>

      <main className="main-content">
        <section className="hero-section">
          <h2>Your Gateway to Extraordinary Finds</h2>
          <p>Unlock deals, bid smart, and seize the moment with our online bidding bonanza!</p>
          <button className="watch-video-button">
            <Play size={20} /> Watch Video
          </button>
        </section>

        <section className="auction-section">
          <h2>Explore Auctions</h2>
          <div className="search-bar">
            <Search size={20} />
            <input type="text" placeholder="Search for items..." />
          </div>

          <div className="auction-grid">
            {auctionItems?.map((item) => (
              <div key={item?.id} className="auction-card">
                <h3>{item.title}</h3>
                <div className="bid-details">
                  <span>Minimum Bid: ${item.minBid}</span>
                  <span>Current Bid: ${item.currentBid}</span>
                </div>
                <p>Ends in: {item.endsIn}</p>
                <button className="bid-button">Bid now →</button>
              </div>
            ))}
          </div>
        </section>
      </main>

      <footer className="footer">
        <p>&copy; 2023 Genix Auctions. All rights reserved.</p>
      </footer>
    </div>
  );
}
