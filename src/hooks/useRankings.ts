import {useQuery} from '@tanstack/react-query'
import {fetchDriverStandings, fetchConstructorStandings} from '../services/F1api'

export function useDriverStandings() {
  return useQuery({
    queryKey: ['driverStandings'],
    queryFn: fetchDriverStandings
  })
}

export function useConstructorStandings() {
  return useQuery({
    queryKey: ['constructorStandings'],
    queryFn: fetchConstructorStandings
  })
}
