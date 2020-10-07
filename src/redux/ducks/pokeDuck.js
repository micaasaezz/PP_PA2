import { getPokes, getAbility } from "../../utils/http";
import { loadingApp, loadedApp } from "./appDuck";

// action types
const FETCH_POKE_INFO = 'FETCH_POKE_INFO';


// initial state
const defaultStore = {
  pokeInfo: {}
};

// reducer
export default function reducer(state = defaultStore, action) {
  const { type, payload } = action;
  
  switch(type) {
    case FETCH_POKE_INFO:

      const { pokeInfo } = payload;
      return {
        ...state,
        pokeInfo
      }

    default:
      return {}
  }
}

// actions
function fetchPokeInfo({ id, name, abilities, sprites, base_experience }) {
  return {
    type: FETCH_POKE_INFO,
    payload: {
      pokeInfo: {
        id,
        name,
        abilities,
        imgUrl: [
          sprites.front_default,
          sprites.back_shiny,
          sprites.back_default,
          sprites.front_shiny
        ],
        range: base_experience
      }
    }
  }
}
export function getPokeById(id) {
  return async (dispatch, state) => {
    dispatch(loadingApp());
    try {
      const response = await getPokes("https://pokeapi.co/api/v2/pokemon/" + id);
      console.log('response', response)
      
      const abilities = response.abilities.map(async response => {
        const abilityInfo = await getAbility(response.ability.url);
        return abilityInfo;
        // const abilityEffect = abilityInfo.effect_entries.map(ability => {
        //   if (ability.language.name == "en") {
        //     return ability.effect;
        //   }
        // });
        // return { name: response.ability.name, effect: abilityEffect};
      });
      console.log("abilities", abilities)
      
      dispatch(loadedApp(false, false, null));
      dispatch(fetchPokeInfo(response));
    } catch (error) {
      console.log("error: ", error);
      dispatch(loadedApp(false, true, "No se pudo cargar la info del pokemon :("));
    }
  }
}
