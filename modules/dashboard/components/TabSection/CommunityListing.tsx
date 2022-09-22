import React from "react";
import {
  Avatar,
  Box,
  Flex,
  HStack,
  Icon,
  Link,
  Text,
  useColorMode,
  VStack,
} from "@chakra-ui/react";
import {
  IInfluencerProfile,
  useGetAllInfluencerProfiles,
} from "../../../../hooks/queries/useAllProfiles";
import { useHorizontalScroll } from "../../../../hooks/useHorizontalScroll";
import home from "../../../../assets/icons/home";
import twitter from "../../../../assets/icons/twitter.svg";
import telegram from "../../../../assets/icons/telegram.svg";
import github from "../../../../assets/icons/github.svg";
import discord from "../../../../assets/icons/discord.svg";
import profileCharacter from "../../../../assets/icons/profileCharacter.svg";
interface ListingCardProps extends IInfluencerProfile {
  colorMode: string;
}

const ListingCard: React.FC<ListingCardProps> = ({ colorMode, ...data }) => (
  <Flex
    bg={colorMode === "light" ? "#F0F0F0" : "rgba(158, 158, 158, 0.11)"}
    borderRadius="10px"
    maxW="317px"
    flexDir="column"
    p="13px 15px 19px 13px"
    mr="15px"
    minW="317px"
  >
    <HStack w="100%" alignItems="flex-start" mb="19px">
      <Avatar boxSize={"42px"} src={data.image} bg="transparent" />
      <VStack alignItems="flex-start" flexGrow="1">
        <Text
          fontSize="18px"
          lineHeight="20px"
          fontWeight="700"
          color="#B97BF8"
        >
          {data.full_name}
        </Text>
        <HStack mt="2px !important" alignItems={"flex-start"}>
          {data.website.length !== 0 && (
            <Link href={data.website} target="_blank">
              <Icon as={home} colorMode={colorMode} />
            </Link>
          )}
          {data.twitter.length !== 0 && (
            <Link href={data.twitter} target="_blank">
              <Icon as={twitter} />
            </Link>
          )}
          {data.telegram.length !== 0 && (
            <Link href={data.telegram} target="_blank">
              <Icon as={telegram} />
            </Link>
          )}

          {data.github.length !== 0 && (
            <Link href={data.github} target="_blank">
              <Icon as={github} />
            </Link>
          )}
          {data.discord.length !== 0 && (
            <Link href={data.discord} target="_blank">
              <Icon as={discord} />
            </Link>
          )}
        </HStack>
      </VStack>
      <HStack alignItems="baseline">
        <Text
          color="#4EFF7F"
          fontSize="20px"
          fontWeight="700"
          lineHeight="20px"
        >
          {data.rating}
        </Text>
        <Text
          color="#817F7F"
          fontSize="13px"
          fontWeight="400"
          letterSpacing="2px"
          ml="6px !important"
        >
          /10
        </Text>
      </HStack>
    </HStack>
    <HStack
      mb="19px"
      w="fit-content"
      bg={
        data.founder
          ? "rgba(176, 57, 150, 0.67)"
          : data.investor
          ? "rgba(57, 176, 155, 0.67)"
          : data.influencer
          ? "rgba(209, 137, 52, 0.67)"
          : "rgba(57, 69, 176, 0.67)"
      }
      borderRadius="10px"
      px="5px"
    >
      <Icon boxSize="10px" as={profileCharacter} />
      <Text
        ml="2px !important"
        fontWeight="500"
        fontSize="10px"
        lineHeight="20px"
      >
        {data.founder
          ? "Founder"
          : data.investor
          ? "Investor"
          : data.influencer
          ? "Influencer"
          : "Whale"}
      </Text>
    </HStack>
    <Box textOverflow="ellipsis" h="63px" mb="5px">
      <Text
        className="influencer_profile_card_bio"
        fontSize="12px"
        lineHeight="16px"
        fontWeight="500"
      >
        {data.bio}
      </Text>
    </Box>
    <Link
      fontSize="12px"
      fontWeight="700"
      lineHeight="20px"
      alignSelf="flex-end"
      color="#B97BF8"
    >
      View More
    </Link>
  </Flex>
);

const CommunityListing = () => {
  const { colorMode } = useColorMode();
  const scrollRef = useHorizontalScroll();
  const { data } = useGetAllInfluencerProfiles({
    page: 1,
    page_size: 10,
  });

  return (
    <Flex
      ref={scrollRef}
      overflow="scroll"
      css={{
        "&::-webkit-scrollbar": {
          width: "0px",
        },
        "&::-webkit-scrollbar-track": {
          width: "0px",
        },
      }}
    >
      {data?.data.map((profile, i) => (
        <ListingCard
          key={i}
          colorMode={colorMode}
          full_name={profile.full_name}
          image={profile.image}
          rating={profile.rating}
          website={profile.website}
          twitter={profile.twitter}
          telegram={profile.telegram}
          github={profile.github}
          discord={profile.discord}
          investor={profile.investor}
          founder={profile.founder}
          whale={profile.whale}
          slug={profile.slug}
          influencer={profile.influencer}
          bio={profile.bio}
        />
      ))}
    </Flex>
  );
};

export default CommunityListing;
