import React from "react";
import {
  Avatar,
  Flex,
  HStack,
  Image,
  Link,
  Text,
  useColorMode,
} from "@chakra-ui/react";
import moment from "moment";
import { ArrowForwardIcon } from "@chakra-ui/icons";
import { useHorizontalScroll } from "@/hooks/useHorizontalScroll";
import { IPost, useGetLatestNews } from "@/hooks/queries/useLatestNews";

const pureString = (des: string) => {
  const returnValue = des.match(/<p>(.*?)<\/p>/g)?.map(function (val) {
    return val.replace(/<\/?p>/g, "");
  });
  return returnValue;
};
interface ICardProps extends IPost {
  colorMode: string;
}

const Card: React.FC<ICardProps> = ({
  colorMode,
  images,
  title,
  coin_name,
  description,
  date,
  link,
}) => {
  const des = pureString(description);
  return (
    <Flex
      flexDir="column"
      borderRadius={"12px"}
      bg={colorMode === "light" ? "#F0F0F0" : "rgba(158, 158, 158, 0.11)"}
      h="300px"
      minW="255px"
      mr="15px"
      pos="relative"
    >
      <Image
        borderRadius={"12px"}
        objectFit="cover"
        maxH="45%"
        w="100%"
        src={images ? images : ""}
        alt={coin_name}
      />
      <Flex flexDir="column" p="10px 14px 6px 10px">
        {/* title */}
        <Flex w="100%" mb="15px">
          <HStack flexGrow="1" alignItems="center">
            <Avatar
              boxSize="18px"
              src="https://pulsehotlist.com/img/apps/BankX.png"
            />
            <Text fontSize="13px" fontWeight="400" lineHeight="12px">
              {coin_name}
            </Text>
          </HStack>
          <Text
            color={
              colorMode === "dark"
                ? "rgba(255, 255, 255, 0.5)"
                : "rgba(103, 103, 103, 0.5)"
            }
            letterSpacing="0.44px"
            fontSize="12px"
            lineHeight="12px"
            fontWeight="400"
          >
            {moment(date).format("MMM D")}
          </Text>
        </Flex>

        {/* Header */}
        <Text mb="9px" fontSize="14px" fontWeight="600" lineHeight="14px">
          {title}
        </Text>

        {/* content */}
        <Text
          className="latest_news_card_description"
          h="46px"
          color="#7F8284"
          fontSize="12px"
          lineHeight="15px"
          mb="8px"
        >
          {des ? des : description}
        </Text>
        {/* footer */}
        <Link
          href={link}
          target="_blank"
          alignSelf="flex-end"
          color="#9898DE"
          fontSize="11px"
          lineHeight="15px"
          pos="absolute"
          bottom="5px"
        >
          Read More <ArrowForwardIcon />
        </Link>
      </Flex>
    </Flex>
  );
};

const LatestNews = () => {
  const { colorMode } = useColorMode();
  const scrollRef = useHorizontalScroll();
  const { data, isFetched } = useGetLatestNews();
  const posts = data?.posts_details;
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
      {isFetched
        ? posts?.posts?.map((news, i) => (
            <Card
              key={i}
              colorMode={colorMode}
              coin_name={news?.coin_name}
              images={news?.images}
              title={news?.title}
              link={news?.link}
              description={news?.description}
              date={news?.date}
            />
          ))
        : "loading"}
    </Flex>
  );
};

export default LatestNews;
