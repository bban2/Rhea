import { LolApi } from "twisted";

const api = new LolApi();
const getMaps = async () => {
  return await api.DataDragon.getMaps();
};

export const mapService = {
  getMaps,
};
