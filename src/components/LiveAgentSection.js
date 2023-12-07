import TruckingIndustrySpecialistsSec from "./TruckingIndustrySpecialistsSec";
import RateSection from "./RateSection";

const LiveAgentSection = () => {
  return (
    <div className="absolute top-[2116px] left-[12px] w-[336px] flex flex-col items-start justify-start gap-[24px] text-left text-xl text-gray-200 font-montserrat">
      <div className="flex flex-col items-start justify-start gap-[24px]">
        <div className="flex flex-row items-start justify-start gap-[24px]">
          <img className="relative w-10 h-10" alt="" src="/phonecall.svg" />
          <div className="flex flex-col items-start justify-start gap-[8px]">
            <b className="relative leading-[28px] inline-block w-[268px]">
              Connect with a live agent
            </b>
            <div className="relative text-base leading-[140%] text-dimgray inline-block w-[268px]">
              <p className="m-0">
                We offer the option to connect with a live agent 24/7.
              </p>
              <p className="m-0">
                Our agents are experienced and qualified and are ready to help
                you with any questions or problems you may have.
              </p>
            </div>
          </div>
        </div>
        <div className="relative box-border w-[333px] h-px border-t-[1px] border-solid border-gainsboro-100" />
      </div>
      <TruckingIndustrySpecialistsSec
        imageDescription="/jeep.svg"
        serviceDescription="Trucking industry especialists"
        expertiseImageUrl="We have a team of experts with extensive experience in the sector, who are prepared to offer the best solutions to their customers' needs."
      />
      <RateSection
        productCode="/currencydollar.svg"
        serviceDescription="Competitive rates"
        rateImageUrl="We offer competitive rates for all your products and services. Our commitment is to provide the best protection for our customers without compromising quality or value."
      />
    </div>
  );
};

export default LiveAgentSection;
