import { useEffect, useState } from "react";
import { gameTypeService } from "services/gameplay/gameType.service";
import { GameTypesDataDragonDTO } from "twisted/dist/models-dto/data-dragon/game-types.datadragon.dto";

const GameType = () => {
  const [gameTypeList, setGameTypeList] = useState<GameTypesDataDragonDTO[]>(
    []
  );

  const getGameType = async () => {
    const res = await gameTypeService.getGameTypes();
    setGameTypeList(res);
  };
  useEffect(() => {
    getGameType();
  }, []);

  return (
    <div>
      <div className={`wrapper h-screen w-screen`}>
        <div className="container mx-auto py-16">
          <div className="grid grid-cols-12 gap-5">
            <pre>{JSON.stringify(gameTypeList, null, 2)}</pre>
          </div>
        </div>
      </div>
    </div>
  );
};

export default GameType;
