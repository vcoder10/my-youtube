import React from "react";
import ButtonLists from "../components/ButtonLists";

import PopularVideo from "../components/PopularVideo";

const MainContainer = () => {
  return (
    <div className="mt-[5rem]">
      <ButtonLists />
      <PopularVideo />
    </div>
  );
};

export default MainContainer;
