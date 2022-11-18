import Image from "next/image";
import React from "react";

const switchSize = (size?: string) => {
  if (size) {
    switch (size) {
      case "large":
        return "6rem";
      case "medium":
        return "3rem";
      case "small":
        return "1.5rem";
      default:
        return "3rem";
    }
  } else {
    return;
  }
};

const ChampIcon = ({ size }: { size?: string }) => {
  return (
    <div
      className="flex items-center justify-center rounded-full w-11 h-11"
      style={{
        backgroundImage:
          "-webkit-linear-gradient(top, #3e3310, #806734, #c6b98b, #806734, #3e3310",
      }}
    >
      <div className="w-10 h-10 flex items-center justify-center bg-black p-3 rounded-full">
        <Image
          src="https://universe.leagueoflegends.com/esimages/content_type_icon_champion__3nwJQ.png"
          alt="champion"
          width="20"
          height="20"
        />
      </div>
    </div>
  );
};

const RegionIcon = ({ size }: { size?: string }) => {
  return (
    <div
      className="champIcon_container position-relative flex items-center justify-center"
      style={{
        width: `${size ? switchSize(size) : "3rem"}`,
        height: `${size ? switchSize(size) : "3rem"}`,
      }}
    >
      <div className="avatar position-relative d-flex flex items-center justify-center">
        <Image
          src="https://universe.leagueoflegends.com/esimages/content_type_icon_faction__14mjH.png"
          alt="region"
          width="100"
          height="176"
        />
      </div>
    </div>
  );
};
const MapIcon = ({ size }: { size?: string }) => {
  return (
    <div
      className="champIcon_container position-relative flex items-center justify-center"
      style={{
        width: `${size ? switchSize(size) : "3rem"}`,
        height: `${size ? switchSize(size) : "3rem"}`,
      }}
    >
      <div className="avatar position-relative d-flex justify-content-center align-items-center">
        <Image
          src="https://universe.leagueoflegends.com/images/freljord_crest_icon.png"
          alt="mapIcon"
          width="100"
          height="176"
        />
      </div>
    </div>
  );
};

export { ChampIcon, RegionIcon, MapIcon };
