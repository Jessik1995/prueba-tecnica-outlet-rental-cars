import { useRouter } from 'next/router'
import { FormEvent, useState, useRef } from 'react'
import {
  MapPinIcon,
  CalendarIcon,
  ClockIcon,
} from '@heroicons/react/24/outline'

export const SearchForm = () => {
  const router = useRouter()

  const [pickupDate, setPickupDate] = useState('')
  const [dropoffDate, setDropoffDate] = useState('')
  const [error, setError] = useState<string | null>(null)

  const pickupDateRef = useRef<HTMLInputElement>(null)
  const dropoffDateRef = useRef<HTMLInputElement>(null)

  const today = new Date().toISOString().split('T')[0]

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault()

    if (dropoffDate < pickupDate) {
      setError('La fecha de devolución debe ser posterior a la de recogida')
      return
    }

    router.push('/results')
  }

  const hours = Array.from({ length: 24 * 2 }, (_, i) => {
    const totalMinutes = i * 30
    const hour = Math.floor(totalMinutes / 60)
    const minutes = totalMinutes % 60

    const period = hour >= 12 ? 'PM' : 'AM'
    const displayHour = hour % 12 === 0 ? 12 : hour % 12

    return {
      value: `${String(hour).padStart(2, '0')}:${String(minutes).padStart(2, '0')}`,
      label: `${String(displayHour).padStart(2, '0')}:${String(minutes).padStart(2, '0')} ${period}`,
    }
  })

  return (
    <form onSubmit={handleSubmit} className="w-full">
      <h2 className="text-lg font-semibold text-gray-900 mb-4">
        Busca tu auto
      </h2>

      <div className="rounded-xl border border-gray-200 overflow-hidden">
        <div className="grid grid-cols-1 divide-y">

          <div className="px-4 py-3">
            <label htmlFor="location" className="text-xs text-gray-500">
              Ciudad o aeropuerto
            </label>

            <div className="mt-1 flex items-center gap-3 w-full">
              <MapPinIcon className="h-5 w-5 shrink-0 text-purple-600" />
              <input
                id="location"
                type="text"
                required
                placeholder="Ej: Miami (MIA)"
                className="flex-1 border-none p-0 text-base font-medium text-gray-900 placeholder-gray-400 focus:outline-none"
              />
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 divide-y md:divide-y-0 md:divide-x">
            <div className="px-4 py-3">
              <label htmlFor="pickup-date" className="text-xs text-gray-500">
                Fecha de recogida
              </label>

              <div
                className="mt-1 flex items-center gap-3 w-full cursor-pointer"
                onClick={() => {
                  pickupDateRef.current?.showPicker?.()
                  pickupDateRef.current?.focus()
                }}
              >
                <CalendarIcon className="h-5 w-5 shrink-0 text-purple-600" />
                <input
                  ref={pickupDateRef}
                  id="pickup-date"
                  type="date"
                  required
                  min={today}
                  value={pickupDate}
                  onChange={(e) => {
                    setPickupDate(e.target.value)
                    setError(null)
                  }}
                  className="flex-1 border-none bg-transparent p-0 text-base font-medium text-gray-900 focus:outline-none
                  appearance-none
                  [&::-webkit-calendar-picker-indicator]:hidden"
                />
              </div>
            </div>

            <div className="px-4 py-3">
              <label htmlFor="pickup-time" className="text-xs text-gray-500">
                Hora
              </label>

              <div className="mt-1 flex items-center gap-3 w-full">
                <ClockIcon className="h-5 w-5 shrink-0 text-purple-600" />
                <select
                  id="pickup-time"
                  required
                  className="flex-1 bg-transparent border-none p-0 text-base font-medium text-gray-900 focus:outline-none"
                >
                  {hours.map((h) => (
                    <option key={h.value} value={h.value}>
                      {h.label}
                    </option>
                  ))}
                </select>
              </div>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 divide-y md:divide-y-0 md:divide-x">
            <div className="px-4 py-3">
              <label htmlFor="dropoff-date" className="text-xs text-gray-500">
                Fecha de devolución
              </label>

              <div
                className="mt-1 flex items-center gap-3 w-full cursor-pointer"
                onClick={() => {
                  dropoffDateRef.current?.showPicker?.()
                  dropoffDateRef.current?.focus()
                }}
              >
                <CalendarIcon className="h-5 w-5 shrink-0 text-purple-600" />
                <input
                  ref={dropoffDateRef}
                  id="dropoff-date"
                  type="date"
                  required
                  min={pickupDate || today}
                  value={dropoffDate}
                  onChange={(e) => {
                    setDropoffDate(e.target.value)
                    setError(null)
                  }}
                  className="flex-1 border-none bg-transparent p-0 text-base font-medium text-gray-900 focus:outline-none
                  appearance-none
                  [&::-webkit-calendar-picker-indicator]:hidden"
                />
              </div>
            </div>

            <div className="px-4 py-3">
              <label htmlFor="dropoff-time" className="text-xs text-gray-500">
                Hora
              </label>

              <div className="mt-1 flex items-center gap-3 w-full">
                <ClockIcon className="h-5 w-5 shrink-0 text-purple-600" />
                <select
                  id="dropoff-time"
                  required
                  className="flex-1 bg-transparent border-none p-0 text-base font-medium text-gray-900 focus:outline-none"
                >
                  {hours.map((h) => (
                    <option key={h.value} value={h.value}>
                      {h.label}
                    </option>
                  ))}
                </select>
              </div>
            </div>
          </div>

        </div>
      </div>

      {error && (
        <p className="mt-3 text-sm text-red-500">
          {error}
        </p>
      )}

      <div className="mt-4 flex flex-col md:flex-row md:justify-end">
        <button
          type="submit"
          className="w-full md:w-auto rounded-full bg-[#6c42f9] px-10 py-3 text-sm font-semibold text-white shadow-lg hover:opacity-90 transition"
        >
          Buscar autos
        </button>
      </div>
    </form>
  )
}
