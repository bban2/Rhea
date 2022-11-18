import { LolApi } from "twisted";
import { Champions } from "twisted/dist/constants";

const api = new LolApi();
const getChampions = async () => {
  return await api.DataDragon.getChampion();
};

const getChampion = async (champ: Champions | number) => {
  return await api.DataDragon.getChampion(champ);
};

export const championService = {
  getChampions,
  getChampion,
};
