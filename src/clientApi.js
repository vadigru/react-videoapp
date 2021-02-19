import axios from 'axios';

// export const checkUrl = (link, toggleActiveLink, togglePopup) => {
//   axios.get(link)
//   .then(() => {
//     toggleActiveLink(link);
//   })
//   .catch(() => {
//     togglePopup(true);
//   });
// };

export const checkUrl = (link) => {
  // let result = ``;
  return axios.get(link)
    .then((res) => {
      console.log(res);
      res = link;
      return res;
    })
    .catch((err) => {
      err = false;
      return err;
    });
};
