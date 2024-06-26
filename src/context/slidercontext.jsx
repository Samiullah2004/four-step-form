import { createContext, useState } from "react";


export const SliderContext = createContext(null)

export const SliderProvider = (props) => {
    const [step, setStep] = useState(1);
 
  const prevStep = (prevStep) => {
    if(step <= 1){
        setStep(1)
    }else{
        setStep(prevStep - 1)
    }
  };
  const nextStep = (prevStep) => {
    setStep(step + 1)
  };

    return (
        <SliderContext.Provider value={{step,setStep,nextStep,prevStep}}>
            {props.children}
        </SliderContext.Provider>
    )
}