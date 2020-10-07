import {
  getPokes
} from "../../utils/http";

// action types
const APP_LOADING = 'APP_LOADING';
const APP_LOADED = 'APP_LOADED';
const FETCH_POKES = 'FETCH_POKES';

// initial state
const defaultState = {
  appName: 'modelo parcial',
  loading: false,
  error: false,
  errorMsg: '',
  pokemons: [],
  previous: '',
  count: 0,
  next: ''
};

// reducer
export default function reducer(state = defaultState, action) {
  const {
    type,
    payload
  } = action;

  switch (type) {
    case APP_LOADING:
      return {
        ...state,
        loading: true
      }

      case APP_LOADED:
        const {
          loading, error, errorMsg
        } = payload;
        return {
          ...state,
          loading,
          error,
          errorMsg
        }

        case FETCH_POKES:
          const {
            count, next, previous, pokes
          } = payload;
          return {
            ...state,
            pokemons: pokes,
              count,
              previous,
              next
          }

          default:
            return {}
  }
}

// actions
export function loadingApp() {
  return {
    type: APP_LOADING
  }
}
export function loadedApp(loading, error, errorMsg) {
  return {
    type: APP_LOADED,
    payload: {
      loading,
      error,
      errorMsg
    }
  }
}

function fetchPokes({ count, next, previous, results }) {
  return {
    type: FETCH_POKES,
    payload: {
      pokes: results,
      count,
      next,
      previous
    }
  }
}
export function getPokemons(url, cantidad) {
  return async (dispatch, state) => {
    dispatch(loadingApp());
    try {
      const response = await getPokes(url);
      switch (cantidad) {
        case 10:
          response.results = response.results.slice(0, 10);
          break;

        case 20:
          break;

        case 30:
          const response2 = await getPokes(response.next);
          const agregado = response2.results.slice(0, 10);
          response.results = response.results.concat(agregado);
          break;

        default:
          break;
      }
      dispatch(fetchPokes(response));
      dispatch(loadedApp(false, false, null));
    } catch (error) {
      console.log("error: ", error);
      dispatch(loadedApp(false, true, "No se pudieron cargar los pokemones :("));
    }
  }
}
