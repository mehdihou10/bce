import InsuranceCard from "../components/InsuranceCard";
import FormContainer from "../components/FormContainer";
import BolanosSection from "../components/BolanosSection";
import MainPartnersContainer from "../components/MainPartnersContainer";
import InstantQuotesSection from "../components/InstantQuotesSection";
import InstanteCertificatesOfInsuranc from "../components/InstanteCertificatesOfInsuranc";
import PlatformSection from "../components/PlatformSection";
import TruckingInsuranceSpecialistSec1 from "../components/TruckingInsuranceSpecialistSec1";
import QuoteCardForm from "../components/QuoteCardForm";
import GoogleReviewsSection from "../components/GoogleReviewsSection";
import HomeContainer from "../components/HomeContainer";

const Frame1 = () => {
  return (
    <div className="relative bg-aliceblue w-full h-[8081px] overflow-hidden text-left text-[8.82px] text-gray-200 font-montserrat">
      <InsuranceCard />
      <FormContainer />
      <BolanosSection />
      <MainPartnersContainer />
      <InstantQuotesSection />
      <img
        className="absolute top-[2007px] left-[11px] w-[337px] h-[69px]"
        alt=""
        src="/group-11712785541.svg"
      />
      <InstanteCertificatesOfInsuranc />
      <div className="absolute top-[3002px] left-[12.1px] w-[335.9px] h-[254.8px]">
        <div className="absolute top-[0px] left-[75px] rounded-[10.23px] w-[216.7px] h-[254.8px] overflow-hidden">
          <img
            className="absolute top-[0px] left-[0px] rounded-tl-none rounded-tr-[46.33px] rounded-b-none w-[216.7px] h-[254.8px] object-cover"
            alt=""
            src="/busywomandoingmanythingssametime-12@2x.png"
          />
          <div className="absolute top-[0px] left-[0px] rounded-[10.23px] [background:linear-gradient(0deg,_#001224_29.17%,_rgba(0,_18,_36,_0)_88.26%)] w-[216.7px] h-[254.8px]" />
          <div className="absolute top-[161.5px] left-[-4.7px] rounded-[50%] bg-gray-400 [filter:blur(57.09px)] w-[187px] h-[187px]" />
        </div>
        <div className="absolute top-[175.9px] left-[0px] w-[113.6px] h-[58.5px]">
          <div className="absolute top-[0px] left-[0px] rounded-[9.93px] bg-cores-primrias-contrast shadow-[0px_2.8px_13.24px_rgba(147,_147,_147,_0.25)] w-[113.6px] h-[58.5px]" />
          <img
            className="absolute top-[11.6px] left-[11px] w-[17.6px] h-[17.6px]"
            alt=""
            src="/shieldchevron.svg"
          />
          <b className="absolute top-[33.1px] left-[11px] inline-block w-[92.1px]">
            24 hour protection
          </b>
        </div>
        <div className="absolute top-[27px] left-[222.3px] w-[113.6px] h-[58.5px]">
          <div className="absolute top-[0px] left-[0px] rounded-[9.93px] bg-cores-primrias-contrast shadow-[0px_3.3px_13.24px_rgba(147,_147,_147,_0.25)] w-[113.6px] h-[58.5px]" />
          <img
            className="absolute top-[11px] left-[11px] w-[17.6px] h-[17.6px]"
            alt=""
            src="/truck.svg"
          />
          <b className="absolute top-[33.1px] left-[11px] inline-block w-[92.1px]">
            Safety in your truck
          </b>
        </div>
      </div>
      <PlatformSection propTop="4469px" />
      <TruckingInsuranceSpecialistSec1 />
      <div className="absolute top-[1590.5px] left-[2.5px] box-border w-[358px] h-px border-t-[1px] border-solid border-gainsboro-100" />
      <QuoteCardForm propTop="5276px" />
      <GoogleReviewsSection propTop="6490px" propLeft="0px" propLeft1="32px" />
      <HomeContainer propTop="7316px" />
      <div className="absolute top-[5004px] left-[22px] w-[318px] h-[191.8px]">
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

export default Frame1;
