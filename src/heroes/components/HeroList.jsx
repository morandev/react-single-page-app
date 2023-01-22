import { HeroCard } from "./";
import { heroesByPublisher } from "../helpers";

export const HeroList = ({ publisher = "" }) => {
   /**
    * 
    * No utilizamos useState para guardar las listas de heroes
    * porque este estado no va a cambiar y siempre sera el mismo.
    * 
    */
     const heroesList = heroesByPublisher(publisher);

     return <div className="row rows-cols-1 row-cols-md-2 row-cols-lg-3 g-3">
        {heroesList.map( h => <HeroCard key={h.id} {...h}/>)}
     </div>;
};
