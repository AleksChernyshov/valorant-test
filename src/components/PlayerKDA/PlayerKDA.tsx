import React from 'react'
import { Avatar, Box, Flex, Text } from '@mantine/core'
import { IPlayer } from '@/types/matches'
import s from './PlayerKDA.module.css'

type Props = {
  player: IPlayer, 
  decodedName: string,
  blue?: boolean
}

const PlayerKDA = ({ player, decodedName, blue }: Props) => {
  const isSelectedPlayer = player.name === decodedName;

  return (
    <Box className={`${s.playerCard} ${isSelectedPlayer ? s.highlight : ""}`} style={{ borderColor: blue ? "#00ffcc" : "#ff4655" }}>
      <Flex direction="column">
        <Flex gap="md" justify="space-between" align="center">
          <Flex gap="sm" align="center">
            <Avatar src={player.assets?.agent?.small} alt={player.character} size="lg" />
            <Text size="md" fw={700} color="white">{player.character}</Text>
          </Flex>

          <Flex gap="sm" align="center">
            <Text size="md" fw={isSelectedPlayer ? 900 : 500} color={isSelectedPlayer ? "#ff4655" : "white"}>
              {player.name}
            </Text>
            <Avatar src={player.assets?.card?.small} alt={player.name} size="lg" />
          </Flex>
        </Flex>

        {/* KDA */}
        <Flex justify="space-around" mt="sm">
          <Text size="md" color="#00ffcc">Kills: {player.stats?.kills}</Text>
          <Text size="md" color="#ff4655">Deaths: {player.stats?.deaths}</Text>
          <Text size="md" color="#ffffff">Assists: {player.stats?.assists}</Text>
        </Flex>
      </Flex>
    </Box>
  )
}

export default PlayerKDA;
