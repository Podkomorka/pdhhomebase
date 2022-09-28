const Home = () => {
  return (
    <div className="faq-page">
      <h1>Format Oddities</h1>

      <section className="faq">
        <div className="faq__text-wrap">
          <h3>Commanders with "Choose a Background"</h3>
          <p className="faq__text">Commanders that have "Choose a Background" allow you to have a Background as your second commander. Because of the rarity restriction of PDH, only uncommon Backgrounds may be used as a commander. Don't forget that the common Backgrounds can still be used in the 99 of your deck.</p>
        </div>
        <div>
          <img className="card" src="https://c1.scryfall.com/file/scryfall-cards/large/front/3/9/396f9198-67b6-45d8-91b4-dc853bff9623.jpg?1652823376" alt="Abdel Adrian, Gorion's Ward"/>
        </div>
      </section>

      <section className="faq flip">
        <div className="faq__text-wrap">
          <h3>Adventure Commanders</h3>
          <p className="faq__text">Casting either part of the card from the command zone will increase the commander tax. Casting the creature from exile via the adventure mechanic will ignore the commander tax. If the adventure would be put into the graveyard, exile, or any other zone, the commander may be put into the command zone as a state-based action, as normal. For example, if you cast the adventure part from the command zone you may have it return to the command zone after it resolves, with an increased commander tax of course.</p>
        </div>
        <div>
          <img className="card" src="https://c1.scryfall.com/file/scryfall-cards/large/front/8/a/8a665794-513f-4f78-92c9-1844ec27c79c.jpg?1595573141" alt="Oakhame Ranger"/>
        </div>
      </section>

      <section className="faq">
        <div className="faq__text-wrap">
          <h3>Can this land be my commander?</h3>
          <p className="faq__text">The commander must be a creature spell. Dryad Arbor is a creature but not a creature spell. It can not be a commander. So no need to worry about how commander tax interacts with cards that are not actually cast but only played as it would be the case with Dryad Arbor.</p>
        </div>
        <div>
          <img className="card" src="https://c1.scryfall.com/file/scryfall-cards/large/front/4/2/42852efb-6ab1-42cf-8678-8154f29039bd.jpg?1599767962" alt="Dryad Arbor"/>
        </div>
      </section>
    </div>
  );
}
 
export default Home;