import axios from 'axios';
const base_url="https://youtube138.p.rapidapi.com"
const options = {
  params: {
    hl: 'en',
    gl: 'US'
  },
  headers: {
    'X-RapidAPI-Key': "a672f738d4msha5f8a3def352d95p13608ejsne4c067caf3cd",
    'X-RapidAPI-Host': 'youtube138.p.rapidapi.com'
  }
};

export const fetchDataFromApi = async (url) => {
     const { data } = await axios.get(`${base_url}/${url}`, options);
    const temp=data
    return temp;
};