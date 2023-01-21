import { heroesByPublisher } from "../helpers";

export const HeroList = ({ publisher = "" }) => {
   /**
    * 
    * No utilizamos useState para guardar las listas de heroes
    * porque este estado no va a cambiar y siempre sera el mismo.
    * 
    */
     const heroesList = heroesByPublisher(publisher);

     return <ul>
        {heroesList.map( h => <li key={h.id}>{ h.superhero }</li>)}
     </ul>
};
