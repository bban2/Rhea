import { useRouter } from "next/router";
import React, { useEffect, useState } from "react";
import { championService } from "services/champion/champion.service";
import { Champions, getChampionNameCapital } from "twisted/dist/constants";
import { ChampionsDataDragonDetailsSolo } from "twisted/dist/models-dto/data-dragon";

const ChampionDetail = () => {
  const router = useRouter();
  console.log("routerrouterrouter", router.query);
  const { name } = router.query;
  const [champion, setChampion] = useState<ChampionsDataDragonDetailsSolo>();
  useEffect(() => {
    const getChampion = async () => {
      if (typeof name === "string") {
        const capName = getChampionNameCapital(name);
        const res = await championService.getChampion(Champions["AATROX"]);
        setChampion(res);
      }
    };
    getChampion();
  }, [name]);
  return (
    <div>
      <pre>{JSON.stringify(champion, null, 2)}</pre>
    </div>
  );
};

export default ChampionDetail;
