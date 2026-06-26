import {useQuery} from '@tanstack/react-query'
import {fetchRaceResults} from '../services/F1api'

export function useRaceResults() {
  return useQuery({
    queryKey: ['raceResults'],
    queryFn: fetchRaceResults
  })
}