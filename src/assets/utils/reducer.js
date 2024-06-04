export function reducer(state, action) {
  switch (action.type) {
    case "incrementStep":
      return { ...state, step: state.step + 1 };
    case "incrementScore":
      return {
        ...state,
        score: state.score + action.payload,
        correctCount: action.payload
          ? state.correctCount + 1
          : state.correctCount,
        step: state.step + 1,
      };
    case "updateUser":
      return {
        ...state,
        user: { ...state.user, ...action.payload },
        step: state.step + 1,
      };

    default:
      throw new Error();
  }
}
