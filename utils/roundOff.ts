interface roundOffArgs {
  breakPoint: number;
  lessFix: number;
  greaterFix: number;
}

export function roundOff(
  num?: number | string | undefined,
  decimal?: number | roundOffArgs
) {
  if (!num) return 0;
  num = Number(num);

  if (String(num).includes(".")) {
    let fix_num = Number(num.toFixed(40));

    if (typeof decimal === "object") {
      const { breakPoint, lessFix, greaterFix } = decimal;
      if (num < breakPoint) {
        fix_num = Number(Number(num).toFixed(lessFix));
      } else {
        fix_num = Number(Number(num).toFixed(greaterFix));
      }
    } else {
      fix_num = Number(Number(num).toFixed(decimal));
    }

    return fix_num;
  }

  return num;
}

export const ellipseNum = (fix_num: number, num: number) => {
  if (Number(num) * 10000 < 1) {
    const original_num = num.toFixed(40);
    const end = Number(original_num)
      .toExponential()
      .slice(0, Math.min(3, Number(original_num).toExponential().indexOf("e")))
      .replace(".", "");

    return "0.0" + "..00" + end;
  }

  return fix_num.toString();
};

roundOff.withEllipse = function (...args: Parameters<typeof roundOff>) {
  const fix_num = roundOff(...args);

  // eslint-disable-next-line prefer-const
  let [num, fix] = args;
  if (!num) return "0";
  num = Number(num);

  if (typeof fix === "object") {
    const { breakPoint } = fix;
    if (num < breakPoint) {
      return ellipseNum(fix_num, num);
    } else {
      return ellipseNum(fix_num, num);
    }
  } else {
    return ellipseNum(fix_num, num);
  }
};
