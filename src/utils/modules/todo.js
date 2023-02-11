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
  const item = action.payload;
  switch (action.type) {
    case type.ADD:
      return [...state, { ...item }];
    case type.DELETE:
      return state.filter(stateItem => stateItem.id !== item.id);
    case type.CHANGE:
      return state.map(stateItem =>
        stateItem.id === item.id
          ? { ...stateItem, isDone: !stateItem.isDone }
          : stateItem
      );
    default:
      return state;
    // throw new Error(`에러발생 state:${state} payload:${items}`);
  }
};

export default todo;
