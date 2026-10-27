import { Heart } from 'lucide-react';
import {MoveRight} from 'lucide-react'
import {MapPin} from 'lucide-react'
import {Tags} from 'lucide-react'
import "./HeroesListCard.css"






function HeroesListCard({listing}) {

   
    




    return (

        <div>

          


            <h2 className="HeroFound">{Object.keys(listing).length} heroes found</h2>
            <div className="HeroCard">
            
            
            <div className="HeroTop">
               <h2 className='HeroTag' >{listing.tags}</h2>
               <img className="HeroImage" src={listing.photo_url} alt="" />
               <button className="LikesCount">
               <span className='Heart'><Heart /></span>
               {listing.thanks_count}

               </button>
            </div>
            <div className='HeroDetail'>
               <h2 className="HeroName">{listing.full_name}</h2>
               <p className='HeroLocation'><MapPin />{listing.location}</p>
               <p className='HeroStory'>{listing.story}</p>

               <div className='HeroTags'>
               <span className="tag"><Tags />Community Garden</span>
               <span className="tag"><Tags />Sustainability</span>
               <span className="tag">+1 more</span>
               </div>

               <div className='HeroDown'>
               <button className="Thanked" ><span className='Heart'><Heart /></span>Thanked</button>
               <a className='ReadMore' href="http://">Read Story <span><MoveRight/></span> </a>
               </div>
            
            </div>




           {status === "loading" && <p className="board-state">Loading listings…</p>}
           {status === "error" && <p className="board-state">Sorry — we couldn't load the list.</p>}
           {status === "success" && <HeroesListingList listing={listing} />}

           
       </div>
       
        </div>
    )
}

export default HeroesListCard