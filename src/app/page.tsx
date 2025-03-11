'use client'

import { useGetLeaderboardQuery } from '@/redux/valorantApi';
import RegionTabs from '@/components/Tabs/RegionTabs';
import { useEffect, useState } from 'react';
import Leaderboard from '@/components/Leaderboard/Leaderboard';
import CenterLoader from '@/components/Loader/Loader';
import { Box } from '@mantine/core';
import { FetchBaseQueryError } from '@reduxjs/toolkit/query';

export default function Home() {
  const [currentRegion, setCurrentRegion] = useState('eu');

  const [isFetchingDown, setIsFetchingDown] = useState(false);
  const [isFetchingUp, setIsFetchingUp] = useState(false);
  const [currentPostStart, setCurrentPostStart] = useState(0);

  const { data, error, isLoading } = useGetLeaderboardQuery({
    start: currentPostStart,
    region: currentRegion
  });

  const scrollHandler = (e: any): void => {
    const { scrollTop, scrollHeight } = e.target.documentElement;
    const atTop = scrollTop < 50;
    const atBottom = scrollHeight - scrollTop - window.innerHeight < 50;

    if (atTop) setIsFetchingUp(true);
    if (atBottom) setIsFetchingDown(true);
  };

  useEffect(() => {
    document.addEventListener('scroll', scrollHandler);
    return () => document.removeEventListener('scroll', scrollHandler);
  }, []);

  useEffect(() => {
    if (isFetchingDown) {
      setCurrentPostStart((prev) => (prev + 1000 <= 15000 ? prev + 1000 : prev));
      setIsFetchingDown(false);
    }
  }, [isFetchingDown]);

  useEffect(() => {
    if (isFetchingUp) {
      setCurrentPostStart((prev) => (prev - 1000 >= 0 ? prev - 1000 : prev));
      setIsFetchingUp(false);
    }
  }, [isFetchingUp]);

  const fallbackPlayers =
  error && typeof error === "object" && "data" in error
    ? (error as any)?.data?.fallbackPlayers ?? []
    : [];


  return (
    <Box
      style={{
        background: '#0f1923',
        minHeight: '100vh',
        color: 'white',
        padding: '20px',
      }}
    >
      <RegionTabs setCurrentRegion={setCurrentRegion} />
      {isLoading ? (
        <CenterLoader />
      ) : (
        <Leaderboard
          currentRegion={currentRegion}
          players={data ? data.players : fallbackPlayers}
        />
      )}
    </Box>
  );
}
