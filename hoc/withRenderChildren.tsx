import React, { FC, PropsWithChildren } from 'react'

/**
 * @param Comp FC
 * @param disabled boolean
 * @returns FC
 * @description conditionally render children or component
 */
export function withRenderChildren<Props extends PropsWithChildren<{ disabled?: boolean }>>(
  Comp: FC<Omit<Props, 'disabled'>>
) {
  const wrappedComp = ({ disabled = false, ...props }: Props) => {
    return disabled ? props.children : <Comp {...props} />
  }

  return (wrappedComp as unknown) as FC<Props>
}
