import HeroesListCard from "./HeroesListCard";
import { useListingsStore } from "../store/useListingsStore"
import { useEffect } from "react";
import HeroSection from "../components/HeroSection"
import SearchBar from "../components/SearchBar"


function HeroesListingList () {

    const listings = useListingsStore((state) => state.listings);
    const status = useListingsStore((state) => state.status);
    const loadHeroes = useListingsStore((state) => state.loadHeroes);
    

    console.log(listings)

    useEffect(() => {
        loadHeroes();
      }, [loadHeroes]);

    return (
        
        

        <div className="Card-grid">

            < HeroSection />
            <SearchBar />
            {listings.map((listing) => (
                <HeroesListCard key={listing._id} listing={listing} />
            ))},


           



        </div>

    )
}

export default HeroesListingList