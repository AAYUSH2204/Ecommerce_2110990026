const initialState = {
  items: [],
  item: {},
};

export default function (state = initialState, action) {
  switch (action.type) {
    case "FETCH_PRODUCTS":
      return { ...state, items: action.payload };
    case "FETCH_PRODUCT_DETAIL":
      return { ...state, item: action.payload };
    default:
      return state;
  }
}
