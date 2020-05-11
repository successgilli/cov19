const initialState = {
  armpit: 'fff',
};

export default (state = initialState, action = {}) => {
  switch (action.type) {
    case 'armpit':
      return state;
    default:
      return state;
  }
};
