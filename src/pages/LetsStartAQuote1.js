import OnboardingSection1 from "../components/OnboardingSection1";

const LetsStartAQuote1 = () => {
  return (
    <div className="relative rounded-3xl bg-aliceblue shadow-[20px_20px_40px_rgba(0,_0,_0,_0.05)] w-full h-[675px] overflow-hidden text-left text-6xl text-darkslategray-300 font-raleway">
      <img
        className="absolute top-[1355px] left-[64px] w-6 h-6"
        alt=""
        src="/vector4.svg"
      />
      <img
        className="absolute top-[14px] left-[calc(50%_+_537px)] w-[94px] h-[94px]"
        alt=""
        src="/notif.svg"
      />
      <img
        className="absolute top-[32px] left-[calc(50%_+_632px)] rounded-23xl w-14 h-14 object-cover"
        alt=""
        src="/placeholder@2x.png"
      />
      <OnboardingSection1 />
      <div className="absolute top-[209px] left-[474px] flex flex-col items-center justify-start gap-[24px]">
        <img
          className="relative w-[60px] h-[60px]"
          alt=""
          src="/group-66742.svg"
        />
        <div className="flex flex-col items-center justify-start gap-[8px]">
          <div className="relative font-extrabold">
            Congratulations on a successful budget!
          </div>
          <div className="relative text-base tracking-[0.02em] font-poppins text-darkslategray-700 text-center inline-block w-[392px]">
            Our team will contact you within 24 hours with all the details of
            the quote.
          </div>
        </div>
      </div>
    </div>
  );
};

export default LetsStartAQuote1;
