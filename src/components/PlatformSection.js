import { useMemo } from "react";

const PlatformSection = ({ propTop }) => {
  const groupDiv3Style = useMemo(() => {
    return {
      top: propTop,
    };
  }, [propTop]);

  return (
    <div
      className="absolute top-[4259px] left-[calc(50%_-_168px)] w-[336px] h-[495.2px] text-left text-sm text-dimgray font-dm-sans"
      style={groupDiv3Style}
    >
      <div className="absolute top-[0px] left-[calc(50%_-_167px)] w-[335px] flex flex-col items-center justify-start gap-[24px]">
        <div className="flex flex-col items-center justify-start">
          <div className="flex flex-col items-center justify-start gap-[24px]">
            <div className="flex flex-col items-center justify-start gap-[8px]">
              <div className="relative leading-[140%]">
                The best insurance companies are with us
              </div>
              <b className="relative text-13xl inline-block font-montserrat text-gray-200 text-center w-[337px]">
                How our platform works
              </b>
            </div>
            <div className="relative [background:linear-gradient(90deg,_rgba(239,_247,_254,_0)_6.25%,_#001224_53.13%,_rgba(240,_248,_255,_0)_94.27%)] w-[140px] h-[5px]" />
          </div>
        </div>
        <div className="relative text-xl leading-[140%] font-montserrat text-center inline-block w-[328px]">
          Watch the video and understand why thousands of people are already
          using our services and are protected
        </div>
      </div>
      <div className="absolute top-[311.2px] left-[0px] w-[336px] flex flex-col items-start justify-start gap-[16px] text-base text-gray-200 font-montserrat">
        <div className="flex flex-col items-start justify-start gap-[16px]">
          <div className="flex flex-row items-start justify-start gap-[24px]">
            <img className="relative w-10 h-10" alt="" src="/phonecall.svg" />
            <div className="flex flex-col items-start justify-start">
              <b className="relative">Connect with a live agent</b>
            </div>
          </div>
          <div className="relative box-border w-[334px] h-px border-t-[1px] border-solid border-gainsboro-100" />
        </div>
        <div className="flex flex-col items-start justify-start gap-[16px]">
          <div className="flex flex-row items-center justify-start gap-[24px]">
            <img className="relative w-10 h-10" alt="" src="/jeep.svg" />
            <div className="flex flex-col items-start justify-start">
              <b className="relative inline-block w-[272px]">
                Trucking industry especialists
              </b>
            </div>
          </div>
          <div className="relative box-border w-[334px] h-px border-t-[1px] border-solid border-gainsboro-100" />
        </div>
        <div className="flex flex-row items-start justify-start gap-[24px]">
          <img
            className="relative w-10 h-10"
            alt=""
            src="/currencydollar.svg"
          />
          <div className="flex flex-col items-start justify-start">
            <b className="relative">Competitive rates</b>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PlatformSection;
