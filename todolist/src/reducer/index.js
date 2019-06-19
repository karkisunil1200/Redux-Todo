const initialState = {
  todo: [{task: 'clean out the car'}, {task: 'Get job at google'}]
};

export const reducer = (state = initialState, action) => {
  switch (action.type) {
    case 'ADD_TODO':
      return {
        ...state,
        todo: state.todo
      };
    default:
      return state;
  }
};
