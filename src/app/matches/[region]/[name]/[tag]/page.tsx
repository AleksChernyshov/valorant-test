'use client'

import CenterLoader from "@/components/Loader/Loader";
import PlayerKDA from "@/components/PlayerKDA/PlayerKDA";
import { useGetMatchesQuery } from "@/redux/valorantApi";
import { IMatch } from "@/types/matches";
import { Box, Center, Divider, Flex, Text } from "@mantine/core";
import classes from "./Matches.module.css";

type Props = {
  params: {
    region: string,
    name: string,
    tag: string,
  }
}

const Page = ({ params: { region, name, tag } }: Props) => {

  const { data, error, isLoading } = useGetMatchesQuery({ region, name, tag });
  
  const matches = data ? data.data : error?.data;
  const decodedName = decodeURIComponent(name);

  if (isLoading) return <CenterLoader />;

  if (!matches || matches.length === 0) {
    return <CenterLoader />;
  }

  return (
    <Flex direction="column" gap="xl" className={classes.matchesContainer}>
      {matches.map((match: IMatch, i: number) => {
        return (
          <Center key={i} className={classes.matchCard}>
            <Flex direction="column" w="100%">
              <Box className={classes.matchHeader}>
                <Flex justify="space-between">
                  <Text size="md">Map: {match.metadata.map}</Text>
                  <Text size="md">{match.metadata.game_start_patched}</Text>
                </Flex>
              </Box>

             <Flex className={classes.teamsContainer}>
                <Flex direction="column" className={classes.teamBox} style={{ borderColor: "#00ffcc" }}>
                  <Box className={classes.teamHeader} style={{ backgroundColor: "#003366" }}>
                    <Flex justify="space-between">
                      <Text fw={700} color="white">Blue Team</Text>
                      <Text fw={700} color={match.teams.blue.has_won ? "#00ffcc" : "#ff4655"}>
                        {match.teams.blue.has_won ? "WON" : "LOST"}
                      </Text>
                    </Flex>
                  </Box>

                  {match.players.blue.map((player, i) => (
                    <PlayerKDA player={player} key={i} decodedName={decodedName} blue />
                  ))}
                </Flex>

                <Flex direction="column" className={classes.teamBox} style={{ borderColor: "#ff4655" }}>
                  <Box className={classes.teamHeader} style={{ backgroundColor: "#660000" }}>
                    <Flex justify="space-between">
                      <Text fw={700} color="white">Red Team</Text>
                      <Text fw={700} color={match.teams.red.has_won ? "#ff4655" : "#00ffcc"}>
                        {match.teams.red.has_won ? "WON" : "LOST"}
                      </Text>
                    </Flex>
                  </Box>
                  {match.players.red.map((player, i) => (
                    <PlayerKDA player={player} key={i} decodedName={decodedName} />
                  ))}
                </Flex>
              </Flex>

            </Flex>
          </Center>
        );
      })}
    </Flex>
  );
};

export default Page;
