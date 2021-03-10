import { FC } from "react";
import { InstrumentContextProvider } from "../../state/Instrument/Provider";
import { InstrumentSelector } from "../InstrumentSelector/InstrumentSelector";
import { KeyboardWithInstrument } from "../Keyboard/WithInstrument";

export const Playground: FC = () => {
  return (
    <InstrumentContextProvider>
      <div className="playground">
        <KeyboardWithInstrument />
        <InstrumentSelector />
      </div>
    </InstrumentContextProvider>
  );
};
