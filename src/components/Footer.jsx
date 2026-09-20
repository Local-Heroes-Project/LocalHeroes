import { Mail } from 'lucide-react'
import { Phone } from 'lucide-react'
import { MapPin } from 'lucide-react'
import { Heart } from 'lucide-react'
import { ArrowUp } from 'lucide-react'
import { UsersRound } from 'lucide-react'
import { Copyright } from 'lucide-react'
function Footer() { 
  return (
    <footer className="footer">

      <div className="footer-content">

        <div className="footer-about">
          <h2><UsersRound color="#fcfcfc" />Local Heroes</h2>

          
            <p>Celebrating everyday people</p>
             <p>making extraordinary differences</p>
             <p>in their communities. Join us in </p>
               <p>irecognizing the heroes around </p>
               <p>us.</p>
            
          
        </div>

        <div className="footer-column">
          <h3>Quick Links</h3>
          <a href="#">Browse Heroes</a>
          <a href="#">Nominate a Hero</a>
          <a href="#">How It Works</a>
          <a href="#">Success Stories</a>
          <a href="#">Community Guidelines</a>
        </div>

        <div className="footer-column">
          <h3>Support</h3>
          <a href="#">Help Center</a>
          <a href="#">Contact Us</a>
          <a href="#">Privacy Policy</a>
          <a href="#">Terms of Service</a>
          <a href="#">Report Content</a>
        </div>

        <div className="footer-column">
          <h3>Get in Touch</h3>
          
          <p><Mail size={10} />hello@localheroes.com</p>
         
          <p><Phone size={10} />1-800-HEROES</p>
          <p><MapPin size={10} />123 Community Street</p>
          <p>Hero City, HC 12345</p>

          <h3>Stay Updated</h3>

          <div className="subscribe">
            <input type="email" placeholder="Your email" />
            <button>Subscribe</button>
          </div>
        </div>

      </div>

      <div className="footer-bottom">
        <p>
          <Copyright size={10} color="#fcfcfc" />
           2024 Local Heroes. All rights reserved.
          Made with  <Heart className="footer-heart" size={14} />for communities everywhere.
        </p>

        <button>
          <ArrowUp size={14} />
           Back to Top</button>
      </div>

    </footer>
  );
}

export default Footer;