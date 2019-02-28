const messageInitialState = {
  currentChatId: 1,
  currentMessage: '',
  robotMessage: 'This is robot answer',
  chats: [
    {
      id: 1,
      title: "First chat",
      img: "/static/build/img/1.jpg",
      messages: []
    },
    {
      id: 2,
      title: "Second chat",
      img: "/static/build/img/2.jpg",
      messages: []
    },
    {
      id: 3,
      title: "Third chat",
      img: "",
      messages: []
    },
    {
      id: 4,
      title: "Fourth chat",
      img: "",
      messages: []
    },
  ]
};

const initialState = {
  messageInitialState
};

export default initialState;