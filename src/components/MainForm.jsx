import React, { useContext, useState } from 'react';
import BudgetStep from './BudgetStep ';
import DetailsStep from './DetailsStep';
import ConfirmationStep from './ConfirmationStep';
import { FaArrowLeftLong } from "react-icons/fa6";
import { GoArrowLeft } from "react-icons/go";
import { IoMdClose } from "react-icons/io";
import {SliderContext} from '../context/slidercontext'
const MainForm = () => {
  const slider = useContext(SliderContext)
 
  const [budget, setBudget] = useState('');
  const [details, setDetails] = useState({});

  let [close,setClose] = useState(false)
  // const nextStep = () => setStep((prevStep) => prevStep + 1);

  return (
    <div className="min-h-screen py-1 bg-gray-100">
          <div className='flex justify-between items-center px-3 md:px-10 py-4'>
            <div className='flex items-center gap-2 cursor-pointer' onClick={() => slider.prevStep(slider.step)}>
              {slider.step <=2 ? <GoArrowLeft />: ""}
              <span className='text-[14px] font-semibold lato cursor-pointer'>{slider.step <=2 ? "Go Back" : ''}</span>
            </div>
            <div className='flex items-center gap-2 cursor-pointer' onClick={() => setClose(true)}>
              <span className='text-[14px] font-semibold lato'>{close ? "" : 'Exit'}</span>
              {close ? "" :<IoMdClose />}
            </div>
          </div>
          <div className={`h-[6px] md:px-2 bg-green-500 ${close ? "hidden" : 'block'}`} style={{ width: `${(slider.step / 3) * 100}%` }}></div>
      <div className="">
        <div className="mb-4">
        </div>
        {slider.step === 1 && <BudgetStep setBudget={setBudget} nextStep={slider.nextStep} />}
        {slider.step === 2 && <DetailsStep setDetails={setDetails} nextStep={slider.nextStep} prevStep={slider.prevStep} />}
        {slider.step === 3 && <ConfirmationStep nextStep={slider.nextStep} />}
      </div>
    </div>
  );
};

export default MainForm;
