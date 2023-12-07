import OnboardingFormContainer from "./OnboardingFormContainer";

const Header = () => {
  return (
    <div className="absolute top-[0px] left-[calc(50%_-_720px)] w-[1441.9px] h-[120px]">
      <div className="absolute top-[0px] left-[calc(50%_-_720.95px)] w-[1441.9px] h-[120px]">
        <div className="absolute top-[0px] left-[calc(50%_-_720.95px)] w-[1441.9px] h-[120px]">
          <input
            className="[border:none] bg-cores-primrias-contrast absolute top-[0px] left-[calc(50%_-_720.95px)] w-[1441.9px] h-[120px]"
            type="text"
          />
          <div className="absolute top-[32px] left-[calc(50%_+_467.85px)] rounded-lg bg-whitesmoke-100 w-[0.8px] h-14" />
        </div>
      </div>
      <OnboardingFormContainer
        propBorderRight="1px solid #263238"
        propColor="#263238"
      />
    </div>
  );
};

export default Header;
