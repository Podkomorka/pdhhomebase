import Members from './members.json';

const About = () => {
  return (
    <div class="about-page">

      <h1>The Team</h1>

      <section>
        <h2>MISSION STATEMENT</h2>
        <p>PDH Home Base is working towards popularizing and growing the Pauper Commander format by providing players with the resources they need.</p>
      </section>

      <section class="members">
        
        {
          Members.map( member => {
            return(
              <div className="member">
                <img 
                  class="member__picture" 
                  src={require(`./assets/members/${member.pfp}.webp`)} 
                  width="160" 
                  height="160" 
                  alt="Member's Icon"
                  loading="lazy"
                />
                <div class="member__info">
                  <h3 class="member__name">{member.name}</h3>
                  <p class="member__role">{member.roles}</p>
                  <p class="member__bio">{member.bio}</p>
                </div>
              </div>
            )
          })
        }

      </section>
    </div>
  );
}
 
export default About;