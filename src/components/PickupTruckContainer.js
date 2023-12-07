import { useMemo } from "react";

const PickupTruckContainer = ({
  truckType,
  truckImageId,
  propLeft,
  propTop,
}) => {
  const groupDiv2Style = useMemo(() => {
    return {
      left: propLeft,
      top: propTop,
    };
  }, [propLeft, propTop]);

  return (
    <div
      className="absolute top-[101px] left-[381px] w-[161px] h-[166px] text-center text-mini text-black font-inter"
      style={groupDiv2Style}
    >
      <div className="absolute top-[6px] left-[0px] w-[148px] h-40">
        <div className="absolute top-[0px] left-[0px] rounded-4xs bg-cores-primrias-contrast box-border w-[148px] h-40 border-[1px] border-solid border-lightgray" />
        <div className="absolute top-[123px] left-[28px]">{truckType}</div>
        <img
          className="absolute top-[9px] left-[8px] rounded-8xs w-[131px] h-[98px] object-cover"
          alt=""
          src="/rectangle-346270191@2x.png"
        />
        <img
          className="absolute top-[9px] left-[8px] rounded-8xs w-[131px] h-[98px] object-cover"
          alt=""
          src={truckImageId}
        />
      </div>
      <div className="absolute top-[-3px] left-[132px] rounded-[50%] bg-gainsboro-200 box-border w-8 h-8 border-[3px] border-solid border-cores-primrias-contrast" />
    </div>
  );
};

export default PickupTruckContainer;
