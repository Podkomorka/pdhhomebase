import ArticleData from './articles.json';
import { Link } from 'react-router-dom';
import { useState } from 'react';

const Articles = () => {

  const [categories, setCategories] = useState([]);
  const [filteredArticles, setFilteredArticles] = useState(ArticleData);

  const handleChange = (e) => { 

    const category = e.target.value;
    const isChecked = e.target.checked;
    const activeCategories = categories;

    if (isChecked) {
      activeCategories.push(category);
    } else {
      const index = activeCategories.indexOf(category);
      if (index > -1) {
        activeCategories.splice(index, 1);
      }
    }

    setCategories(activeCategories);

    if (categories.length !== 0) {
      const results = ArticleData.filter((article) => {
        return categories.every(c => article.categories.includes(c));
      });
      setFilteredArticles(results);
    } else {
      setFilteredArticles(ArticleData);
    }

    console.log(categories);
  }; 

  return (
    <div className="articles-page">
      <h1>Good Reads</h1>
      <div className="filterBtns">
        <label className='filterBtn announcement'>
          <input
            type="checkbox" 
            value="announcement"
            onChange={handleChange}
          />
          <span className="checkmark"><span>Announcement</span></span>
        </label>
        <label className='filterBtn commontary'>
          <input
            type="checkbox" 
            value="commontary"
            onChange={handleChange}
          />
          <span className="checkmark"><span>Commontary</span></span>
        </label>
        <label className='filterBtn duel'>
          <input
            type="checkbox" 
            value="duel"
            onChange={handleChange}
          />
          <span className="checkmark"><span>Duel</span></span>
        </label>
        <label className='filterBtn guide'>
          <input
            type="checkbox" 
            value="guide"
            onChange={handleChange}
          />
          <span className="checkmark"><span>Guide</span></span>
        </label>
        <label className='filterBtn spotlight'>
          <input
            type="checkbox" 
            value="spotlight"
            onChange={handleChange}
          />
          <span className="checkmark"><span>Spotlight</span></span>
        </label>
      </div>

      <div className="articles">

        {
          filteredArticles.map(article => {
            return(
              <div className="article">
                
                <img 
                  className="article__image" 
                  src={require(`./articles/thumbnail${article.id.toString()}.jpg`)} 
                  alt="" 
                  height="300" 
                  width="400"
                  loading="lazy"
                />
                <div className="article__content">
                  <div className="article__details">
                    <p className="article__date">{article.date}</p>
                    <div className="article__categories">
                      {
                        article.categories.map(category => {
                          return(
                            <p className={`article__category article__category--${category}`}></p>
                          )
                        })
                      }
                    </div>
                  </div>
                  <h3 className="article__title">{article.title}</h3>
                  <p className="article__intro">{article.intro}</p>
                  <p className="article__author">{article.author}</p>
                </div>
                <Link className="article__link" to={`/articles/${article.id}`}></Link>
              </div>
            )
          })
        }
      </div>
    </div>
  );
}
 
export default Articles;