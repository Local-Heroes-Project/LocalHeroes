import { Heart } from "lucide-react"
import { UsersRound } from "lucide-react"

function HeroSection() {
  return (
    <section className="hero-section">
      <div className="badge">
        Celebrating Community Impact
      </div>

      <h1>
        Meet Your Local
        </h1>
        <h2>
        <span> Heroes</span>
        </h2>
    

      <p>
        Discover and celebrate the extraordinary people making a positive
        difference in
        </p>

        <p>
         communities around the world. Every hero has a story
        worth sharing.
      </p>

      <div className="stats">
        <div className="stat">
          <div className="stat-icon">
          <UsersRound color="#f8f7f7" />
          </div>

          <strong>6</strong>
          <span>Heroes Celebrated</span>
        </div>
          
        <div className="stat">
          <div className="stat-icon">
          <Heart color="#dfd8d8" />
          </div>
          <strong>745</strong>
          <p>Thanks Given</p>
        </div>
      </div>
    </section>
  );
}

export default HeroSection;