import { useMemo } from "react";

const OnboardingFormContainer = ({ propBorderRight, propColor }) => {
  const lineDivStyle = useMemo(() => {
    return {
      borderRight: propBorderRight,
    };
  }, [propBorderRight]);

  const onboardingStyle = useMemo(() => {
    return {
      color: propColor,
    };
  }, [propColor]);

  return (
    <div className="absolute top-[35px] left-[calc(50%_-_135.95px)] flex flex-row items-center justify-start gap-[16px] text-left text-lgi text-black font-poppins">
      <img
        className="relative w-[125px] h-[62px] object-cover"
        alt=""
        src="/sem-nome-6@2x.png"
      />
      <div className="flex flex-row items-center justify-start gap-[11px]">
        <div
          className="relative box-border w-px h-[23px] border-r-[1px] border-solid border-black"
          style={lineDivStyle}
        />
        <div className="relative font-semibold" style={onboardingStyle}>
          Onboarding
        </div>
      </div>
    </div>
  );
};

export default OnboardingFormContainer;
