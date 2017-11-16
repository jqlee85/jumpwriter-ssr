/* Actions */

export function fetchImagePromptRequest(){
  return dispatch => { 
    // type: 'FETCH_IMAGE_PROMPT_REQUEST' 
    console.log('first action');
    setTimeout(() => {
      dispatch({
        type: 'FETCH_IMAGE_PROMPT_REQUEST',
        payload: 'heyooo'

      })
    },2000);
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

