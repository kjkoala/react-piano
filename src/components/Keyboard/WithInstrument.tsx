import { FC } from "react";
import { SoundfontProvider } from "../../adapters/Soundfont/SoundfontProvider";
import { useInstrument } from "../../state/Instrument/Context";
import { useAudioContext } from "../AudioContextProvider/useAudioContext";
import { Keyboard } from "./Keyboard";

export const KeyboardWithInstrument: FC = () => {
  const AudioContext = useAudioContext()!;
  const { instrument } = useInstrument();
  // const { load, play, stop, loading, current } = useSoundfont({ AudioContext });

  // useEffect(() => {
  //   if (!loading && instrument !== current) load(instrument);
  // }, [load, loading, current, instrument]);

  // return <Keyboard loading={loading} play={play} stop={stop} />;
  return (
    <SoundfontProvider
      AudioContext={AudioContext}
      instrument={instrument}
      render={(props) => <Keyboard {...props} />}
    />
  );
};
