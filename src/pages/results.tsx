import { GetServerSideProps } from 'next'
import { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useRouter } from 'next/router'

import { fetchVehicles } from '@/services/vehicles.service'
import { Vehicle } from '@/types/vehicles'
import {
  setResults,
  selectVehicle,
} from '@/store/search/searchSlice'
import { RootState } from '@/store'
import { LoadingOverlay } from '@/components/LoadingOverlay'
import { VehicleCard } from '@/components/VehicleCard/VehicleCard'

interface ResultsProps {
  vehicles: Vehicle[]
}

export default function Results({ vehicles }: ResultsProps) {
  const dispatch = useDispatch()
  const router = useRouter()

  const { results, loading, error } = useSelector(
    (state: RootState) => state.search
  )

  useEffect(() => {
    if (vehicles.length) {
      dispatch(setResults(vehicles))
    }
  }, [dispatch, vehicles])

  if (loading) {
    return <LoadingOverlay />
  }

  if (error) {
    return (
      <main className="p-6 flex justify-center">
        <p className="text-red-500">{error}</p>
      </main>
    )
  }

  const handleSelect = (vehicle: Vehicle) => {
    dispatch(selectVehicle(vehicle))
    router.push('/summary')
  }

  return (
    <section className="relative flex items-center pt-24 pb-[52px] bg-gray-100">
      <div className="relative z-10 w-full max-w-7xl mx-auto px-6 mt-4">
        <h1 className="text-2xl font-bold mb-4 text-gray-900">
          Vehículos disponibles
        </h1>

        <div className="space-y-6">
          {results.map(vehicle => (
            <VehicleCard
              key={vehicle.id}
              vehicle={vehicle}
              onSelect={handleSelect}
            />
          ))}
        </div>
      </div>
    </section>
  )
}

export const getServerSideProps: GetServerSideProps = async () => {
  try {
    const vehicles = await fetchVehicles()

    return {
      props: {
        vehicles,
      },
    }
  } catch {
    return {
      props: {
        vehicles: [],
      },
    }
  }
}
