import React,{ useState, useEffet, useEffect } from 'react'
import axios from 'axios'
import CurrentCards from './currentCards'
import Newsletter from '../commonComponents/Newsletter'
import styles from '../commonComponents/Newsletter.module.css'

 class CurrentListing extends React.Component {

  constructor() {
    super()
    this.state = {
      currents: []
    }
  }

  componentDidMount() {
    axios.get('https://stokd-server.herokuapp.com/api/current')
      .then(res => this.setState({ currents: res.data }))
      .catch(err => console.log(err))
  }

  render() {
    console.log(this.state.currents)
    return <div className="section">
      <h1 className="titleOne">Latest Articles</h1>
      <div className="container">
        <div className="titleThree">
          <div className="columns is-mobile is-multiline">
            {this.state.currents.map((current, i) => {
              return <CurrentCards key={i} current={current} />
            })}
         
          </div>
        </div>

      </div>
      <Newsletter />
    </div>
    
  }
}

export default CurrentListing 

/* import styled from 'styled-components';
const NewsListBlock = styled.div`
  box-sizing: border-box;
  padding-bottom: 3rem;
  width: 767px;
  margin: 0 auto;
  margin-top: 2rem;
  @media screen and (max-width: 768px) {
    width: 100%;
    padding-left: 1rem;
    padding-right: 1rem;
  }
`;

const NewsList = ({ category }) => {
  const [articles, setArticles] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      setLoading(true);
      const query = category === 'all' ? '' : `&category=${category}`;
      const data = await axios.get(
        `https://newsapi.org/v2/top-headlines?country=kr${query}&apiKey=935cc395ed714edbaf88ff6947904a57`,
      );
      setArticles(data.data.articles);
      console.log(articles);
      console.log(category === 'all' ? '' : `&category=${category}`);
    };
    fetchData();
    setLoading(false);
  }, [category]);

  if (loading) {
    return <div>야 아직 로딩중</div>;
  }
  if (articles === null) {
    return <div>야 데이터 셋 안됫어</div>;
  }
  return (
    <NewsListBlock>
      {articles.map(article => (
        <CurrentCards article={article} key={article.url} />
      ))}
    </NewsListBlock>
  );
};

export default NewsList; */