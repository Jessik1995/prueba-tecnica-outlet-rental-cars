import { useSelector } from 'react-redux'
import { RootState } from '@/store'
import { useRouter } from 'next/router'
import { useEffect } from 'react'
import Image from 'next/image'

export default function Summary() {
  const router = useRouter()

  const { selected } = useSelector(
    (state: RootState) => state.search
  )

  useEffect(() => {
    if (!selected) {
      router.push('/')
    }
  }, [selected, router])

  if (!selected) return null

  return (
    <section className="relative flex pt-24 bg-gray-100 h-[calc(100vh-52px)] pb-12">
      <div className="relative z-10 w-full max-w-7xl mx-auto px-6 mt-4 grid grid-cols-1 md:grid-cols-2 gap-6 h-max">

        <div className="bg-white rounded-xl border border-gray-200 shadow-sm p-6 h-max">
          <h1 className="text-2xl font-bold text-gray-900 mb-6">
            Resumen de tu reserva
          </h1>

          <div className="flex flex-col md:flex-row gap-6 h-max">
            <div className="md:w-[260px] flex items-center justify-center bg-gray-50 rounded-lg p-4">
              <Image
                src={selected.image}
                width={260}
                height={160}
                alt={selected.name}
                className="max-h-36 object-contain"
              />
            </div>

            <div className="flex-1">
              <h2 className="text-xl font-semibold text-gray-900">
                {selected.name}
              </h2>

              <p className="text-sm text-gray-500 mt-1">
                Compacto · A/C · Automático
              </p>

              <div className="mt-6 border-t pt-4">
                <h3 className="text-sm font-semibold text-gray-900 mb-2">
                  Incluido en el precio
                </h3>

                <ul className="text-sm text-gray-600 space-y-1">
                  <li>✔ Seguro del auto (LDW)</li>
                  <li>✔ Cobertura por robo</li>
                  <li>✔ Kilómetros ilimitados</li>
                  <li>✔ Sin deducibles</li>
                </ul>
              </div>
            </div>
          </div>
        </div>

        <div className="bg-white rounded-xl border border-gray-200 shadow-sm p-6 h-max">
          <h2 className="text-lg font-semibold text-gray-900 mb-4">
            Total a pagar
          </h2>

          <div className="border-t pt-4 flex justify-between items-center">
            <span className="text-base font-semibold text-gray-900">
              Total
            </span>
            <span className="text-xl font-bold text-green-600">
              COP ${selected.price}
            </span>
          </div>

          <button className="mt-6 w-full bg-violet-600 hover:bg-violet-700 text-white font-semibold py-3 rounded-lg transition">
            Continuar
          </button>
        </div>
      </div>
    </section>
  )
}
