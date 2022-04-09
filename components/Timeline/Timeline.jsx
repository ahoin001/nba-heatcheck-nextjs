import { useEffect } from "react";
import Link from "next/link";
import axios from "axios";

export const Timeline = () => {
  const fetchTwitter = () => {
    axios
      .get("/api/twitter")
      .then((data) => console.log("@@@@@@@@@@@@@@THE DATA: ", data));
  };

  useEffect(() => {
    fetchTwitter();
  }, []);

  return (
  <div>
      Im here
  </div>
  );
};
