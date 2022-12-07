
const initialState = [];

const GET_ALL_MESSAGES = 'messages/GET_ALL_MESSAGES';

export const getData = (payload) => ({
  type: GET_ALL_MESSAGES,
  payload,
});

export const getAllMessages = () => (dispatch) => {
  fetch('http://localhost:3000/api/v1/messages').then((response) => response.json()).then((data) => {
    dispatch(getData(data));
  });
};

export default function reducer(state = initialState, action) {
  switch (action.type) {
    case GET_ALL_MESSAGES:
      return action.payload;

    default:
      return state;
  }
}
