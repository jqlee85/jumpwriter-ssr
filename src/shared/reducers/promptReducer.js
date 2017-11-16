

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

