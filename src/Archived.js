import Archived_Articles from './archivedArticles.json';
import { useEffect } from "react";

const Archived = () => {

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [])

  return (
    <div className="archived-page">
      <h1>Archived Articles</h1>
      <section>
        <div className="archived-articles">
          {
            Archived_Articles.map( article => {
              return (
                <div className="archived">
                  <strong>{article.id}</strong>
                  <a href={article.url} target="_blank">{article.title}</a>
                </div>
              )
            })
          }
        </div>
      </section>
    </div>
  );
}
 
export default Archived;