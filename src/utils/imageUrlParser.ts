const imageUrlParser = (id: string, option: string = '') => {
  const baseURL = process.env.REACT_APP_IMAGE_BASE_URL;
  return `${baseURL}${option ? option + '/' : ''}${id}`;
};

export default imageUrlParser;
