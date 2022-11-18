import React, { useEffect, useState } from "react";
import { leagueByQueueService } from "services/challenger/leaguageByQueue.service";
import { summonerService } from "services/summoner/summoner.service";
import {
  ApiResponseDTO,
  LeagueListDTO,
  SummonerV4DTO,
} from "twisted/dist/models-dto";

const SummonerDetail = () => {
  const [summonerDetail, setSummonerDetail] = useState<any>({});

  const getChamps = async () => {
    const res: ApiResponseDTO<SummonerV4DTO> =
      await summonerService.getSummonerByName();
    setSummonerDetail(res);
  };
  useEffect(() => {
    getChamps();
  }, []);
  return (
    <div>
      <form>
        <input placeholder="summoner name" />
        <input type="select" />
      </form>
      <pre>{JSON.stringify(summonerDetail, null, 2)}</pre>
    </div>
  );
};

export default SummonerDetail;
