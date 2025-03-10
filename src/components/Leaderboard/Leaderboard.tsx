'use client'

import { Table, Progress, Anchor, Text, Group, Box, Container } from '@mantine/core';
import classes from './Leaderboard.module.css';
import { Players } from '@/types/players';
import Link from 'next/link';

type Props = {
  currentRegion: string,
  players: Players
}

const Leaderboard = ({ currentRegion, players }: Props) => {
  if (!players || players.length === 0) return null;

  const maxRankedRating = Math.max(...players.map((player) => player.rankedRating));

  const rows = players.map((player) => {
    const positiveRating = (player.rankedRating / maxRankedRating) * 100;
    const negativeRating = 100 - positiveRating;

    return (
      <Table.Tr key={player.leaderboardRank} className={classes.row}>
        <Table.Td className={classes.cell}>{player.leaderboardRank}</Table.Td>
        <Table.Td className={classes.cell}>
          <Anchor component="button" fz="sm" c="red">
            <Link href={`/matches/${currentRegion}/${player.gameName}/${player.tagLine}`} className={classes.link}>
              {player.gameName}
            </Link>
          </Anchor>
        </Table.Td>
        <Table.Td className={classes.cell}>
          <Text fz="xs" c="gray" fw={700}>
            {player.tagLine}
          </Text>
        </Table.Td>
        <Table.Td className={classes.cell}>{Intl.NumberFormat().format(player.numberOfWins)}</Table.Td>
        <Table.Td className={classes.cell}>{player.rankedRating}</Table.Td>
        <Table.Td className={classes.cell}>
          <Group justify="space-between">
            <Text fz="xs" c="teal" fw={700}>
              {positiveRating.toFixed(0)}%
            </Text>
            <Text fz="xs" c="red" fw={700}>
              {negativeRating.toFixed(0)}%
            </Text>
          </Group>
          <Progress.Root>
            <Progress.Section className={classes.progress} value={positiveRating} color="teal" />
            <Progress.Section className={classes.progress} value={negativeRating} color="red" />
          </Progress.Root>
        </Table.Td>
      </Table.Tr>
    );
  });

  return (
    <Container className={classes.leaderboardContainer}>
      <Box className={classes.leaderboardBox}>
        <Text fw={700} fz="xl" ta="center" c="red" className={classes.title}>
          VALORANT LEADERBOARD
        </Text>
        <Table.ScrollContainer minWidth={800}>
          <Table className={classes.table} verticalSpacing="xs">
            <Table.Thead>
              <Table.Tr className={classes.headerRow}>
                <Table.Th>Rank</Table.Th>
                <Table.Th>Game Name</Table.Th>
                <Table.Th>Tag Line</Table.Th>
                <Table.Th>Number Of Wins</Table.Th>
                <Table.Th>Ranked Rating</Table.Th>
                <Table.Th>Rating Distribution</Table.Th>
              </Table.Tr>
            </Table.Thead>
            <Table.Tbody>{rows}</Table.Tbody>
          </Table>
        </Table.ScrollContainer>
      </Box>
    </Container>
  );
}

export default Leaderboard;
