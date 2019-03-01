const messageInitialState = {
  currentChatId: 1,
  currentMessage: '',
  robotMessage: 'This is robot answer',
  chats: [
    {
      id: 1,
      title: "First chat",
      img: "/static/build/img/1.jpg",
      hasNewMessage: false,
      messages: []
    },
    {
      id: 2,
      title: "Second chat",
      img: "/static/build/img/2.jpg",
      hasNewMessage: false,
      messages: []
    },
    {
      id: 3,
      title: "Third chat",
      img: "",
      hasNewMessage: false,
      messages: []
    },
    {
      id: 4,
      title: "Fourth chat",
      img: "",
      hasNewMessage: false,
      messages: []
    },
  ]
};

const initialState = {
  messageInitialState
};

export default initialState;