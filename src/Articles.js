import ArticleData from './articles.json';
import { Link } from 'react-router-dom';

const Articles = () => {
  return (
    <div className="articles-page">
      <h1>Good Reads</h1>

      <div className="articles">

        {
          ArticleData.map( article => {
            return(
              <div className="article">
                
                <img className="article__image" src={require(`./articles/thumbnail${article.id.toString()}.jpg`)} alt="" height="300" width="400"/>
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