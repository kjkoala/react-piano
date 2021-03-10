import { FC } from 'react'
import { NoAudioMessage } from '../NoAudioMessage/NoAudioMessage'
import { useAudioContext } from '../AudioContextProvider/useAudioContext'
import { Playground } from '../Playground/Playground'

export const Main: FC = () => {
  const AudioContext = useAudioContext()

  return !!AudioContext ? <Playground /> : <NoAudioMessage />
}
