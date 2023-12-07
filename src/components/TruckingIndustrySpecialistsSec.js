import { useMemo } from "react";

const TruckingIndustrySpecialistsSec = ({
  imageDescription,
  serviceDescription,
  expertiseImageUrl,
  propWidth,
  propLineHeight,
}) => {
  const frameDivStyle = useMemo(() => {
    return {
      width: propWidth,
    };
  }, [propWidth]);

  const weHaveAStyle = useMemo(() => {
    return {
      lineHeight: propLineHeight,
    };
  }, [propLineHeight]);

  return (
    <div
      className="flex flex-col items-start justify-start gap-[24px] text-left text-xl text-gray-200 font-montserrat"
      style={frameDivStyle}
    >
      <div className="flex flex-row items-start justify-start gap-[24px]">
        <img className="relative w-10 h-10" alt="" src={imageDescription} />
        <div className="flex flex-col items-start justify-start gap-[8px]">
          <b className="relative leading-[28px] inline-block w-[268px]">
            {serviceDescription}
          </b>
          <div
            className="relative text-base leading-[140%] text-dimgray inline-block w-[268px]"
            style={weHaveAStyle}
          >
            {expertiseImageUrl}
          </div>
        </div>
      </div>
      <div className="relative box-border w-[333px] h-px border-t-[1px] border-solid border-gainsboro-100" />
    </div>
  );
};

export default TruckingIndustrySpecialistsSec;
