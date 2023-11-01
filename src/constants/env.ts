const withHeroku = false;

export const API_URL = withHeroku
  ? "https://recipe-planner.herokuapp.com/api"
  : `http://localhost:5000/api`;
