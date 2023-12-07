import { useMemo } from "react";

const Account = ({
  disciplina,
  disciplinaLineHeight,
  disciplinaFontWeight,
  disciplinaFontFamily,
  disciplinaColor,
  disciplinaTextAlign,
}) => {
  const disciplinaStyle = useMemo(() => {
    return {
      lineHeight: disciplinaLineHeight,
      fontWeight: disciplinaFontWeight,
      fontFamily: disciplinaFontFamily,
      color: disciplinaColor,
      textAlign: disciplinaTextAlign,
    };
  }, [
    disciplinaLineHeight,
    disciplinaFontWeight,
    disciplinaFontFamily,
    disciplinaColor,
    disciplinaTextAlign,
  ]);

  return (
    <div className="flex flex-row items-start justify-start py-0 px-6 box-border text-left text-base text-base-90 font-nunito">
      <div
        className="relative leading-[24px] font-semibold"
        style={disciplinaStyle}
      >
        {disciplina}
      </div>
    </div>
  );
};

export default Account;
