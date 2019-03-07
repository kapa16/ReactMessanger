const messageInitialState = {
  currentChatId: 1,
  currentMessage: '',
  robotMessage: 'This is robot answer',
  openMenu: false,
  openAddChatForm: false,
  newChatTitle: '',
  isLoading: true,
  isError: false,
  chats: {}
};

const profileInitialState = {
  name: 'P',
  lastName: 'K',
  isLoading: true,
  isError: false,
};

const initialState = {
  messageInitialState,
  profileInitialState
};

export default initialState;