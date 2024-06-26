import React from 'react';

const BudgetStep = ({ setBudget, nextStep }) => {
  const handleBudgetSelect = (budget) => {
    setBudget(budget);
    nextStep();
  };

  // if(){}

  return (
    <div className="md:flex justify-center flex-col h-[90vh] md:h-auto items-center">
      <h2 className="text-xl font-semibold my-3 md:my-8 text-center ">Step #1</h2>
      <h3 className="text-xl md:text-[28px] mb-5 px-4 md:px-10 md:w-[480px] md:h-[78px] text-center font-semibold leading-[37px] md:leading-[39px] tracking-normal">What is your monthly digital marketing budget?</h3>
      <div className="space-y-2 px-4 md:px-0 w-full md:w-[480px]">
        {['< $1,000/mo', '$1,000 - $2,000', '$2,000 - $5,000', '$5,000 - $10,000', '$10,000 - $25,000', '$25,000 +'].map(budget => (
          <button
            key={budget}
            className="block w-full py-4 border rounded-md bg-white hover:bg-gray-200 font-medium text-[sm] text-[#6B7280] lato"
            onClick={() => handleBudgetSelect(budget)}
          >
            {budget}
          </button>
        ))}
      </div>
      
    </div>
  );
};

export default BudgetStep;
