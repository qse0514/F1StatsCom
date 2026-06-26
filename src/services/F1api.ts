import type { Driver } from '../types/driver'
import type { Race, DriverStanding, ConstructorStanding } from '../types/race'

const DRIVER_URL = 'https://api.openf1.org/v1'

export async function fetchDrivers(): Promise<Driver[]> {
  const res = await fetch(`${DRIVER_URL}/drivers?session_key=latest`)
  if (!res.ok) throw new Error(`Failed to fetch drivers: ${res.status}`)
  return res.json()
}

export async function fetchRaceResults(): Promise<Race[]> {
  const year = new Date().getFullYear()
  const res = await fetch(
    `https://api.jolpi.ca/ergast/f1/${year}/results.json?limit=600`
  )
  if (!res.ok) throw new Error(`Failed to fetch race results: ${res.status}`)
  const data = await res.json()
  return data.MRData.RaceTable.Races
}

export async function fetchDriverStandings(): Promise<DriverStanding[]> {
  const year = new Date().getFullYear()
  const res = await fetch(
    `https://api.jolpi.ca/ergast/f1/${year}/driverStandings.json`
  )
  if (!res.ok) throw new Error('Failed to fetch driver standings')
  const data = await res.json()
  return data.MRData.StandingsTable.StandingsLists[0].DriverStandings
}

export async function fetchConstructorStandings(): Promise<ConstructorStanding[]> {
  const year = new Date().getFullYear()
  const res = await fetch(
    `https://api.jolpi.ca/ergast/f1/${year}/constructorStandings.json`
  )
  if (!res.ok) throw new Error('Failed to fetch constructor standings')
  const data = await res.json()
  return data.MRData.StandingsTable.StandingsLists[0].ConstructorStandings
}

