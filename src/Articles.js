import ArticleData from './articles.json';
import { Link } from 'react-router-dom';
import { useState } from 'react';

const Articles = () => {

  // const [categories, setCategories] = useState([]);
  // const [recentCategory, setRecentCategory] = useState();
  // const [filteredArticles, setFilteredArticles] = useState(ArticleData);

  // const handleChange = (e) => { 

  //   const category = e.target.value;
  //   const isChecked = e.target.checked;
  //   const currentCategories = categories;

  //   if (category !== "all") {
  //     if (category === "duel") {
  //       if (isChecked) {
  //         currentCategories.push(category);
  //       } else {
  //         const index = currentCategories.indexOf(category);
  //         if (index > -1) {
  //           currentCategories.splice(index, 1);
  //         }
  //       }
  //     } else {
  //       const index = currentCategories.indexOf(recentCategory);
  //         if (index > -1) {
  //           currentCategories.splice(index, 1);
  //         }
  //       setRecentCategory(category);
  //       currentCategories.push(category);
  //     }
  //     setCategories(currentCategories);
  //   } else {
  //     // remove all categories
  //     currentCategories.splice(0,currentCategories.length);
  //     setCategories(currentCategories);
  //     // uncheck all buttons
  //     document.querySelectorAll('input').forEach(el => el.checked = false);
  //   }

  //   if (categories.length !== 0) {
  //     const results = ArticleData.filter((article) => {
  //       return categories.every(c => article.categories.includes(c));
  //     });
  //     setFilteredArticles(results);
  //   } else {
  //     setFilteredArticles(ArticleData);
  //   }

  // }; 

  return (
    <div className="articles-page">
      <h1>Good Reads</h1>
      {/* <div className="filterBtns">
        <label className='filterBtn'>
          <input
            type="checkbox" 
            name="category"
            value="all"
            onChange={handleChange}
          />
          <span className="checkmark"><span style={{color: "black"}}>Clear</span></span>
        </label>
        <label className='filterBtn announcement'>
          <input
            type="radio" 
            name="category"
            value="announcement"
            onClick={handleChange}
          />
          <span className="checkmark"><span>Announcement</span></span>
        </label>
        <label className='filterBtn commontary'>
          <input
            type="radio" 
            name="category" 
            value="commontary"
            onClick={handleChange}
          />
          <span className="checkmark"><span>Commontary</span></span>
        </label>
        <label className='filterBtn guide'>
          <input
            type="radio" 
            name="category" 
            value="guide"
            onClick={handleChange}
          />
          <span className="checkmark"><span>Guide</span></span>
        </label>
        <label className='filterBtn spotlight'>
          <input
            type="radio" 
            name="category" 
            value="spotlight"
            onClick={handleChange}
          />
          <span className="checkmark"><span>Spotlight</span></span>
        </label>
        <label className='filterBtn duel'>
          <input
            type="checkbox" 
            value="duel"
            onClick={handleChange}
          />
          <span className="checkmark"><span>Duel</span></span>
        </label>
      </div> */}

      <div className="articles">
        {
          // filteredArticles.map(article => {
            ArticleData.map(article => {
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