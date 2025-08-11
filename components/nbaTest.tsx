"use client";
import React, { useEffect } from 'react';
import { getTeams, getPlayersByName, getMostRecentGames } from '../lib/nbaApi';

export default function NbaTest() {
  useEffect(() => {
    getMostRecentGames(); // This will log teams in the console
    console.log("fetched games")
  }, []);

  return <div>Check your browser console for NBA data logs.</div>;
}
