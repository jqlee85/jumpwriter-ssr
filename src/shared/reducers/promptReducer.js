// Prompt Reducer

const promptState = {
  imagePrompt: false,
  textPrompt: false,
  promptRequested: false
}

const promptReducer = ( state = promptState, action) => {
  switch (action.type) {
    case 'FETCH_IMAGE_PROMPT_SUCCESS':
      return { ...state, imagePrompt: action.payload };
    case 'FETCH_IMAGE_PROMPT_REQUEST':
      return { ...state, promptRequested: true, imagePrompt: 'requested' };
    case 'FETCH_IMAGE_PROMPT_ERROR':
      return { ...state, imagePrompt: action.payload };
    case 'FETCH_TEXT_PROMPT_SUCCESS':
      return { ...state, textPrompt: action.payload };
    case 'FETCH_TEXT_PROMPT_REQUEST':
      return { ...state, promptRequested: true, textPrompt: 'requested' };
    case 'FETCH_TEXT_PROMPT_ERROR':
      return { ...state, textPrompt: action.payload };
    default:
      return state;
  }
}

export default promptReducer;

