import img from './profilePic.jpeg';

const myName = 'Michael'

const initialMessage = {
  type: 'receive',
  name: myName,
  profile: img,
  text: 'Hello there!'
}

export {
  img,
  myName,
  initialMessage,
}