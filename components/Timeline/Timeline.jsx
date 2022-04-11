import { Tweets } from "../UIComponents/Tweet/Tweets";

export const Timeline = ({ fetchedTweets }) => {
  return (
    <>
      <Tweets fetchedTweets={fetchedTweets} />
    </>
  );
};
