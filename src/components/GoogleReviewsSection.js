import { useMemo } from "react";

const GoogleReviewsSection = ({ propTop, propLeft, propLeft1 }) => {
  const groupDiv4Style = useMemo(() => {
    return {
      top: propTop,
    };
  }, [propTop]);

  const groupDiv5Style = useMemo(() => {
    return {
      left: propLeft,
    };
  }, [propLeft]);

  const rectangleDivStyle = useMemo(() => {
    return {
      left: propLeft1,
    };
  }, [propLeft1]);

  return (
    <div
      className="absolute top-[6300px] left-[13px] w-[335px] h-[726px] text-left text-sm text-dimgray font-montserrat"
      style={groupDiv4Style}
    >
      <div className="absolute top-[0px] left-[0px] flex flex-col items-center justify-start">
        <div className="w-[335px] flex flex-col items-center justify-start gap-[24px]">
          <div className="flex flex-col items-center justify-start">
            <div className="flex flex-col items-center justify-start gap-[24px]">
              <div className="flex flex-col items-center justify-start gap-[8px]">
                <div className="relative leading-[140%]">
                  See who is walking this path with us
                </div>
                <b className="relative text-13xl inline-block text-gray-200 text-center w-[337px]">
                  Google reviews
                </b>
              </div>
              <div className="relative [background:linear-gradient(90deg,_rgba(239,_247,_254,_0)_6.25%,_#001224_53.13%,_rgba(240,_248,_255,_0)_94.27%)] w-[140px] h-[5px]" />
            </div>
          </div>
          <div className="relative text-xl leading-[140%] text-center inline-block w-[335px]">
            Watch the video and understand why thousands of people are already
            using our services and are protected
          </div>
        </div>
      </div>
      <div
        className="absolute top-[272px] left-[calc(50%_-_167.5px)] w-[335px] h-[351px] text-xl text-gray-200"
        style={groupDiv5Style}
      >
        <div
          className="absolute top-[20px] left-[calc(50%_-_138.5px)] rounded-lg bg-cores-primrias-contrast shadow-[0px_29px_49px_rgba(147,_147,_147,_0.25)] w-[277px] h-[331px]"
          style={rectangleDivStyle}
        />
        <div className="absolute top-[20px] left-[0px] rounded-lg bg-cores-primrias-contrast w-[335px] h-[331px]" />
        <div className="absolute top-[95px] left-[24px] flex flex-row items-center justify-start gap-[16px]">
          <img
            className="relative rounded-[50%] w-14 h-14 object-cover"
            alt=""
            src="/ellipse-10574@2x.png"
          />
          <b className="relative">Alessandro Daluiz</b>
        </div>
        <div className="absolute top-[161px] left-[calc(50%_-_143.5px)] text-base leading-[160%] text-dimgray inline-block w-[293px]">
          I highly recommend this agency, they’re extremely knowledgeable
          regarding all our truck insurance needs! We have all our accounts with
          them, and we couldn’t be happier!
        </div>
        <img
          className="absolute top-[-3px] left-[21px] w-[75.4px] h-[61px]"
          alt=""
          src="/1.svg"
        />
      </div>
      <div className="absolute top-[671px] left-[105px] flex flex-row items-start justify-start gap-[16px]">
        <img
          className="relative w-[54px] h-[55px]"
          alt=""
          src="/group-117127854600.svg"
        />
        <img
          className="relative w-[54px] h-[55px]"
          alt=""
          src="/group-1171278556.svg"
        />
      </div>
    </div>
  );
};

export default GoogleReviewsSection;
