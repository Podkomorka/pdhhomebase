import DownloadLink from "react-download-link";

const Home = () => {
  return (
    <div className="rules-page">
      <h1>How to Play</h1>

      <section className="rules">
        <h3>Pauper Commander (Multiplayer)</h3>
        <section className="rule">
          <div>
            <h2>DECK STRUCTURE</h2>
            <p>Choose any uncommon creature as your commander. The commander does not need to be legendary. The rest of your deck must have only commons.</p>
          </div>
        </section>

        <section className="rule">
          <div>
            <h2>CARD RARITY</h2>
            <p>Card rarity includes only paper and MTGO rarities and must have been physically printed at least once.</p>
          </div>
        </section>

        <section className="rule">
          <div>
            <h2>GAMEPLAY</h2>
            <p>Suited for 3+ players. Starting life total is 30, commander damage is 16. A free mulligan is allowed.</p>
          </div>
        </section>

        <section className="rule">
          <div>
            <h2>BANNED LIST</h2>
            <p>The following cards are banned in Pauper Commander:</p>
            <ul>
              <li><a href="https://scryfall.com/card/ice/87/mystic-remora" target="_blank" rel="noopener noreferrer">Mystic Remora</a></li>
              <li><a href="https://scryfall.com/card/mb1/468/rhystic-study" target="_blank" rel="noopener noreferrer">Rhystic Study</a></li>
              <li>All cards with the Card Type "Conspiracy" (<a href="https://gatherer.wizards.com/Pages/Search/Default.aspx?action=advanced&special=true&type=+%5b%22Conspiracy%22%5d" target="_blank" rel="noopener noreferrer">list</a>)</li>
              <li>All cards that Wizards has removed from constructed formats (<a href="https://magic.wizards.com/en/articles/archive/news/depictions-racism-magic-2020-06-10" target="_blank" rel="noopener noreferrer">list</a>)</li>
            </ul>
          </div>
        </section>

        <section className="rule">
          <DownloadLink 
            style={{}} // Remove component default styling
            label="Comprehensive Rules (Download)"
            filename="pdh-comprehensive-rules-v5.3.txt"
          />
        </section>

        <div className="break"></div>

        <h3>Pauper Duel Commander (1v1)</h3>
        <section className="rule">
          <h2>GAMEPLAY</h2>
          <p>Suited for 2 players. Starting life total is 25, commander damage is 21. A free mulligan is not allowed. The player going first does not draw a card on their first turn.</p>
        </section>

        <section className="rule">
          <div>
            <h2>BANNED LIST</h2>
            <p>The following cards are banned in Pauper Duel Commander:</p>
            <ul>
              <li><a href="https://scryfall.com/card/plist/109/oubliette" target="_blank" rel="noopener noreferrer">Oubliette</a></li>
              <li>All cards with the Card Type "Conspiracy" (<a href="https://gatherer.wizards.com/Pages/Search/Default.aspx?action=advanced&special=true&type=+%5b%22Conspiracy%22%5d" target="_blank" rel="noopener noreferrer">list</a>)</li>
              <li>All cards that Wizards has removed from constructed formats (<a href="https://magic.wizards.com/en/articles/archive/news/depictions-racism-magic-2020-06-10" target="_blank" rel="noopener noreferrer">list</a>)</li>
            </ul>
          </div>
        </section>
      </section>
    </div>
  );
}
 
export default Home;