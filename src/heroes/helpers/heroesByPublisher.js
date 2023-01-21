import { heroes } from '../data/heroes'

export const heroesByPublisher = ( publisher='' ) => {
    const validPublisher = new Array('Marvel Comics', 'DC Comics');
    
    if(validPublisher.includes(publisher)) {
        return heroes.filter(h=>h.publisher===publisher);
    }

    throw new Error(`'${publisher}' is not a valid publisher.`)
}
