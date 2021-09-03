import * as types from "../const/actionType";
const initialState = {
  catalogs: [],
  catalog: {},
  loading: true,
};

const catalogsReducers = (state = initialState, action) => {
  switch (action.type) {
    case types.GET_CATALOGS:
      return {
        ...state,
        catalogs: action.payload,
        loading: false,
      };
    case types.DELETE_CATALOG:
    case types.ADD_CATALOG:
    case types.UPDATE_CATALOG:
      return {
        ...state,
        loading: false,
      };
    case types.GET_SINGLE_CATALOG:
      return {
        ...state,
        catalog: action.payload,
        loading: false,
      };
    default:
      return state;
  }
};

export default catalogsReducers;