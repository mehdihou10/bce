const FormWithRadios = () => {
  return (
    <div className="absolute h-[22.58%] w-full top-[0%] right-[0%] bottom-[77.42%] left-[0%] text-left text-base text-darkslategray-700 font-inter">
      <img
        className="absolute h-[7.22%] w-[15.15%] top-[0%] right-[9.61%] bottom-[92.78%] left-[75.24%] max-w-full overflow-hidden max-h-full"
        alt=""
        src="/freepikbackgroundcompleteinject11.svg"
      />
      <div className="absolute top-[0px] left-[0px] rounded-mid bg-cores-primrias-contrast w-[1059px] h-[378px]" />
      <div className="absolute top-[27px] left-[41px] w-[800px] h-[38px] text-6xl text-darkslategray-300 font-raleway">
        <div className="absolute top-[5px] left-[-1px] font-semibold font-poppins">
          Does the customer have a USDOT Number?
        </div>
        <div className="absolute top-[410px] left-[-1px] font-semibold">
          Most Common Business Types:
        </div>
        <div className="absolute top-[670px] left-[-4px] font-semibold">
          Home address/personal information of the business owner
        </div>
        <div className="absolute top-[1296px] left-[8px] text-base tracking-[0.01em] leading-[24px] font-semibold inline-block w-[664px]">
          For a phone quote,you must read the disclosure to the customer.if in
          person,please print and provide to the customer.
        </div>
      </div>
      <div className="absolute top-[82px] left-[41px] text-mid tracking-[0.02em] leading-[31px] inline-block w-[925px] h-[141px] text-darkslategray-100">
        <span className="font-inter text-darkslategray-700">
          The number is registered to the customer’s busniess and displayed on
          the side of the vehicle.Any bussiness type could have a USDOT
          registration.Need to confirm the customer’s USDOT number? search by
          busniessname is
        </span>
        <span className="font-medium">{` `}</span>
        <span className="font-medium">
          <span className="[text-decoration:underline]"> Bolanos</span>
        </span>
      </div>
      <div className="absolute top-[212px] left-[83px] tracking-[0.02em] leading-[33px] inline-block w-[344px] h-[29px]">
        Yes -the customer has a USDOT number
      </div>
      <div className="absolute top-[272px] left-[83px] tracking-[0.02em] leading-[33px] inline-block w-[677px] h-[29px]">
        Not Yet- but the customer has applied/will apply for a USDOT number
        within 60 days.
      </div>
      <div className="absolute top-[212px] left-[516px] tracking-[0.02em] leading-[33px] inline-block w-[430px] h-[29px]">
        No -and the customer will not have a USDOT number
      </div>
      <div className="absolute top-[213px] left-[40px] w-[31px] h-[31px]">
        <input
          className="cursor-pointer absolute top-[0px] left-[0px] w-[31px] h-[31px] overflow-hidden"
          required={true}
          autoFocus={true}
          type="radio"
        />
      </div>
      <img
        className="absolute top-[273px] left-[40px] w-[31px] h-[31px]"
        alt=""
        src="/group-1171278553.svg"
      />
      <div className="absolute top-[213px] left-[473px] w-[31px] h-[31px]">
        <input
          className="cursor-pointer absolute top-[0px] left-[0px] w-[31px] h-[31px] overflow-hidden"
          type="radio"
        />
      </div>
    </div>
  );
};

export default FormWithRadios;
