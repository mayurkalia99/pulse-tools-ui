import { FC, memo } from "react";

export function withMemo<Props extends object>(
  displayName: string,
  Comp: FC<Props>,
  propsAreEqual?: Parameters<typeof memo>[1]
) {
  Comp.displayName = displayName;
  return memo(Comp, propsAreEqual);
}
