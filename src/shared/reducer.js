import "isomorphic-fetch";

// Actions
const FETCH_IMAGE_PROMPT_REQUEST = "FETCH_IMAGE_PROMPT_REQUEST";
const FETCH_IMAGE_PROMPT_SUCCESS = "FETCH_IMAGE_PROMPT_SUCCESS";
const FETCH_IMAGE_PROMPT_ERROR = "FETCH_IMAGE_PROMPT_ERROR";

// Reducer
export default function reducer(state = {}, action) {
  switch (action.type) {
    case FETCH_IMAGE_PROMPT_SUCCESS:
      
      console.log(action.payload);
      return { ...state, imagePrompt: action.payload };
    case FETCH_IMAGE_PROMPT_REQUEST:
      
      fetchImagePrompt();
      return { ...state, imagePrompt: 'requested' };
    case FETCH_IMAGE_PROMPT_ERROR:
      
      console.log(action.payload);
      return { ...state, imagePrompt: action.payload };
    default:
      return state;
  }
}

// Action Creators
// const requestImagePrompt = () => ({ type: FETCH_IMAGE_PROMPT_REQUEST });
const receivedImagePrompt = (imagePrompt) => ({ type: FETCH_IMAGE_PROMPT_SUCCESS, payload: imagePrompt });
const imagePromptError = (err) => ({ type: FETCH_IMAGE_PROMPT_ERROR, payload: err });

const fetchImagePrompt = () => (dispatch, getState) => {
  console.log('fetchImagePrompt');
  dispatch(requestImagePrompt());
  return fetch("https://api.jumpwriter.com/wp-json/jumpwriter-theme/v1/image-prompt/")
    .then(response => response.json())
    .then(news => dispatch(receivedImagePrompt(imagePrompt)))
    .catch(err => dispatch(imagePromptError(err)));
};
