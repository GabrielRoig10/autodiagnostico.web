export default function Home() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen py-2 bg-gray-100">
      <main className="flex flex-col items-center justify-center w-full flex-1 px-20 text-center">
        <h1 className="text-6xl font-bold text-blue-600">
          AutoDiagnostico.app
        </h1>
        
        <p className="mt-3 text-2xl">
          Tu aplicación para diagnóstico de averías de automóviles y motos
        </p>

        <div className="flex flex-wrap items-center justify-around max-w-4xl mt-6 sm:w-full">
          <a
            href="/diagnostico"
            className="p-6 mt-6 text-left border w-96 rounded-xl hover:text-blue-600 focus:text-blue-600"
          >
            <h3 className="text-2xl font-bold">Diagnóstico &rarr;</h3>
            <p className="mt-4 text-xl">
              Describe el problema de tu vehículo y obtén un diagnóstico preciso.
            </p>
          </a>

          <a
            href="/creditos"
            className="p-6 mt-6 text-left border w-96 rounded-xl hover:text-blue-600 focus:text-blue-600"
          >
            <h3 className="text-2xl font-bold">Comprar Créditos &rarr;</h3>
            <p className="mt-4 text-xl">
              Adquiere créditos para realizar diagnósticos de tus vehículos.
            </p>
          </a>
        </div>
      </main>

      <footer className="flex items-center justify-center w-full h-24 border-t">
        <p>© 2025 AutoDiagnostico.app - Todos los derechos reservados</p>
      </footer>
    </div>
  )
}
