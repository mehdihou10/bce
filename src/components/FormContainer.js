const FormContainer = () => {
  return (
    <div className="absolute top-[593px] left-[1px] w-[359px] h-[728px] text-left text-base text-gray-200 font-montserrat">
      <img
        className="absolute h-[100.07%] w-[287.38%] top-[-9.62%] right-[-187.1%] bottom-[9.55%] left-[-0.28%] max-w-full overflow-hidden max-h-full opacity-[0.25]"
        alt=""
        src="/image-planet.svg"
      />
      <div className="absolute h-[88.6%] w-[93.59%] top-[14.15%] right-[3.34%] bottom-[-2.75%] left-[3.06%]">
        <div className="absolute h-full w-full top-[0%] right-[0%] bottom-[0%] left-[0%] rounded-lg bg-cores-primrias-contrast shadow-[0px_29px_49px_rgba(147,_147,_147,_0.25)]" />
        <div className="absolute h-[4.96%] w-[63.99%] top-[91.47%] right-[31.25%] bottom-[3.57%] left-[4.76%] flex flex-row items-center justify-start gap-[8px] text-sm">
          <img className="relative w-8 h-8" alt="" src="/shieldcheck.svg" />
          <div className="relative leading-[180%] font-semibold">
            Your data is safe with us
          </div>
        </div>
        <div className="absolute h-[0.16%] w-[91.67%] top-[87.67%] right-[3.72%] bottom-[12.17%] left-[4.61%] box-border border-t-[1px] border-solid border-whitesmoke-200" />
        <div className="absolute h-[62.33%] w-[90.48%] top-[21.71%] right-[4.76%] bottom-[15.97%] left-[4.76%] flex flex-col items-start justify-start gap-[24px] text-dimgray">
          <div className="relative w-[307px] h-16 text-gray-200">
            <div className="absolute top-[0px] left-[0px] rounded-lg bg-cores-primrias-contrast box-border w-[307px] h-16 border-[2px] border-solid border-gray-200" />
            <div className="absolute top-[18px] left-[10px] leading-[180%] font-medium">
              Matheus |
            </div>
          </div>
          <div className="relative w-[307px] h-16">
            <div className="absolute top-[0px] left-[0px] rounded-lg bg-whitesmoke-200 w-[307px] h-16" />
            <div className="absolute top-[18px] left-[10px] leading-[180%] font-medium inline-block w-[53px]">
              E-mail
            </div>
          </div>
          <div className="relative w-[307px] h-16">
            <div className="absolute top-[0px] left-[0px] rounded-lg bg-whitesmoke-200 w-[307px] h-16" />
            <div className="absolute top-[18px] left-[10px] leading-[180%] font-medium inline-block w-[129px]">
              Phone number
            </div>
          </div>
          <div className="w-[307px] flex flex-col items-start justify-start gap-[8px] text-lg text-cores-primrias-contrast font-dm-sans">
            <div className="rounded-lg bg-gray-600 w-[307px] h-16 overflow-hidden shrink-0 flex flex-row items-center justify-center py-4 px-0 box-border">
              <b className="relative">I want to be a customer</b>
            </div>
            <div className="relative text-sm leading-[160%] font-medium font-montserrat text-dimgray inline-block w-[307px]">
              {`By submitting your data, you authorize us to contact you, To find out more, see our `}
              <span className="[text-decoration:underline]">
                Privacy policy
              </span>
            </div>
          </div>
        </div>
        <div className="absolute top-[3.1%] left-[4.76%] text-xl leading-[180%] font-extrabold">
          Get a quote right now
        </div>
        <div className="absolute w-[90.48%] top-[9.92%] left-[4.76%] leading-[140%] text-dimgray inline-block">
          Sign up and our team will contact you to provide your quote
        </div>
      </div>
    </div>
  );
};

export default FormContainer;
