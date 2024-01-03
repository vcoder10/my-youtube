import { useEffect } from "react";

const useGetAllPlaylists = () => {
  const getAllPlaylists = async () => {
    const data = await fetch();
    const json = data.json();
    //console.log(json);
  };
  useEffect(() => {
    getAllPlaylists();
  }, []);
};

export default useGetAllPlaylists;
