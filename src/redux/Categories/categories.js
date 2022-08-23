// Actions for categories
const CHECK_STATUS = 'bookstore/categories/CHECK_STATUS';

const initialState = [];
// Reducer
const categoriesReducer = (state = initialState, action) => {
  switch (action.type) {
    case CHECK_STATUS:
      return action.payload;
    default:
      return state;
  }
};

export default categoriesReducer;

// Action creators
export const checkStatus = () => ({
  type: CHECK_STATUS,
  payload: 'Under construction',
});
