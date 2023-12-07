import { useMemo } from "react";

const HomeContainer = ({ propTop }) => {
  const footerStyle = useMemo(() => {
    return {
      top: propTop,
    };
  }, [propTop]);

  return (
    <div
      className="absolute top-[7126px] left-[-3px] w-[366px] h-[765px] overflow-hidden text-center text-base text-cores-primrias-contrast font-montserrat"
      style={footerStyle}
    >
      <div className="absolute top-[0px] left-[-15px] bg-gray-500 w-[381px] h-[765px]" />
      <img
        className="absolute top-[0px] left-[3px] w-[362px] h-[813px] overflow-hidden"
        alt=""
        src="/frame-1171278534.svg"
      />
      <div className="absolute top-[717px] left-[calc(50%_-_171px)] text-xs inline-block w-[336px]">
        © 2023 All Rights Reserved. Bolanos Commercial Enterprise, LLC
      </div>
      <div className="absolute top-[701.5px] left-[-2.5px] box-border w-[369px] h-px border-t-[1px] border-solid border-gray-100" />
      <img
        className="absolute top-[6px] left-[235px] w-32 h-[696px] object-cover"
        alt=""
        src="/image-24@2x.png"
      />
      <div className="absolute top-[313px] left-[251px] w-[109px] h-[535px]" />
      <div className="absolute top-[40px] left-[22px] flex flex-col items-start justify-start gap-[40px] text-left">
        <div className="flex flex-col items-start justify-start gap-[12px]">
          <b className="relative">Home</b>
          <div className="flex flex-col items-start justify-start gap-[16px] text-sm text-gray-1700">
            <div className="relative">Services</div>
            <div className="relative">About us</div>
            <div className="relative">Blog</div>
            <div className="relative">Contact us</div>
          </div>
        </div>
        <div className="flex flex-col items-start justify-start gap-[12px]">
          <b className="relative">About Us</b>
          <div className="flex flex-col items-start justify-start gap-[16px] text-sm text-gray-1700">
            <div className="relative">{`Terms & Conditions`}</div>
            <div className="relative">Privacy Policy</div>
          </div>
        </div>
        <div className="flex flex-col items-start justify-start gap-[12px]">
          <b className="relative">Contact</b>
          <div className="flex flex-col items-start justify-start gap-[10px] text-sm text-gray-1700">
            <div className="flex flex-row items-start justify-start gap-[13px]">
              <img className="relative w-5 h-5" alt="" src="/mappinline.svg" />
              <div className="relative leading-[20px] inline-block w-[223px] shrink-0">
                66 Waverley Dr. Ste 630, Frederick, MD 21702
              </div>
            </div>
            <div className="flex flex-row items-center justify-start gap-[11px]">
              <img
                className="relative w-6 h-6"
                alt=""
                src="/envelopeopen1.svg"
              />
              <div className="relative">Operations@bceins.com</div>
            </div>
            <div className="flex flex-row items-center justify-start gap-[14px]">
              <img
                className="relative w-[22px] h-[22px]"
                alt=""
                src="/phone1.svg"
              />
              <div className="relative">301-591-6550</div>
            </div>
          </div>
        </div>
      </div>
      <div className="absolute top-[528px] left-[calc(50%_-_162px)] flex flex-col items-start justify-start gap-[20px]">
        <div className="flex flex-row items-center justify-start gap-[4px]">
          <img className="relative w-8 h-8" alt="" src="/instagramlogo.svg" />
          <div className="flex flex-col items-start justify-start">
            <div className="relative w-[164px] h-[17px]">
              <div className="absolute top-[0%] left-[0%] tracking-[-0.01em] leading-[105%] font-medium">
                /bolanoscommercial
              </div>
            </div>
          </div>
        </div>
        <div className="flex flex-row items-center justify-start gap-[4px]">
          <img className="relative w-8 h-8" alt="" src="/facebooklogo.svg" />
          <div className="flex flex-col items-start justify-start">
            <div className="relative w-[164px] h-[17px]">
              <div className="absolute top-[0%] left-[0%] tracking-[-0.01em] leading-[105%] font-medium">
                /bolanoscommercial
              </div>
            </div>
          </div>
        </div>
        <div className="flex flex-row items-center justify-start gap-[4px]">
          <img className="relative w-8 h-8" alt="" src="/youtubelogo.svg" />
          <div className="flex flex-col items-start justify-start">
            <div className="relative w-[164px] h-[17px]">
              <div className="absolute top-[0%] left-[0%] tracking-[-0.01em] leading-[105%] font-medium">
                /bolanoscommercial
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HomeContainer;
