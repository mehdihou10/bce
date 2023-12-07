import { useMemo } from "react";

const RateSection = ({
  productCode,
  serviceDescription,
  rateImageUrl,
  propWidth,
  propLineHeight,
  propWidth1,
  propLineHeight1,
}) => {
  const frameDiv1Style = useMemo(() => {
    return {
      width: propWidth,
    };
  }, [propWidth]);

  const competitiveRatesStyle = useMemo(() => {
    return {
      lineHeight: propLineHeight,
      width: propWidth1,
    };
  }, [propLineHeight, propWidth1]);

  const weOfferCompetitiveStyle = useMemo(() => {
    return {
      lineHeight: propLineHeight1,
    };
  }, [propLineHeight1]);

  return (
    <div
      className="flex flex-row items-start justify-start gap-[24px] text-left text-xl text-gray-200 font-montserrat"
      style={frameDiv1Style}
    >
      <img className="relative w-10 h-10" alt="" src={productCode} />
      <div className="flex flex-col items-start justify-start gap-[8px]">
        <b className="relative" style={competitiveRatesStyle}>
          {serviceDescription}
        </b>
        <div
          className="relative text-base leading-[140%] text-dimgray inline-block w-[268px]"
          style={weOfferCompetitiveStyle}
        >
          {rateImageUrl}
        </div>
      </div>
    </div>
  );
};

export default RateSection;
