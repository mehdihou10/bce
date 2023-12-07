const MainPartnersContainer = () => {
  return (
    <div className="absolute top-[1421px] left-[12px] w-[336px] flex flex-col items-center justify-center gap-[16px] text-left text-sm text-dimgray font-dm-sans">
      <div className="flex flex-col items-center justify-start gap-[8px]">
        <div className="relative leading-[140%]">The best security</div>
        <b className="relative text-5xl leading-[120%] font-montserrat text-gray-200">
          Main partners
        </b>
      </div>
      <div className="relative box-border w-[169px] h-px border-t-[1px] border-solid border-gainsboro-100" />
      <div className="relative w-[436px] h-[66px]">
        <div className="absolute top-[0px] left-[0px] flex flex-row items-center justify-start gap-[42px]">
          <img
            className="relative w-[132px] h-[50px] object-cover"
            alt=""
            src="/imageremovebgpreview-88-1@2x.png"
          />
          <img
            className="relative w-[117.6px] h-12 object-cover"
            alt=""
            src="/image-8@2x.png"
          />
          <img
            className="relative w-[168.4px] h-[30.4px] object-cover"
            alt=""
            src="/image-22@2x.png"
          />
          <img
            className="relative w-[132px] h-[34px] object-cover"
            alt=""
            src="/image-23@2x.png"
          />
          <img
            className="relative w-[150px] h-[60px] object-cover"
            alt=""
            src="/nationwideinsurancelogo-1@2x.png"
          />
          <img
            className="relative w-[118px] h-[66px] object-cover"
            alt=""
            src="/heritageinsurancelogovector-1@2x.png"
          />
        </div>
      </div>
    </div>
  );
};

export default MainPartnersContainer;
