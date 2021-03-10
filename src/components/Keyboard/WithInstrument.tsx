import { FC, useEffect } from "react";
import { useSoundfont } from "../../adapters/Soundfont/useSoundfont";
import { useInstrument } from "../../state/Instrument/Context";
import { useAudioContext } from "../AudioContextProvider/useAudioContext";
import { Keyboard } from "./Keyboard";

export const KeyboardWithInstrument: FC = () => {
  const AudioContext = useAudioContext()!;
  const { instrument } = useInstrument();
  const { load, play, stop, loading, current } = useSoundfont({ AudioContext });

  useEffect(() => {
    if (!loading && instrument !== current) load(instrument);
  }, [load, loading, current, instrument]);

  return <Keyboard loading={loading} play={play} stop={stop} />;
};
