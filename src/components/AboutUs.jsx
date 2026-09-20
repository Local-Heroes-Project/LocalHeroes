function AboutUs() {
  return (
    <section className="about-page">

      <div className="about-container">

        <div className="about-header">
          <span className="about-badge">ABOUT US</span>

          <h1>
            Meet the People <span>Behind Local Heroes</span>
          </h1>

          <p>
            Local Heroes is a community where we discover, celebrate,
            and share the stories of amazing people making a difference
            in their communities.
          </p>
        </div>

        <div className="people">

          <div className="person-card">
            <div className="person-image">
              <img
                src="/images/image.png."
              
              />
            </div>

            <h3>Person One</h3>
            <span>Founder</span>

            <p>
              {/* ------------------------------------- */}
            </p>
          </div>

          <div className="person-card">
            <div className="person-image">
              <img
                src="/im"
               
              />
            </div>

            <h3>Person Two</h3>
            <span>Community Manager</span>

            <p>
              {/* ------------------------------------ */}
            </p>
          </div>

        </div>

      </div>

    </section>
  );
}

export default AboutUs;