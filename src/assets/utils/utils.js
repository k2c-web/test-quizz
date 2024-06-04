export const getGameScore = () => {
  let params = new URL(document.location).searchParams;
  return {
    score: parseInt(params.get("s")),
    code: params.get("c"),
  };
};
