import { useParams } from "react-router-dom";
import ArticleData from './articles.json';
import './article.css';
import { useEffect } from "react";

const ArticleDetails = () => {
  const { id } = useParams();
  const article = ArticleData.find(x => x.id === Number(id));

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [])

  return (
    <div className="article-details">
      <section id="titleDetail">
        <h1>{article.title}</h1>
        <div className="details">
          <p className="author">{article.author}</p>
          <p>|</p>
          <p className="date">{article.date}</p>
          <p>|</p>
          <div className="categories">
            {
              article.categories.map(category => {
                return(
                  <p className={`article__category article__category--${category}`}></p>
                )
              })
            }
          </div>
        </div>
      </section>

      <section className="body">

        {/* Loop through array and return all elements */}
        {
          article.details.map(element => {
            return(
              <div dangerouslySetInnerHTML={ {__html: element} } />
            )
          })
        }

      </section>
    </div>
  );
}
 
export default ArticleDetails;