
import { SHOW_RECIPES } from '../types';

export default (state=[], action) => {
    switch (action.type) {
        case SHOW_RECIPES:
            return action.recipes;
    
        default:
            return state;
    }
}