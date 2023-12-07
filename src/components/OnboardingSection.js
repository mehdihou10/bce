const OnboardingSection = () => {
  return (

    <div className="bg-white relative z-[100] w-full h-[100px]">

    <div className="absolute top-[0px] left-[0px] w-full h-24 text-left text-lgi text-darkslategray-300 font-poppins">
      <div className="absolute top-[0px] left-[0px] bg-cores-primrias-contrast w-fullh-24" />
      <div className="absolute top-[17px] left-[calc(50%_-_135px)] flex flex-row items-center justify-start gap-[16px]">
        <img
          className="relative w-[125px] h-[62px] object-cover"
          alt=""
          src="/sem-nome-61@2x.png"
        />
        <div className="flex flex-row items-center justify-start gap-[11px]">
          <div className="relative box-border w-px h-[23px] border-r-[1px] border-solid border-darkslategray-300" />
          <div className="relative font-semibold">Onboarding</div>
        </div>
      </div>
    </div>

    </div>

  );
};

export default OnboardingSection;
