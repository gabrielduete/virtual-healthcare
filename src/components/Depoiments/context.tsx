/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable @typescript-eslint/no-empty-function */
import {
  createContext,
  useState,
  ReactNode,
  Dispatch,
  SetStateAction,
} from 'react'

import { DEPOIMENTS } from './Depoiments.data'

type DepoimentsParams = {
  step: number
  setStep: Dispatch<SetStateAction<number>>
  prevStep: () => void
  nextStep: () => void
  goToStep: (index: number) => void
  firstStep: boolean
  lastStep: boolean
}

export const DepoimentsContext = createContext<DepoimentsParams>({
  step: 0,
  setStep: () => {},
  prevStep: () => {},
  nextStep: () => {},
  goToStep: (index: number) => {},
  firstStep: true,
  lastStep: false,
})

export const DepoimentsStorage = ({ children }: { children: ReactNode }) => {
  const [step, setStep] = useState(0)

  const firstStep = step === 0
  const lastStep = step + 1 > DEPOIMENTS.length - 1

  const prevStep = () => {
    !firstStep && setStep(step - 1)
  }

  const nextStep = () => {
    !lastStep && setStep(step + 1)
  }

  const goToStep = (index: number) => {
    setStep(index)
  }

  return (
    <DepoimentsContext.Provider
      value={{
        setStep,
        step,
        prevStep,
        nextStep,
        goToStep,
        firstStep,
        lastStep,
      }}
    >
      {children}
    </DepoimentsContext.Provider>
  )
}
