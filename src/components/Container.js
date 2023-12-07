import { useMemo } from "react";

const Container = ({ propPosition, propTop, propLeft }) => {
  const groupDiv6Style = useMemo(() => {
    return {
      position: propPosition,
      top: propTop,
      left: propLeft,
    };
  }, [propPosition, propTop, propLeft]);

  return (
    <div
      className="relative w-[157px] h-[164px] text-center text-mini text-black font-inter"
      style={groupDiv6Style}
    >
      <div className="absolute top-[4px] left-[0px] w-[148px] h-40">
        <div className="absolute top-[0px] left-[0px] rounded-4xs bg-cores-primrias-contrast box-border w-[148px] h-40 border-[1px] border-solid border-lightgray" />
        <div className="absolute top-[123px] left-[15px]">
          Other/ Not listed
        </div>
        <div className="absolute top-[9px] left-[8px] rounded-8xs bg-aliceblue w-[131px] h-[98px]" />
        <img
          className="absolute top-[27px] left-[43px] w-[62px] h-[62px]"
          alt=""
          src="/phquestionfill.svg"
        />
      </div>
      <div className="absolute top-[-3px] left-[128px] rounded-[50%] bg-gainsboro-200 box-border w-8 h-8 border-[3px] border-solid border-cores-primrias-contrast" />
    </div>
  );
};

export default Container;
