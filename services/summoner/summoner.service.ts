import { configLol } from "services/config/config";
import { LolApi } from "twisted";
import { Regions } from "twisted/dist/constants";

const api = new LolApi({
  debug: {
    logRatelimits: true,
    logTime: true,
    logUrls: true,
  },
});

const getSummonerByName = async (name?: string, region?: Regions) => {
  return await api.Summoner.getByName(
    name || configLol.summonerName,
    region || configLol.region
  );
};

export const summonerService = {
  getSummonerByName,
};
