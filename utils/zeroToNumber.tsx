import { Text, TextProps } from "@chakra-ui/react";
import { FC } from "react";
import { toPlainString } from "./plainStr";
import { roundOff } from "./roundOff";

interface ZeroToNumberProps extends TextProps {
  value: number;
}

export const ZeroToNumber: FC<ZeroToNumberProps> = ({ value, ...rest }) => {
  //* counting zeroes after decimal point
  const zeroesCount = -Math.floor(Math.log10(value) + 2);
  const readable = toPlainString(value);

  //* splitting the number from the very first zero after the decimal point but getting the first half
  const afterFirstZero = Number(
    String(Number(readable.split("0.0")[1])).slice(0, 2)
  );

  return (
    <>
      {value * 1000 < 1 ? (
        <Text {...rest}>
          $0.0<sub>{zeroesCount.toString()}</sub>
          {afterFirstZero}
        </Text>
      ) : (
        <Text {...rest}>
          $
          {value >= 100
            ? roundOff(value, 2)
            : value >= 10
            ? roundOff(value, 3)
            : value >= 1
            ? roundOff(value, 5)
            : value >= 0.000001 && roundOff(value, 5)}
        </Text>
      )}
    </>
  );
};
