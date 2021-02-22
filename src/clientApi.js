import axios from 'axios';

export const checkUrl = (link) => {
  return axios.get(link)
    .then((res) => {
      res = true;
      return res;
    })
    .catch((err) => {
      err = false;
      return err;
    });
};
