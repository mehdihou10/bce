import OnboardingSection from "../components/OnboardingSection";

const MobileView = () => {
  return (
    <div className="relative bg-aliceblue w-full h-[675px] overflow-hidden text-center text-6xl text-darkslategray-300 font-raleway">
      <div className="absolute top-[4511px] left-[42px] w-6 h-6 overflow-hidden" />
      <div className="absolute top-[4568px] left-[42px] w-6 h-6 overflow-hidden" />
      <div className="absolute top-[4568px] left-[42px] w-6 h-6 overflow-hidden" />
      <div className="absolute top-[4625px] left-[42px] w-6 h-6 overflow-hidden" />
      <div className="absolute top-[7245px] left-[770px] w-[238px] h-[126px]">
        <img
          className="absolute top-[0px] left-[0px] w-[238px] h-[126px] object-cover"
          alt=""
          src="/image-12@2x.png"
        />
      </div>
      <OnboardingSection />
      <div className="absolute top-[169px] left-[calc(50%_-_148px)] flex flex-col items-center justify-start gap-[24px]">
        <img
          className="relative w-[60px] h-[60px]"
          alt=""
          src="/group-66742.svg"
        />
        <div className="flex flex-col items-center justify-start gap-[8px]">
          <div className="relative leading-[35px] font-extrabold inline-block w-[286px]">
            Congratulations on a successful budget!
          </div>
          <div className="relative text-base tracking-[0.02em] font-poppins text-darkslategray-700 inline-block w-[296px]">
            Our team will contact you within 24 hours with all the details of
            the quote.
          </div>
        </div>
      </div>
    </div>
  );
};

export default MobileView;
