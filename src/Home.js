import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const Home = () => {
  return (
    <div className="home-page">
      <section className="intro">
        <div>
          <h1>Pauper Commander</h1>
          <p>Pauper Commander (PDH) is a variant of Commander (EDH) in which decks are made up of 99 commons with any uncommon creature as the commander.</p>
        </div>
      </section>
      <section className="why">
        <h2>WHY PLAY</h2>
        <div className="reasons">
          <div className="reason">
            <h3>Cost</h3>
            <p>Decks are a fraction of the cost of regular Commander decks.</p>
          </div>
          <div className="reason">
            <h3>Creativity</h3>
            <p>Countless commander options to test your brewing skills with a new restriction.</p>
          </div>
          <div className="reason">
            <h3>Community</h3>
            <p>Friendly folks eager to help with decks and answer questions in a fast-growing online community.</p>
          </div>
        </div>
      </section>
      <section className="join">
        <h2>JOIN THE CHAT</h2>
        <div>
          <a href="https://discord.gg/MSnDv3p82P" target="_blank" rel="noopener noreferrer">
            <FontAwesomeIcon icon="fa-brands fa-discord" size="2x"/></a>
          <a href="https://www.facebook.com/groups/666222133437372" target="_blank" rel="noopener noreferrer">
            <FontAwesomeIcon icon="fa-brands fa-square-facebook" size="2x"/></a>
          <a href="https://www.reddit.com/r/PauperEDH/" target="_blank" rel="noopener noreferrer">
            <FontAwesomeIcon icon="fa-brands fa-square-reddit" size="2x"/></a>
        </div>
      </section>
    </div>
  );
}
 
export default Home;