import axios from 'axios';

const searchResult = async (urlString) => {
  try {
    const response = await axios.request({
      method: 'GET',
      url: 'https://youtube-mp310.p.rapidapi.com/download/mp3',
      params: {
        url: urlString
      },
      headers: {
        'x-rapidapi-key': 'cb40bf4aaamsh8e7f906d22e078dp1207b0jsn55250563630a',
        'x-rapidapi-host': 'youtube-mp310.p.rapidapi.com'
      }
    });
    return response.data.downloadUrl;
  } catch (error) {
    console.error(error);
  }
};

export { searchResult };