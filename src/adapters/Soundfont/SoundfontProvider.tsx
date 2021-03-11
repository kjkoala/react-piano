import { ReactElement, FC, useEffect } from "react";
import { InstrumentName } from "soundfont-player";
import { MidiValue } from "../../domain/note";
import { useSoundfont } from "./useSoundfont";

interface ProviderProps {
  instrument?: InstrumentName;
  AudioContext: AudioContextType;
  render(props: ProvideProps): ReactElement;
}

interface ProvideProps {
  loading: boolean;
  play(note: MidiValue): Promise<void>;
  stop(note: MidiValue): Promise<void>;
}

export const SoundfontProvider: FC<ProviderProps> = ({
  AudioContext,
  instrument,
  render,
}) => {
  const { play, stop, loading, current, load } = useSoundfont({ AudioContext });
  useEffect(() => {
    if (!loading && instrument !== current) load(instrument);
  }, [play, stop, loading, instrument, current, load]);

  return render({
    loading,
    play,
    stop,
  });
};
