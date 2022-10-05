import ArticleData from './articles.json';
import { Link } from 'react-router-dom';
import { useState } from 'react';

const Articles = () => {

  const [categories, setCategories] = useState([]);
  const [filteredArticles, setFilteredArticles] = useState(ArticleData);

  // const filter = (e) => {
  //   const category = e.target.value;

  //   if (search !== '') {
  //     const results = ArticleData.filter((article) => {
  //       return article.title.toLowerCase().includes(search.toLowerCase());
  //     });
  //     setFilteredArticles(results);
  //   } else {
  //     setFilteredArticles(ArticleData);
  //   }

  //   setTitle(search);
  // };

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

      <input
        type="checkbox" 
        id="checkDuel"
        value="duel"
        onChange={handleChange}
      />
      <input
        type="checkbox" 
        id="checkAnnouncement"
        value="announcement"
        onChange={handleChange}
      />
      <input
        type="checkbox" 
        id="checkCommontary"
        value="commontary"
        onChange={handleChange}
      />
      <input
        type="checkbox" 
        id="checkSpotlight"
        value="spotlight"
        onChange={handleChange}
      />

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