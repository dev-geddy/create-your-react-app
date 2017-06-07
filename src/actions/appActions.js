const likePicture = (pictureIndex) => {
  console.log(`LIKE ${pictureIndex}!`)
  return {
    type: 'LIKE_PICTURE',
    pictureIndex
  }
}

export {
  likePicture
}
