import { useState, useEffect } from 'react';
import './App.css';
import Web3 from 'web3';
import YourContractABI from '../../red_social/build/contracts/NewsRanking.json'; // Replace with your contract's ABI
import Home from './pages/home/Home';




function App() {

  const [search, setSearch] = useState('');
  const [filter, setFilter] = useState('all');

  const [news, setNews] = useState([]);

  useEffect(() => {
    async function fetchData() {
      console.log('Fetching data from the blockchain...');
      const web3Blockchain = new Web3('http://127.0.0.1:7545');
      const contract = new web3Blockchain.eth.Contract(YourContractABI, '0x406fA5B5e34B9f3047e85d4f784C72cf2b23D0Ad');
      const newsData = await contract.methods.getTop10News().call();
      console.log("data from the blockchain");
      console.log(newsData)
      setNews(newsData);
    }
    fetchData();
  }, []);

  
  // Placeholder data for the articles
  const popularNews = [
    { title: 'Popular News 1', content: 'Content for popular news 1...' },
    { title: 'Popular News 2', content: 'Content for popular news 2...' },
    { title: 'Popular News 3', content: 'Content for popular news 3...' },
  ];

  const latestNews = [
    { title: 'Latest News 1', content: 'Content for latest news 1...' },
    { title: 'Latest News 2', content: 'Content for latest news 2...' },
    { title: 'Latest News 3', content: 'Content for latest news 3...' },
  ];

  return (
    <Home/>
    
    /*
    <div className="app-container">
      <div className="navbar">
        <div className="logo">NewsApp</div>
        <div className="nav-right">
          <img src="country-logo.png" alt="Country Logo" className="country-logo" />
          <button className="publish-button">Publicar</button>
          <div className="credits">
            <i className="fas fa-coins"></i>
            <span> $5 </span>
          </div>
        </div>
      </div>
      <div className="search-filter">
        <input
          type="text"
          placeholder="Search..."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
        />
        <select value={filter} onChange={(e) => setFilter(e.target.value)}>
          <option value="all">All</option>
          <option value="popular">Popular</option>
          <option value="latest">Latest</option>
        </select>
      </div>
      <div className="news-section">
        <div className="news-column popular-news">
          <h2>Popular News</h2>
          {popularNews.map((article, index) => (
            <div key={index}>
              <h3>{article.title}</h3>
              <p>{article.content}</p>
            </div>
          ))}
        </div>
        <div className="news-column latest-news">
          <h2>Latest News</h2>
          {latestNews.map((article, index) => (
            <div key={index}>
              <h3>{article.title}</h3>
              <p>{article.content}</p>
            </div>
          ))}
        </div>
      </div>
    </div>*/
  );
}

export default App;
