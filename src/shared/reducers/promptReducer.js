import "isomorphic-fetch";

const promptState = {
  imagePrompt: false,
  textPrompt: false
}

// Reducer
const promptReducer = ( state = promptState, action) => {
  switch (action.type) {
    case 'FETCH_IMAGE_PROMPT_SUCCESS':
      
      console.log(action.payload);
      return { ...state, imagePrompt: action.payload };
    case 'FETCH_IMAGE_PROMPT_REQUEST':
      return { ...state, imagePrompt: 'requested' };
    case 'FETCH_IMAGE_PROMPT_ERROR':
      
      console.log(action.payload);
      return { ...state, imagePrompt: action.payload };
    default:
      return state;
  }
}

export default promptReducer;



// const fetchImagePrompt = () => (dispatch, getState) => {
//   console.log('fetchImagePrompt');
//   return fetch("https://api.jumpwriter.com/wp-json/jumpwriter-theme/v1/image-prompt/")
//     .then(response => response.json())
//     .then(news => dispatch(receivedImagePrompt(imagePrompt)))
//     .catch(err => dispatch(imagePromptError(err)));
// };
