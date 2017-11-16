/* Actions */

export function fetchImagePromptRequest(){
  return { type: 'FETCH_IMAGE_PROMPT_REQUEST' }
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

