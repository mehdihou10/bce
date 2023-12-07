const InsuranceCard = () => {
  return (
    <div className="absolute top-[0px] left-[0px] w-[360px] h-[1072px] overflow-hidden text-left text-xs text-cores-primrias-contrast font-montserrat">
      <div className="absolute top-[0px] left-[0px] bg-gray-500 w-[360px] h-[1072px]" />
      <div className="absolute top-[-283px] left-[-328px] rounded-[50%] bg-gray-400 [filter:blur(134px)] w-[829px] h-[829px]" />
      <div className="absolute top-[157px] left-[10px] flex flex-col items-start justify-start gap-[20px]">
        <div className="flex flex-row items-start justify-start gap-[16px]">
          <div className="relative w-[146px] h-[35px]">
            <div className="absolute top-[0px] left-[0px] rounded bg-gray-1500 overflow-hidden flex flex-row items-center justify-center p-2.5 border-[1px] border-solid border-cores-primrias-contrast">
              <div className="relative">Complete protection</div>
            </div>
          </div>
          <div className="relative w-[132px] h-[35px]">
            <div className="absolute top-[0px] left-[0px] rounded bg-gray-1500 overflow-hidden flex flex-row items-center justify-center p-2.5 border-[1px] border-solid border-cores-primrias-contrast">
              <div className="relative">24 hour assistance</div>
            </div>
          </div>
        </div>
        <b className="relative text-13xl leading-[140%] capitalize inline-block w-[336px]">
          The easiest way to buy and manage trucking insurance
        </b>
        <div className="relative text-xl leading-[140%] font-dm-sans text-gray-1600 inline-block w-[336px]">
          Talk to our experts and get all your questions answered and get a
          no-obligation quote
        </div>
        <div className="relative [background:linear-gradient(90deg,_rgba(0,_18,_36,_0)_10.94%,_rgba(255,_255,_255,_0.5)_53.13%,_rgba(0,_18,_36,_0)_90.63%)] w-[69px] h-[5px]" />
        <div className="w-[336px] flex flex-row flex-wrap items-start justify-start gap-[16px] text-5xl">
          <div className="flex flex-row items-start justify-start gap-[32px]">
            <div className="w-32 flex flex-col items-start justify-start">
              <div className="relative w-[79px] h-[45px]">
                <b className="absolute top-[6px] left-[0px] leading-[140%] capitalize">
                  +
                </b>
                <b className="absolute top-[0px] left-[23px] text-13xl leading-[140%] capitalize">
                  100
                </b>
              </div>
              <div className="relative text-sm leading-[110%] text-gray-1600 inline-block w-32">
                Partner insurance companies
              </div>
            </div>
            <div className="w-[141px] flex flex-col items-start justify-start">
              <div className="relative w-[86px] h-[45px]">
                <b className="absolute top-[6px] left-[0px] leading-[140%] capitalize">
                  +
                </b>
                <b className="absolute top-[0px] left-[23px] text-13xl leading-[140%] capitalize">
                  200
                </b>
              </div>
              <div className="relative text-sm leading-[110%] text-gray-1600 inline-block w-[141px]">
                Satisfied customers
              </div>
            </div>
          </div>
          <div className="flex flex-col items-start justify-start">
            <div className="relative w-[86px] h-[45px]">
              <b className="absolute top-[0px] left-[0px] leading-[140%] capitalize">
                +
              </b>
              <b className="absolute top-[0px] left-[23px] text-13xl leading-[140%] capitalize">
                500
              </b>
            </div>
            <div className="relative text-sm leading-[110%] text-gray-1600 inline-block w-[218px]">
              Positive reviews on Facebook
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default InsuranceCard;
