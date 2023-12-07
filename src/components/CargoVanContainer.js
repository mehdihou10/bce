import { useMemo } from "react";

const CargoVanContainer = ({
  vehicleType,
  vehicleImageId,
  propTop,
  propLeft,
}) => {
  const groupDiv1Style = useMemo(() => {
    return {
      top: propTop,
      left: propLeft,
    };
  }, [propTop, propLeft]);

  return (
    <div
      className="absolute top-[288px] left-[37px] w-[148px] h-40 text-center text-mini text-black font-inter"
      style={groupDiv1Style}
    >
      <div className="absolute top-[0px] left-[0px] rounded-4xs bg-cores-primrias-contrast box-border w-[148px] h-40 border-[1px] border-solid border-lightgray" />
      <div className="absolute top-[123px] left-[37px]">{vehicleType}</div>
      <img
        className="absolute top-[9px] left-[8px] rounded-8xs w-[131px] h-[98px] object-cover"
        alt=""
        src="/rectangle-346270191@2x.png"
      />
      <img
        className="absolute top-[9px] left-[8px] rounded-8xs w-[131px] h-[98px] object-cover"
        alt=""
        src={vehicleImageId}
      />
    </div>
  );
};

export default CargoVanContainer;
