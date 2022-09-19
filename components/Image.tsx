import React from "react";
import { Image as ChakraImage, ImgProps } from "@chakra-ui/react";
import { withMemo } from "../hoc/withMemo";

interface ImageProps extends ImgProps {
  alt: string;
  fallback: React.ReactElement;
}

export const Image: React.FC<ImageProps> = withMemo("Image", (props) => {
  return <ChakraImage {...props} />;
});
