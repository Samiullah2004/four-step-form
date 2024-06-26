import React from 'react';

const ConfirmationStep = () => {
  return (
    <div className="flex justify-center items-center h-[90vh] md:h-screen ">
      <div className="px-5 md:w-[520px] h-[362px]">
      <h2 className="leading-[39px] my-4 text-center font-semibold text-xl md:text-[28px]">Your Request for a Proposal Has Been Submitted!</h2>
      <p className="text-center mb-4 lato font-normal text-[#6B7280] leading-6">
        Lorem ipsum dolor sit amet consectetur. Tristique ultricies dis gravida parturient urna tristique congue. Curabitur volutpat nulla convallis eget pellentesque.
      </p>
      <div className='text-center'>
         <button className='bg-[#019F44] w-[160px] h-[48px] text-[15px] text-white rounded'  >Return Request</button>
         </div>
      </div>
    </div>
  );
};

export default ConfirmationStep;
