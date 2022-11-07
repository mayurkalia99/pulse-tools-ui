import { Image } from "@/components/Image";
import Layout from "@/components/Layout";
import { useGetInfluencerProfile } from "@/hooks/queries/useGetInfluencerProfile";
import {
  Box,
  Flex,
  HStack,
  Icon,
  Link,
  Text,
  useColorMode,
  VStack,
} from "@chakra-ui/react";
import profileCharacter from "../../assets/icons/profileCharacter.svg";
import { useRouter } from "next/router";
import React from "react";
import home from "../../assets/icons/home";
import twitter from "../../assets/icons/twitter.svg";
import telegram from "../../assets/icons/telegram.svg";
import github from "../../assets/icons/github.svg";
import discord from "../../assets/icons/discord.svg";
import SocialLinks from "./components/SocialLinks";

type ProfileTag = {
  bg_color: string;
  tag: string;
  border_color: string;
};

export const ProfileTag: React.FC<ProfileTag> = ({
  bg_color,
  tag,
  border_color,
}) => (
  <HStack
    mb="19px !important"
    w="fit-content"
    h="39px"
    bg={bg_color}
    border="1px solid"
    borderColor={border_color}
    borderRadius="10px"
    p="14px 20px"
    mr="24px !important"
  >
    <Icon boxSize="14px" mr="10px" as={profileCharacter} />
    <Text
      ml="2px !important"
      fontWeight="500"
      fontSize="15px"
      lineHeight="20px"
    >
      {tag}
    </Text>
  </HStack>
);

const InfluncerProfileModule = () => {
  const { colorMode } = useColorMode();
  const { query } = useRouter();
  const { data, isLoading } = useGetInfluencerProfile({ slug: query?.slug });
  const result = data?.data[0];
  return (
    <Layout>
      <>
        <HStack className="about">
          <Image
            w="231px"
            h="239px"
            border="1px solid #FF6666"
            borderRadius="39px"
            src={result?.image}
            alt=""
          />
          <VStack
            flexGrow="1"
            ml="35px !important"
            justify="center"
            alignItems="flex-start"
            spacing="45px"
          >
            <Text
              color="#FF6666"
              fontWeight="700"
              fontSize="34px"
              lineHeight="20px"
              letterSpacing="0.44px"
            >
              {result?.full_name}
            </Text>

            <HStack>
              {result?.founder && (
                <ProfileTag
                  bg_color="rgba(176, 57, 150, 0.67)"
                  border_color="#B97BF8"
                  tag="Founder"
                />
              )}
              {result?.investor && (
                <ProfileTag
                  bg_color="rgba(57, 176, 155, 0.67)"
                  border_color="#00FFB3"
                  tag="Investor"
                />
              )}
              {result?.whale && (
                <ProfileTag
                  bg_color="rgba(57, 69, 176, 0.67)"
                  border_color="#8AAADC"
                  tag="Whale"
                />
              )}
              {result?.influencer && (
                <ProfileTag
                  bg_color="rgba(209, 137, 52, 0.67)"
                  border_color="#FDE097"
                  tag="Influencer"
                />
              )}
            </HStack>
          </VStack>
          <HStack mt="50px !important" alignSelf={"flex-start"}>
            {result?.website.length !== 0 && (
              <SocialLinks
                icon={home}
                href={result?.website}
                colorMode={colorMode}
                borderColor={
                  colorMode === "dark" ? "rgba(240, 244, 249, 0.54)" : "#0C0C18"
                }
                bg={
                  colorMode === "light"
                    ? "rgba(240, 244, 249, 0.54)"
                    : "#0C0C18"
                }
              />
            )}
            {result?.twitter.length !== 0 && (
              <SocialLinks
                icon={twitter}
                href={result?.website}
                colorMode={colorMode}
                borderColor="#0080FF"
                bg={
                  colorMode === "light"
                    ? "rgba(240, 244, 249, 0.54)"
                    : "#0C0C18"
                }
              />
            )}
            {result?.telegram.length !== 0 && (
              <SocialLinks
                icon={telegram}
                href={result?.website}
                colorMode={colorMode}
                borderColor="#0080FF"
                bg={
                  colorMode === "light"
                    ? "rgba(240, 244, 249, 0.54)"
                    : "#0C0C18"
                }
              />
            )}

            {result?.github.length !== 0 && (
              <SocialLinks
                icon={github}
                href={result?.website}
                colorMode={colorMode}
                borderColor={
                  colorMode === "dark" ? "rgba(240, 244, 249, 0.54)" : "#0C0C18"
                }
                bg={
                  colorMode === "light"
                    ? "rgba(240, 244, 249, 0.54)"
                    : "#0C0C18"
                }
              />
            )}
            {result?.discord.length !== 0 && (
              <SocialLinks
                icon={discord}
                href={result?.website}
                colorMode={colorMode}
                borderColor="#8AAADC"
                bg={
                  colorMode === "light"
                    ? "rgba(240, 244, 249, 0.54)"
                    : "#0C0C18"
                }
              />
            )}
          </HStack>
        </HStack>
        <Flex>
          <Box className="leftSide">
            <Box></Box>
          </Box>
          <Box className="rightSide"></Box>
        </Flex>
      </>
    </Layout>
  );
};

export default InfluncerProfileModule;
