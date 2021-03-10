import { FC, ReactEventHandler } from "react";
import clsx from "clsx";
import { NoteType } from "../../domain/note";
import "./style.css";
import { usePressObserver } from "../PressObserver/usePressObserver";

interface KeyProps {
  type: NoteType;
  label: string;
  disabled?: boolean;
  onUp: ReactEventHandler<HTMLButtonElement>;
  onDown: ReactEventHandler<HTMLButtonElement>;
}

export const Key: FC<KeyProps> = ({ type, label, ...rest }) => {
  const pressed = usePressObserver({
    watchKey: label,
    onStartPress: rest.onDown,
    onFinishPress: rest.onUp,
  });

  return (
    <button
      className={clsx(`key key--${type}`, pressed && 'is-pressed')}
      type="button"
      onMouseDown={rest.onDown}
      onMouseUp={rest.onUp}
      {...rest}
    >
      {label}
    </button>
  );
};
