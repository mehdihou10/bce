import { useMemo } from "react";

const OnboardingSection1 = ({ separatorLeft, propBorderRight, propColor }) => {
  const groupDiv7Style = useMemo(() => {
    return {
      left: separatorLeft,
    };
  }, [separatorLeft]);

  const lineDiv1Style = useMemo(() => {
    return {
      borderRight: propBorderRight,
    };
  }, [propBorderRight]);

  const onboarding1Style = useMemo(() => {
    return {
      color: propColor,
    };
  }, [propColor]);

  return (
    <div
      className="absolute top-[0px] left-[calc(50%_-_721px)] w-[1441.9px] h-[120px] text-left text-lgi text-darkslategray-300 font-poppins"
      style={groupDiv7Style}
    >
      <div className="absolute top-[0px] left-[calc(50%_-_720.95px)] w-[1441.9px] h-[120px]">
        <div className="absolute top-[0px] left-[calc(50%_-_720.95px)] w-[1441.9px] h-[120px]">
          <div className="absolute top-[0px] left-[calc(50%_-_720.95px)] bg-cores-primrias-contrast w-[1441.9px] h-[120px]" />
          <div className="absolute top-[32px] left-[calc(50%_+_467.85px)] rounded-lg bg-whitesmoke-100 w-[0.8px] h-14" />
        </div>
      </div>
      <div className="absolute top-[35px] left-[calc(50%_-_135.95px)] flex flex-row items-center justify-start gap-[16px]">
        <img
          className="relative w-[125px] h-[62px] object-cover"
          alt=""
          src="/sem-nome-6@2x.png"
        />
        <div className="flex flex-row items-center justify-start gap-[11px]">
          <div
            className="relative box-border w-px h-[23px] border-r-[1px] border-solid border-darkslategray-300"
            style={lineDiv1Style}
          />
          <div className="relative font-semibold" style={onboarding1Style}>
            Onboarding
          </div>
        </div>
      </div>
    </div>
  );
};

export default OnboardingSection1;
