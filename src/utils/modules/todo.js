export const type = Object.freeze({
  ADD: 'add',
  DELETE: 'delete',
  CHANGE: 'change',
});

export const add = value => {
  return {
    type: type.ADD,
    payload: value,
  };
};

export const deleteItem = value => {
  return {
    type: type.DELETE,
    payload: value,
  };
};

export const change = value => {
  return {
    type: type.CHANGE,
    payload: value,
  };
};

let initState = [];

const todo = (state = initState, action) => {
  console.log(state, action);
  switch (action.type) {
    case type.ADD:
      return [...state, { ...action.payload }];
    case type.DELETE:
      return state;
    case type.CHANGE:
      return state;
    default:
      return state;
  }
};

export default todo;
