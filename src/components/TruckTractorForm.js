import { useMemo } from "react";

const TruckTractorForm = ({ propTop, propLeft }) => {
  const groupDivStyle = useMemo(() => {
    return {
      top: propTop,
      left: propLeft,
    };
  }, [propTop, propLeft]);

  return (
    <div
      className="absolute top-[107px] left-[37px] w-[148px] h-40 text-center text-mini text-black font-inter"
      style={groupDivStyle}
    >
      <div className="absolute top-[0px] left-[0px] rounded-4xs bg-cores-primrias-contrast box-border w-[148px] h-40 border-[1px] border-solid border-lightgray" />
      <div className="absolute top-[123px] left-[27px]">Truck Tractor</div>
      <img
        className="absolute top-[9px] left-[8px] rounded-8xs w-[131px] h-[98px] object-cover"
        alt=""
        src="/rectangle-34627019@2x.png"
      />
    </div>
  );
};

export default TruckTractorForm;
