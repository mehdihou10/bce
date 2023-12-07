import OnboardingSection from "../components/OnboardingSection";

const MobileView9 = () => {
  return (
    <div className="relative bg-aliceblue w-full h-[1053px] overflow-hidden text-left text-sm text-cores-primrias-contrast font-inter">
      <OnboardingSection />
      <div className="absolute top-[4511px] left-[42px] w-6 h-6 overflow-hidden" />
      <div className="absolute top-[4568px] left-[42px] w-6 h-6 overflow-hidden" />
      <div className="absolute top-[4568px] left-[42px] w-6 h-6 overflow-hidden" />
      <div className="absolute top-[4625px] left-[42px] w-6 h-6 overflow-hidden" />
      <div className="absolute top-[7245px] left-[770px] w-[238px] h-[126px]">
        <img
          className="absolute top-[0px] left-[0px] w-[238px] h-[126px] object-cover"
          alt=""
          src="/image-12@2x.png"
        />
      </div>
      <div className="absolute top-[231px] left-[calc(50%_-_198px)] rounded-mid bg-cores-primrias-contrast w-[395px] h-[737px]" />
      <div className="absolute top-[896px] left-[calc(50%_-_177px)] w-[361px] h-[50px]">
        <div className="absolute top-[0px] left-[calc(50%_-_180.5px)] w-[361px] h-[50px]">
          <div className="absolute top-[0px] left-[calc(50%_-_180.5px)] w-[361px] h-[50px]">
            <div className="absolute top-[0px] left-[calc(50%_+_58.5px)] rounded-md bg-darkslategray-100 shadow-[0px_4px_4px_rgba(0,_0,_0,_0.03)] w-[122px] h-[50px]" />
            <div className="absolute top-[-1px] left-[calc(50%_-_181.5px)] rounded-md shadow-[0px_4px_4px_rgba(0,_0,_0,_0.03)] box-border w-[58px] h-[52px] border-[1px] border-solid border-darkslategray-300" />
            <div className="absolute top-[15.6px] left-[calc(50%_+_72.5px)] font-medium inline-block w-[69.5px] h-[21.6px]">
              Continue
            </div>
            <img
              className="absolute top-[11px] left-[319px] w-[29.3px] h-[29.3px]"
              alt=""
              src="/group-11712785501.svg"
            />
          </div>
        </div>
        <img
          className="absolute top-[14px] left-[17px] w-[22.2px] h-[22.2px]"
          alt=""
          src="/expand-left.svg"
        />
      </div>
      <div className="absolute top-[486px] left-[calc(50%_-_163px)] w-[177px] h-[50px] text-mini">
        <div className="absolute top-[0px] left-[calc(50%_-_88.5px)] w-[177px] h-[50px]">
          <div className="absolute top-[0px] left-[calc(50%_-_88.5px)] w-[177px] h-[50px]">
            <div className="absolute top-[0px] left-[calc(50%_-_88.5px)] rounded-md bg-darkslategray-100 shadow-[0px_4px_4px_rgba(0,_0,_0,_0.03)] w-[177px] h-[50px]" />
            <div className="absolute top-[16px] left-[calc(50%_-_31.5px)] font-medium">
              Add a vehicle
            </div>
            <img
              className="absolute top-[9px] left-[19px] w-8 h-8"
              alt=""
              src="/pluscircle.svg"
            />
          </div>
        </div>
        <div className="absolute top-[11px] left-[19px] w-[29px] h-[29px] overflow-hidden" />
      </div>
      <div className="absolute top-[261px] left-[48px] text-lg font-semibold font-poppins text-darkslategray-300">
        Vehicle Information
      </div>
      <div className="absolute top-[310px] left-[48px] tracking-[0.02em] leading-[31px] font-poppins text-darkslategray-700 inline-block w-[347px] h-[150px]">
        <p className="m-0">Most common vehicles for the customer’s business.</p>
        <p className="m-0">
          Please select one of these vehicles commonly used in the customer’s
          business or choose ‘Other/Not Listed for more Options
        </p>
        <p className="m-0">&nbsp;</p>
      </div>
      <div className="absolute top-[133px] left-[17px] w-[180px] h-[58px] text-5xl">
        <div className="absolute top-[0px] left-[0px] w-[58px] h-[58px]">
          <div className="absolute top-[0px] left-[0px] rounded-[50%] bg-darkslategray-100 w-[58px] h-[58px]" />
          <div className="absolute top-[16px] left-[11px] leading-[100%] font-semibold">
            <span>2</span>
            <span className="text-lg">/5</span>
          </div>
        </div>
        <b className="absolute top-[16px] left-[66px] tracking-[-0.01em] leading-[130%] text-steelblue">
          Vehicules
        </b>
      </div>
      <div className="absolute top-[131px] left-[334px] flex flex-col items-start justify-start text-darkslategray-100">
        <div className="relative leading-[180%] font-light">Next step</div>
        <div className="relative text-lg leading-[180%] font-extrabold text-steelblue mt-[-3px]">
          Drivers
        </div>
      </div>
    </div>
  );
};

export default MobileView9;
