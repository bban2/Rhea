import { useEffect, useState } from "react";
import { gameModeService } from "services/gameplay/gameMode.service";
import { GameModesDataDragonDTO } from "twisted/dist/models-dto";

const GameMode = () => {
  const [gameModeList, setGameModeList] = useState<GameModesDataDragonDTO[]>(
    []
  );

  const getGameMode = async () => {
    const res = await gameModeService.getGameModes();
    setGameModeList(res);
  };
  useEffect(() => {
    getGameMode();
  }, []);

  return (
    <div>
      <div className={`wrapper h-screen w-screen`}>
        <div className="container mx-auto py-16">
          <div className="grid grid-cols-12 gap-5">
            <pre>{JSON.stringify(gameModeList, null, 2)}</pre>
          </div>
        </div>
      </div>
    </div>
  );
};

export default GameMode;
