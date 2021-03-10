import { useState, useEffect } from "react";
import { Key as KeyLabel } from "../../domain/keyboard"

type isPressed = boolean;
type EventCode = string;

interface Settings {
  watchKey: KeyLabel;
  onStartPress: Function;
  onFinishPress: Function;
}

function fromEventCode(code: EventCode): KeyLabel {
  const prefixRegex = /Key|Digit/gi
  return code.replace(prefixRegex, "")
}

function equal(watchedKey: KeyLabel, eventCode: EventCode): boolean {
  return (
    fromEventCode(eventCode).toUpperCase() ===
    watchedKey.toUpperCase()
  )
}

export function usePressObserver({
  watchKey,
  onFinishPress,
  onStartPress,
}: Settings): isPressed {
  const [pressed, setPressed] = useState<isPressed>(false);

  useEffect(() => {
    function handlePressStart({ code }: KeyboardEvent) {
      if (pressed || !equal(watchKey, code)) return;
      setPressed(true);
      onStartPress();
    }

    function handlePressFinish({ code }: KeyboardEvent) {
      if (!pressed || !equal(watchKey, code)) return;

      setPressed(false);
      onFinishPress();
    }

    document.addEventListener("keydown", handlePressStart);
    document.addEventListener("keyup", handlePressFinish);
    return () => {
      document.removeEventListener("keydown", handlePressStart);
      document.removeEventListener("keyup", handlePressFinish);
    };
  }, [watchKey, pressed, setPressed, onStartPress, onFinishPress]);

  return pressed
}