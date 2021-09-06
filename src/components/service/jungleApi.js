import axios from 'axios';

const post = async (data, handling, setInvalid) => {
  try {
    await axios({
      method: 'post',
      url: 'https://api.jungledevs.com/api/v1/challenge-newsletter/',
      data,
    });
    setInvalid(true);
  } catch (error) {
    const {
      response,
      response: { data },
    } = error;
    if (response) {
      handling(data);
    }
    setInvalid(false);
  }
};

export default post;
