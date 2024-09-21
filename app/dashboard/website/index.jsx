import React, { useState } from "react";
import DefaultLayout from "../layout/DefaultLayout";

import { BannerSlider } from "./Banner/BannerSliderComponent";
import CardsHome from "./Cards";

const WebsiteMain = () => {
  return (
    <DefaultLayout>
      <BannerSlider />
      <CardsHome />
    </DefaultLayout>
  );
};

export default WebsiteMain;
