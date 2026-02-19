import { vehiclesMock } from '@/mocks/vehicles.mock'
import { Vehicle } from '@/types/vehicles'

export const fetchVehicles = async (): Promise<Vehicle[]> => {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(vehiclesMock)
    }, 500)
  })
}
