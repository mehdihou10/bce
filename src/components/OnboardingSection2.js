import OnboardingFormContainer from "./OnboardingFormContainer";

const OnboardingSection2 = () => {
  return (
    <div className="absolute top-[0px] left-[calc(50%_-_720px)] w-[1441.9px] h-[120px] text-left text-lgi text-black font-poppins">
      <div className="absolute top-[0px] left-[calc(50%_-_720.95px)] w-[1441.9px] h-[120px]">
        <div className="absolute top-[0px] left-[calc(50%_-_720.95px)] bg-cores-primrias-contrast w-[1441.9px] h-[120px]" />
        <div className="absolute top-[32px] left-[calc(50%_+_467.85px)] rounded-lg bg-whitesmoke-100 w-[0.8px] h-14" />
      </div>
      <OnboardingFormContainer />
    </div>
  );
};

export default OnboardingSection2;
