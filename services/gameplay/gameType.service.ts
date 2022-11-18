import { LolApi } from "twisted";

const api = new LolApi();
const getGameTypes = async () => {
  return await api.DataDragon.getGameTypes();
};

export const gameTypeService = {
  getGameTypes,
};
