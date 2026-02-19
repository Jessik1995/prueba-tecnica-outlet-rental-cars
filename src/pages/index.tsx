import { SearchForm } from '@/components/SearchForm/SearchForm'

export default function Home() {
  return (
    <section className="relative flex items-center min-h-screen max-h-[900px] pt-24 pb-[52px]">

      <div
        className="absolute inset-0 bg-cover bg-center h-full	w-full"
        style={{ backgroundImage: "url('/background.png')" }}
      />
    

      <div className="relative z-10 w-full max-w-7xl mx-auto px-6 mt-4">
        <div className="max-w-md text-white">
          <h1 className="text-5xl font-extrabold mb-4">
            Alquila tu auto ideal en minutos
          </h1>
          <p className="text-base text-gray-300 mb-2">
            Compara opciones, elige tu vehiculo y empieza tu viaje sun complicaciones
          </p>
        </div>

        <div className="mt-6 bg-white rounded-xl shadow-2xl p-6 max-w-4xl ">
          <SearchForm />
        </div>
      </div>
    </section>
  )
}
