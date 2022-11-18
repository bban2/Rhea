import { LolApi } from "twisted";

const api = new LolApi();
const getGameModes = async () => {
  return await api.DataDragon.getGameModes();
};

export const gameModeService = {
  getGameModes,
};
