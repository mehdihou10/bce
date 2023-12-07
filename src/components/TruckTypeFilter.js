import TruckTractorForm from "./TruckTractorForm";
import CargoVanContainer from "./CargoVanContainer";
import PickupTruckContainer from "./PickupTruckContainer";

const TruckTypeFilter = () => {
  return (
    <div className="absolute shadow-lg top-[calc(50%_-_291.5px)] left-[calc(50%_-_406px)] w-[811px] h-[583px] text-center text-mini text-black font-inter">
      <div className="absolute top-[calc(50%_-_291.5px)] left-[calc(50%_-_405.5px)] rounded-2xl bg-cores-primrias-contrast w-[811px] h-[583px]" />
      <div className="absolute top-[487px] left-[calc(50%_+_118.5px)] w-[91px] h-[50px] text-left text-darkslategray-300">
        <div className="absolute top-[-1px] left-[calc(50%_-_46.5px)] rounded-md shadow-[0px_4px_4px_rgba(0,_0,_0,_0.03)] box-border w-[93px] h-[52px] border-[1px] border-solid border-darkslategray-300" />
        <div className="absolute top-[17px] left-[calc(50%_-_24.5px)] font-medium">
          Cancel
        </div>
      </div>
      <div className="absolute top-[487px] left-[calc(50%_+_226.5px)] w-[150px] h-[50px] text-left text-cores-primrias-contrast">
        <div className="absolute top-[0px] left-[calc(50%_-_75px)] rounded-md bg-darkslategray-100 shadow-[0px_4px_4px_rgba(0,_0,_0,_0.03)] w-[150px] h-[50px]" />
        <div className="absolute top-[16px] left-[calc(50%_-_27px)] font-medium">
          Confirm
        </div>
      </div>
      <img
        className="absolute top-[30px] left-[748px] w-10 h-10"
        alt=""
        src="/x.svg"
      />
      <div className="absolute top-[34px] left-[37px] text-3xl font-semibold font-poppins text-left">
        Select your truck type
      </div>
      <TruckTractorForm />
      <CargoVanContainer
        vehicleType="Cargo Van"
        vehicleImageId="/rectangle-34627023@2x.png"
      />
      <CargoVanContainer
        vehicleType="Box Truck"
        vehicleImageId="/rectangle-34627020@2x.png"
        propTop="107px"
        propLeft="209px"
      />
      <div className="absolute top-[288px] left-[209px] w-[148px] h-40">
        <div className="absolute top-[0px] left-[0px] rounded-4xs bg-cores-primrias-contrast box-border w-[148px] h-40 border-[1px] border-solid border-lightgray" />
        <div className="absolute top-[123px] left-[15px]">
          Other/ Not listed
        </div>
        <div className="absolute top-[9px] left-[8px] rounded-8xs bg-aliceblue w-[131px] h-[98px]" />
        <img
          className="absolute top-[27px] left-[43px] w-[62px] h-[62px] overflow-hidden"
          alt=""
          src="/phquestionfill.svg"
        />
      </div>
      <div className="absolute top-[98px] left-[164px] rounded-[50%] bg-gainsboro-200 box-border w-8 h-8 border-[3px] border-solid border-cores-primrias-contrast" />
      <img
        className="absolute top-[101px] left-[167px] w-[26px] h-[26px]"
        alt=""
        src="/group-66741.svg"
      />
      <div className="absolute top-[98px] left-[337px] rounded-[50%] bg-gainsboro-200 box-border w-8 h-8 border-[3px] border-solid border-cores-primrias-contrast" />
      <PickupTruckContainer
        truckType="Pickup Truck"
        truckImageId="/rectangle-34627021@2x.png"
      />
      <PickupTruckContainer
        truckType="Flatbed Truck"
        truckImageId="/rectangle-34627022@2x.png"
        propLeft="553px"
        propTop="101px"
      />
      <div className="absolute top-[281px] left-[337px] rounded-[50%] bg-gainsboro-200 box-border w-8 h-8 border-[3px] border-solid border-cores-primrias-contrast" />
      <div className="absolute top-[281px] left-[169px] rounded-[50%] bg-gainsboro-200 box-border w-8 h-8 border-[3px] border-solid border-cores-primrias-contrast" />
    </div>
  );
};

export default TruckTypeFilter;
