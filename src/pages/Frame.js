import InsuranceCard from "../components/InsuranceCard";
import FormContainer from "../components/FormContainer";
import BolanosSection from "../components/BolanosSection";
import MainPartnersContainer from "../components/MainPartnersContainer";
import InstantQuotesSection from "../components/InstantQuotesSection";
import LiveAgentSection from "../components/LiveAgentSection";
import PlatformSection from "../components/PlatformSection";
import TruckingInsuranceSpecialistSec from "../components/TruckingInsuranceSpecialistSec";
import QuoteCardForm from "../components/QuoteCardForm";
import GoogleReviewsSection from "../components/GoogleReviewsSection";
import HomeContainer from "../components/HomeContainer";

const Frame = () => {
  return (
    <div className="relative bg-aliceblue w-full h-[7891px] overflow-hidden text-left text-[8.78px] text-gray-200 font-montserrat">
      <InsuranceCard />
      <FormContainer />
      <BolanosSection />
      <MainPartnersContainer />
      <InstantQuotesSection />
      <img
        className="absolute top-[2007px] left-[11px] w-[337px] h-[69px]"
        alt=""
        src="/group-1171278554.svg"
      />
      <LiveAgentSection />
      <div className="absolute top-[2794px] left-[11px] w-[333px] h-[253.5px]">
        <div className="absolute top-[0px] left-[74.6px] rounded-[10.17px] w-[215.6px] h-[253.5px] overflow-hidden">
          <img
            className="absolute top-[0px] left-[0px] rounded-tl-none rounded-tr-[46.06px] rounded-b-none w-[216.7px] h-[253.5px] object-cover"
            alt=""
            src="/busywomandoingmanythingssametime-1@2x.png"
          />
          <div className="absolute top-[0px] left-[0px] rounded-[10.17px] [background:linear-gradient(0deg,_#001224_29.17%,_rgba(0,_18,_36,_0)_88.26%)] w-[215.6px] h-[253.5px]" />
          <div className="absolute top-[160.6px] left-[-4.7px] rounded-[50%] bg-gray-400 [filter:blur(56.79px)] w-[186.1px] h-[186.1px]" />
        </div>
        <div className="absolute top-[26.3px] left-[0px] w-[98.2px] h-[54.9px]">
          <div className="absolute top-[0px] left-[0px] rounded-[9.87px] bg-cores-primrias-contrast shadow-[0px_2.7px_13.17px_rgba(147,_147,_147,_0.25)] w-[91.6px] h-[54.9px]" />
          <img
            className="absolute top-[11px] left-[11px] w-[17.6px] h-[17.6px]"
            alt=""
            src="/phonecall1.svg"
          />
          <b className="absolute top-[32.9px] left-[11px] inline-block w-[87.2px]">
            Schedule a call
          </b>
        </div>
        <div className="absolute top-[174.5px] left-[248px] w-[85px] h-[58.2px]">
          <div className="absolute top-[0px] left-[0px] rounded-[9.87px] bg-cores-primrias-contrast shadow-[0px_3.3px_13.17px_rgba(147,_147,_147,_0.25)] w-[85px] h-[58.2px]" />
          <img
            className="absolute top-[6.6px] left-[11px] w-[17.6px] h-[17.6px]"
            alt=""
            src="/smiley.svg"
          />
          <b className="absolute top-[29.1px] left-[11px] inline-block w-[74.1px]">
            Specialized attendants
          </b>
        </div>
      </div>
      <PlatformSection />
      <TruckingInsuranceSpecialistSec />
      <div className="absolute top-[1590.5px] left-[2.5px] box-border w-[358px] h-px border-t-[1px] border-solid border-gainsboro-100" />
      <QuoteCardForm />
      <GoogleReviewsSection />
      <HomeContainer />
      <div className="absolute top-[4794px] left-[19px] w-[318px] h-[191.8px]">
        <div className="absolute top-[0px] left-[0px] rounded-5xs-7 w-[318px] h-[191.8px] overflow-hidden">
          <img
            className="absolute top-[0px] left-[0.4px] rounded-tl-none rounded-tr-[34.87px] rounded-b-none w-[317.6px] h-[191.8px] object-cover"
            alt=""
            src="/busywomandoingmanythingssametime-11@2x.png"
          />
          <div className="absolute top-[0px] left-[0.4px] rounded-5xs-7 [background:linear-gradient(0deg,_#001224_29.17%,_rgba(0,_18,_36,_0)_88.26%)] w-[317.6px] h-[191.8px]" />
          <div className="absolute top-[121.5px] left-[151.3px] rounded-[50%] bg-gray-400 [filter:blur(42.98px)] w-[140.8px] h-[140.8px]" />
        </div>
      </div>
    </div>
  );
};

export default Frame;
