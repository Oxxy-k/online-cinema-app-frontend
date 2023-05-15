export const API_URL = `${process.env.REACT_APP_BACKEND_URL}/api`

export const getAuthUrl = (path: string) => `/auth${path}`;
export const getUsersUrl = (path: string) => `/users${path}`;
export const getGenresUrl = (path: string) => `/genres${path}`;
export const getMoviesUrl = (path: string) => `/movies${path}`;
export const getActorsUrl = (path: string) => `/actors${path}`;
export const getFilesUrl = (path: string) => `/files${path}`;
export const getRatingsUrl = (path: string) => `/ratings${path}`;
