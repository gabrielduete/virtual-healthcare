/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable @typescript-eslint/no-empty-function */
import {
  createContext,
  useState,
  ReactNode,
  Dispatch,
  SetStateAction,
} from 'react'

type DepoimentsParams = {
  step: number
  setStep: Dispatch<SetStateAction<number>>
  prevStep: () => void
  nextStep: () => void
  goToStep: (index: number) => void
}

export const DepoimentsContext = createContext<DepoimentsParams>({
  step: 0,
  setStep: () => {},
  prevStep: () => {},
  nextStep: () => {},
  goToStep: (index: number) => {},
})

export const DepoimentsStorage = ({ children }: { children: ReactNode }) => {
  const [step, setStep] = useState(0)

  const prevStep = () => {
    setStep(step - 1)
  }

  const nextStep = () => {
    setStep(step + 1)
  }

  const goToStep = (index: number) => {
    setStep(index)
  }

  console.log(step)

  return (
    <DepoimentsContext.Provider
      value={{ setStep, step, prevStep, nextStep, goToStep }}
    >
      {children}
    </DepoimentsContext.Provider>
  )
}
