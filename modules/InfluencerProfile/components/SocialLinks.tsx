import { Icon } from "@chakra-ui/icons";
import { Link } from "@chakra-ui/react";
import { BorderProps } from "@chakra-ui/styled-system";
import React, { SVGProps } from "react";

interface SocialLinksProps extends BorderProps {
  colorMode?: "light" | "dark";
  href: string | undefined;
  icon: any;
  bg: string;
}

const SocialLinks: React.FC<SocialLinksProps> = ({
  colorMode,
  href,
  icon,
  bg,
  ...props
}) => {
  return (
    <Link
      p="6px 16px"
      ml="30px !important"
      display="flex"
      alignItems="center"
      borderRadius="5px"
      border="1px solid"
      bg={bg}
      {...props}
      href={href}
      target="_blank"
    >
      <Icon w="32px" h="25px" as={icon} colorMode={colorMode} />
    </Link>
  );
};

export default SocialLinks;
