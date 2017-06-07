import pictures from '../sampleData/pictures'

const defaultState = {
  pictures: pictures,
  liked: -1
}

const appReducer = (state = defaultState, action) => {
  switch (action.type) {
    case "LIKE_PICTURE":
      return {
        ...state,
        liked: action.pictureIndex
      }
    default:
      return state
  }
}

export default appReducer
