import React, { useState } from 'react';
import { SiGnuprivacyguard } from "react-icons/si";
const DetailsStep = ({ setDetails, nextStep,prevStep }) => {
  const [formData, setFormData] = useState({ name: '', email: '', phone: '', message: '' });
  const [errors, setErrors] = useState({});

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };
 

  const handleSubmit = () => {
    const newErrors = {};
    if (!formData.name) newErrors.name = 'Name is required';
    if (!formData.email) newErrors.email = 'Email is required';
    if (!formData.phone) newErrors.phone = 'Phone number is required';

    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors);
    } else {
      setDetails(formData);
      nextStep();
    }
  };
 

  return (
    <div className="flex flex-col items-center">
      <h2 className="text-xl font-semibold   my-4">Step #2</h2>
      <h3 className="text-[24px] mb-4 font-semibold ">Details</h3>
      <p className="mb-4 px-4 md:w-[520px] text-center lato text-[16px] leading-6 font-normal text-[#6B7280]">We’re thrilled at the opportunity to help you grow your business online. Please let us know the best way to reach you.</p>
      
      <div className="space-y-4 md:w-[520px] px-4">
         <div className='mt-7'>
          <div className='w-full mb-2'>
            <h5 className=' text-[#051011] lato font-semibold text-[14px]'>Name:</h5>
              <input name='name' value={formData.name} onChange={handleChange} className='w-full h-[48px] py-2 px-3 border-[1px] lato outline-none rounded-md border-[#E5E7EB] font-medium text-[sm] text-[#6B7280]' type="text" />
              {errors.name && <p className="text-red-500 text-sm">{errors.name}</p>}

              
          </div>

          <div className='md:flex items-center w-full md:gap-5'>
          <div className='w-full md:w-[50%] mb-2'>
            <h5 className=' text-[#051011] lato font-semibold text-[14px]'>Email:</h5>
              <input name='email' value={formData.email}  onChange={handleChange} className='w-full h-[48px] py-2 px-3 border-[1px] lato outline-none rounded-md border-[#E5E7EB] font-medium text-[sm] text-[#6B7280]' type="email" />
              {errors.email && <p className="text-red-500 text-sm">{errors.email}</p>}
          </div>
          <div className='w-full md:w-[50%] mb-2'>
            <h5 className=' text-[#051011] lato font-semibold text-[14px]'>Phone:</h5>
              <input name='phone' value={formData.phone} onChange={handleChange} className='w-full h-[48px] py-2 px-3 border-[1px] lato outline-none rounded-md border-[#E5E7EB] font-medium text-[sm] text-[#6B7280]' type="number" />
              {errors.phone && <p className="text-red-500 text-sm">{errors.phone}</p>}
          </div>
          </div>

          <div className='w-full'>
            <h5 className=' text-[#051011] lato font-semibold text-[14px] mb-2'>Anything else you’d like to share?:</h5>
              <textarea name="message" value={formData.message} onChange={handleChange} id="" rows={4} className='w-full  py-2 px-3 border-[1px] lato outline-none rounded-md border-[#E5E7EB] font-medium text-[sm] text-[#6B7280]'></textarea>
          </div>
         </div>
         <div className='text-center'>
         <button className='bg-[#019F44] w-[160px] h-[48px] text-[15px] text-white rounded' onClick={handleSubmit}>Send Request</button>
         </div>

         <div className='flex items-center justify-center gap-2 mt-2'>
          <SiGnuprivacyguard size={14} onClick={() => nextStep()}  />
          <p className='text-[#6B7280] text-[13px]'>We promise never to share your information or spam your inbox</p>
         </div>
      </div>
    </div>
  );
};

export default DetailsStep;
