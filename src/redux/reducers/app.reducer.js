import CONTS from "../constants/app.constant";

const initial = {
  name: "aaa",
};
export default function reducer(state = initial, action) {
  switch (action.type) {
    case CONTS.SET_NAME:
      return { ...state, name: action.name };

    default:
      return state;
  }
}
