import Image from 'next/image'
import { Vehicle } from '@/types/vehicles'

interface VehicleCardProps {
  vehicle: Vehicle
  onSelect: (vehicle: Vehicle) => void
}

export const VehicleCard = ({ vehicle, onSelect }: VehicleCardProps) => {
  return (
    <div className="flex flex-col md:flex-row bg-white rounded-xl border border-gray-200 shadow-sm overflow-hidden">
      
      <div className="md:w-[260px] flex items-center justify-center bg-gray-50 p-4">
        <Image
          src={vehicle.image}
          width={260}
          height={160}
          alt={vehicle.name}
          className="max-h-36 object-contain"
        />
      </div>

      <div className="flex-1 p-6 flex flex-col justify-between text-center md:text-left">
        <div>
          <h3 className="text-lg font-semibold text-gray-900">
            {vehicle.name}
          </h3>

          <p className="text-sm text-gray-500 mt-1">
            Compacto · A/C · Automático
          </p>

          <div className="mt-4 flex flex-wrap justify-center md:justify-start gap-2">
            <span className="text-xs px-3 py-1 rounded-full border border-green-500 text-green-600">
              Todo incluido
            </span>
          </div>
        </div>
      </div>

      <div className="md:w-[280px] p-6 flex flex-col justify-between border-t md:border-t-0 md:border-l border-gray-200">
        <div className="text-center md:text-right">
          <p className="text-xs text-gray-400 line-through">
            COP ${(vehicle.price * 1.4).toFixed(0)}
          </p>

          <p className="text-xl font-bold text-gray-900">
            COP ${vehicle.price}
          </p>

          <p className="text-xs text-gray-500">
            Tarifa diaria
          </p>
        </div>

        <button
          onClick={() => onSelect(vehicle)}
          className="mt-4 w-full bg-violet-600 hover:bg-violet-700 text-white font-semibold py-3 rounded-lg transition"
        >
          Reservar ahora
        </button>
      </div>
    </div>
  )
}
