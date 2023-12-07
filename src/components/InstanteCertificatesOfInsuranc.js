import TruckingIndustrySpecialistsSec from "./TruckingIndustrySpecialistsSec";
import RateSection from "./RateSection";

const InstanteCertificatesOfInsuranc = () => {
  return (
    <div className="absolute top-[2116px] left-[17px] flex flex-col items-start justify-start gap-[24px]">
      <TruckingIndustrySpecialistsSec
        imageDescription="/note.svg"
        serviceDescription="Instante certificates of insurance"
        expertiseImageUrl="We offer instant certificates of insurance for all your products and services. This means you can get the insurance coverage you need quickly and easily, without having to wait days or weeks to receive your certificate."
        propWidth="332px"
        propLineHeight="160%"
      />
      <TruckingIndustrySpecialistsSec
        imageDescription="/browsers.svg"
        serviceDescription="Shop with multiple insurance companies and 24/7 policy management"
        expertiseImageUrl="We offer you the ability to purchase insurance with multiple insurance companies. This means you can compare offers from different insurers to find the best coverage and price for your needs."
        propWidth="332px"
        propLineHeight="160%"
      />
      <RateSection
        productCode="/circlewavycheck1.svg"
        serviceDescription="DOT Compliance assistance"
        rateImageUrl="We offer DOT compliance assistance to help businesses comply with DOT regulations. Our team of experts can help you in the best way possible"
        propWidth="332px"
        propLineHeight="28px"
        propWidth1="267px"
        propLineHeight1="160%"
      />
    </div>
  );
};

export default InstanteCertificatesOfInsuranc;
