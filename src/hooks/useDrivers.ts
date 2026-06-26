import {useQuery} from '@tanstack/react-query'
import {fetchDrivers} from '../services/F1api'

export function useDrivers() {
  return useQuery({
    queryKey: ['drivers'],
    queryFn: fetchDrivers
  })
}