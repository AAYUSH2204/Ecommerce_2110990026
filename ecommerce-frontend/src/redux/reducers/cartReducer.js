const initialState = {
  items: [],
};

export default function (state = initialState, action) {
  switch (action.type) {
    case "FETCH_CART":
      return { ...state, items: action.payload.items };
    case "ADD_TO_CART":
    case "REMOVE_FROM_CART":
      return { ...state, items: action.payload.items };
    default:
      return state;
  }
}
