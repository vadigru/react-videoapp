import axios from 'axios';

export const checkUrl = (link) => {
  return axios.get(link)
    .then((res) => {
      res = res.status;
      return res;
    })
    .catch((err) => {
      err = false;
      return err;
    });
};
