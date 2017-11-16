import "isomorphic-fetch";
// import fetchImagePrompt from '../reducers/promptReducers';
/* Actions */

export function fetchImagePromptRequest(){
  return {
    type: 'FETCH_IMAGE_PROMPT_REQUEST'
  }
}

export function fetchImagePromptSuccess(imagePrompt){
  return { 
    type: 'FETCH_IMAGE_PROMPT_SUCCESS', 
    payload: imagePrompt 
  }
}

export function fetchImagePromptError(err){
  return { 
    type: 'FETCH_IMAGE_PROMPT_ERROR',
    payload: err 
  }
}

export const fetchImagePrompt = () => (dispatch, getState) => {
  dispatch(fetchImagePromptRequest());
  return fetch("https://api.jumpwriter.com/wp-json/jumpwriter-theme/v1/image-prompt/")
    .then(response => response.json())
    .then(imagePrompt => dispatch(fetchImagePromptSuccess(imagePrompt)))
    .catch(err => dispatch(fetchImagePromptError(err)));
};
