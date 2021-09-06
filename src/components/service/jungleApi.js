import axios from 'axios';

const post = async (data) =>
  await axios({
    method: 'post',
    url: 'https://api.jungledevs.com/api/v1/challenge-newsletter/',
    data,
  }).catch((error) => {
    const { response, response: { data, status } } = error;
    if (response) {
      console.error(data);
      console.error(status);
    }
  });

export default post;
