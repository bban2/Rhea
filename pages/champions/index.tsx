import { useEffect, useState } from "react";
import { championService } from "services/champion/champion.service";
import {
  ChampionsDataDragon,
  ChampionsDataDragonDetails,
} from "twisted/dist/models-dto";
import style from "./style/champions.module.css";
import Image from "next/image";
import { ChampIcon } from "@components/icon/featureIcon";

interface ChampionsType {
  [key: string]: ChampionsDataDragonDetails;
}

const Champions = () => {
  const [championList, setChampionList] = useState<ChampionsType>({});

  const getChamps = async () => {
    const res: ChampionsDataDragon = await championService.getChampions();
    setChampionList(res.data);
  };
  useEffect(() => {
    getChamps();
  }, []);

  return (
    <div>
      <div className={`${style.wrapper} wrapper h-screen w-screen`}>
        <div className="container mx-auto py-16">
          <div className="grid grid-cols-12 gap-5">
            {Object.keys(championList).map((champKey: string) => (
              <div
                key={championList[champKey].key}
                className="xl:col-span-2 md:col-span-3 px-3 py-2 bg-black/80"
                style={{
                  height: "fit-content",
                }}
              >
                <div className="font-semibold text-lg">
                  {championList[champKey].name}
                </div>
                <div className="font-light text-sm">
                  {championList[champKey].title}
                </div>
                <Image
                  src={`https://ddragon.leagueoflegends.com/cdn/img/champion/loading/${championList[champKey].id}_0.jpg`}
                  alt={championList[champKey].id}
                  width="200"
                  height="100"
                />
                <div className="flex justify-center">
                  <ChampIcon />
                </div>
                <div className="flex gap-4">
                  {championList[champKey].tags.map((tag, idx) => (
                    <i
                      key={idx}
                      className="px-2 py-0.5 bg-slate-400 text-xs font-medium"
                    >
                      {tag}
                    </i>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Champions;
