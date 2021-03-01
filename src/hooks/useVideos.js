import { useState } from "react";
import youtube from "../api/youtube";

const useVideo = (defaultSearchTerm = "") => {
  const [videos, setVideos] = useState([]);
/*Delete a comment from useEffect if you're to use a default search parameter.*/
  //useEffect(() => search(defaultSearchTerm), [defaultSearchTerm]);

  const search = async (term) => {
    const response = await youtube.get("/search", {
      params: {
        q: term,
      },
    });
    setVideos(response.data.items);
  };
  return [videos, search];
};

export default useVideo;