import { configLol } from "services/config/config";
import { LolApi } from "twisted";
import { Queues } from "twisted/dist/constants";

const api = new LolApi();

async function getChallengerLeagueByQueue() {
  return await api.League.getChallengerLeaguesByQueue(
    Queues.RANKED_SOLO_5x5,
    configLol.region
  );
}

export const leagueByQueueService = {
  getChallengerLeagueByQueue,
};
