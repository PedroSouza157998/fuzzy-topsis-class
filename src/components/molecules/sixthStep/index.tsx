import { useStore } from '@/lib/store';
import React from 'react';

export default function SixthStep() {
  const results = {
    classification: {
      A1: "Baixo_Risco",
      A2: "Médio_Risco",
      A3: "Alto_Risco",
    },
    proximities: {
      A1: {
        Baixo_Risco: 0.80,
        Médio_Risco: 0.55,
        Alto_Risco: 0.30,
      },
      A2: {
        Baixo_Risco: 0.60,
        Médio_Risco: 0.75,
        Alto_Risco: 0.50,
      },
      A3: {
        Baixo_Risco: 0.40,
        Médio_Risco: 0.65,
        Alto_Risco: 0.85,
      },
    },
    best_class_for_each_alternative: {
      A1: "Baixo_Risco",
      A2: "Médio_Risco",
      A3: "Alto_Risco",
    },
  };

  const store = useStore()
  console.log(store)
  return (
    <div className="p-6 font-sans max-w-4xl rounded-lg border shadow-2xl m-auto">
      <h1 className="text-3xl font-bold text-center mb-6 text-gray-800">Resultados</h1>

      <div className="mb-8">
        <h2 className="text-2xl font-semibold text-gray-700 mb-4">Classificação</h2>
        <ul className="list-disc list-inside bg-white p-4 rounded shadow">
          {Object.entries(results.classification).map(([key, value]) => (
            <li key={key} className="text-gray-600">
              <span className="font-bold">{key}:</span> {value}
            </li>
          ))}
        </ul>
      </div>

      <div className="mb-8">
        <h2 className="text-2xl font-semibold text-gray-700 mb-4">Proximidades</h2>
        <div className="overflow-x-auto">
          <table className="table-auto w-full border-collapse bg-white rounded shadow">
            <thead>
              <tr className="bg-gray-200 text-gray-700">
                <th className="border px-4 py-2">Alternativa</th>
                <th className="border px-4 py-2">Baixo Risco</th>
                <th className="border px-4 py-2">Médio Risco</th>
                <th className="border px-4 py-2">Alto Risco</th>
              </tr>
            </thead>
            <tbody>
              {Object.entries(results.proximities).map(([key, value], index) => (
                <tr key={key} className={index % 2 === 0 ? "bg-gray-50" : "bg-white"}>
                  <td className="border px-4 py-2 text-center font-medium text-gray-700">{key}</td>
                  <td className="border px-4 py-2 text-center">{value.Baixo_Risco}</td>
                  <td className="border px-4 py-2 text-center">{value.Médio_Risco}</td>
                  <td className="border px-4 py-2 text-center">{value.Alto_Risco}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      <div>
        <h2 className="text-2xl font-semibold text-gray-700 mb-4">Melhor Classe para Cada Alternativa</h2>
        <ul className="list-disc list-inside bg-white p-4 rounded shadow">
          {Object.entries(results.best_class_for_each_alternative).map(([key, value]) => (
            <li key={key} className="text-gray-600">
              <span className="font-bold">{key}:</span> {value}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}

