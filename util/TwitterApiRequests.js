import axios from "axios";

export const getTweetsWithKeyWord = (keyWord) => {
  try {
    const res = axios({
      method: "GET",
      url: `/api/getTweets/?keyWord=${keyWord}`,
    });

    console.log("RESPONSE HITTING SEVERLESS FUNC: ",res)

    return res
  } catch (error) {
    console.log(error);
  }
};
