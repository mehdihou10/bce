import { useMemo } from "react";

const QuoteCardForm = ({ propTop }) => {
  const frameDiv2Style = useMemo(() => {
    return {
      top: propTop,
    };
  }, [propTop]);

  return (
    <div
      className="absolute top-[5086px] left-[14px] flex flex-col items-start justify-start gap-[40px] text-left text-sm text-dimgray font-montserrat"
      style={frameDiv2Style}
    >
      <div className="w-[335px] flex flex-col items-center justify-start gap-[24px]">
        <div className="flex flex-col items-center justify-start">
          <div className="flex flex-col items-center justify-start gap-[24px]">
            <div className="flex flex-col items-center justify-start gap-[8px]">
              <div className="relative leading-[140%]">
                The best insurance companies are with us
              </div>
              <b className="relative text-13xl inline-block text-gray-200 text-center w-[337px]">
                Quote. Purchase. Manage
              </b>
            </div>
            <div className="relative [background:linear-gradient(90deg,_rgba(239,_247,_254,_0)_6.25%,_#001224_53.13%,_rgba(240,_248,_255,_0)_94.27%)] w-[140px] h-[5px]" />
          </div>
        </div>
        <div className="relative text-xl leading-[140%] text-center inline-block w-[335px]">
          The BCE Trucking platform enhances your speed and efficiency when it
          comes to managing your trucking insurance. It stands out as the sole
          digital trucking insurance platform that allows you to compare quotes,
          buy policies, and stay connected with your agent, all within a single,
          convenient location.
        </div>
      </div>
      <div className="flex flex-col items-start justify-start gap-[48px] text-base text-gray-200">
        <div className="flex flex-col items-center justify-start gap-[24px]">
          <div className="relative w-[335px] h-[482px]">
            <div className="absolute top-[0px] left-[0px] rounded-lg bg-aliceblue box-border w-[335px] h-[482px] border-[2px] border-solid border-gainsboro-100" />
            <div className="absolute top-[260px] left-[24px] flex flex-col items-start justify-start gap-[32px]">
              <div className="flex flex-row items-center justify-start gap-[10px]">
                <img
                  className="relative w-10 h-10"
                  alt=""
                  src="/circlewavycheck.svg"
                />
                <div className="flex flex-col items-start justify-start">
                  <b className="relative inline-block w-[230px]">
                    Implement top safety measures
                  </b>
                </div>
              </div>
              <div className="flex flex-row items-center justify-start gap-[10px]">
                <img
                  className="relative w-10 h-10"
                  alt=""
                  src="/circlewavycheck.svg"
                />
                <div className="flex flex-col items-start justify-start">
                  <b className="relative">Ensuring DOT compliance</b>
                </div>
              </div>
              <div className="flex flex-row items-center justify-start gap-[10px]">
                <img
                  className="relative w-10 h-10"
                  alt=""
                  src="/circlewavycheck.svg"
                />
                <div className="flex flex-col items-start justify-start">
                  <b className="relative inline-block w-[222px]">
                    Collaborating with freight borkers
                  </b>
                </div>
              </div>
            </div>
            <b className="absolute top-[84px] left-[22px] text-5xl">Educate</b>
            <b className="absolute top-[20px] left-[24px] text-29xl">1</b>
            <div className="absolute top-[118px] left-[22px] text-xl leading-[140%] text-dimgray inline-block w-[293px]">
              Access valuable educational resources shared by industry veterans
              who are former trucking company owners.
            </div>
            <div className="absolute top-[474px] left-[0px] rounded-t-none rounded-b-lg bg-gray-200 w-[335px] h-2" />
          </div>
          <div className="flex flex-row items-start justify-start gap-[10px]">
            <div className="relative rounded-lg bg-gray-200 w-[35px] h-4" />
            <div className="relative rounded-[50%] bg-silver w-4 h-4" />
            <div className="relative rounded-[50%] bg-silver w-4 h-4" />
          </div>
        </div>
        <div className="w-[334px] flex flex-row items-center justify-start text-sm">
          <div className="flex flex-row items-center justify-start gap-[8px]">
            <img className="relative w-8 h-8" alt="" src="/medal1.svg" />
            <div className="relative leading-[22.2px] inline-block w-[237px] shrink-0">
              <span>{`Have the best insurance in your hands right now, `}</span>
              <span className="font-extrabold">Get your quote</span>
            </div>
            <img
              className="relative w-6 h-[46px]"
              alt=""
              src="/frame-11712785841.svg"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default QuoteCardForm;
