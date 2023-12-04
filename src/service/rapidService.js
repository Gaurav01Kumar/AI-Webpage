import axios from "axios"
const getKnowlegeService = async (enpoint) => {
  const options = {
    method: "GET",
    url: `https://daily-knowledge.p.rapidapi.com/${enpoint}`,
    headers: {
      "X-RapidAPI-Key": "8750876a1emsh9fd03d92ec9c476p10c7b2jsn2e2337f5ed7a",
      "X-RapidAPI-Host": "daily-knowledge.p.rapidapi.com",
    },
  };

  try {
    const response = await axios.request(options);
    return response.data;
  } catch (error) {
    console.error(error);
    return null;
  }
};
export  { getKnowlegeService };
