import { useEffect, useState } from 'react'
import { Criptos } from './types/criptos'
import { getCripto } from './action'

function App() {
  const [cripto, setCripto] = useState([])
  useEffect(() => {
    const fetch = async () => {
      try {
        const result = await getCripto()
        setCripto(result)
      } catch (error) {
        console.error(error)
      }
    }
    fetch()
  }, [])
  return (
    <main className="bg-black h-screen w-screen flex items-center justify-center">
      <div className="flex flex-col justify-center w-[50%]">
        <h1 className="text-white text-5xl">Top 10 criptomonedas</h1>
        <table className="table-auto text-white mt-6 text-xs">
          <thead className="">
            <tr className="border-y border-y-gray-50 ">
              <th className="p-2 text-left">Assets</th>
              <th className="text-right">Price</th>
              <th className="text-right">24H</th>
              <th className="text-right">Market Cap</th>
            </tr>
          </thead>
          <tbody className="text-right text-gray-400">
            {cripto.map((criptos: Criptos) => (
              <tr key={criptos.id}>
                <td className="flex gap-5 p-2">
                  <img
                    src={criptos.image}
                    className="w-5"
                    alt={criptos.symbol}
                  />
                  {criptos.id} {criptos.symbol}
                </td>
                <td>
                  {new Intl.NumberFormat('en-US', {
                    style: 'currency',
                    currency: 'USD',
                  }).format(criptos.current_price)}
                </td>
                <td
                  className={`
                    text-right
                    ${
                      criptos.price_change_percentage_24h > 0
                        ? 'text-green-500'
                        : 'text-red-600'
                    }
                  `}
                >
                  <div className="flex items-center justify-end gap-2">
                    {criptos.price_change_percentage_24h > 0 ? (
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        x="0px"
                        y="0px"
                        width="20"
                        height="20"
                        viewBox="0 0 48 48"
                        fill="currentColor"
                      >
                        <path
                          fillRule="evenodd"
                          d="M38.55,39L9.449,38.999 c-1.067,0-1.983-0.531-2.516-1.454C6.4,36.621,6.4,35.564,6.934,34.64L21.486,9.451C22.019,8.528,22.934,8,24.001,8 c1.066,0,1.982,0.528,2.515,1.451l14.549,25.19c0.535,0.924,0.535,1.982,0.001,2.905C40.533,38.469,39.617,39,38.55,39z"
                          clipRule="evenodd"
                        ></path>
                      </svg>
                    ) : (
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        x="0px"
                        y="0px"
                        width="20"
                        height="20"
                        viewBox="0,0,256,256"
                        fill="currentColor"
                      >
                        <g
                          fill-rule="evenodd"
                          stroke="none"
                          stroke-width="1"
                          stroke-linecap="butt"
                          stroke-linejoin="miter"
                          stroke-miterlimit="10"
                          stroke-dasharray=""
                          stroke-dashoffset="0"
                          font-family="none"
                          font-weight="none"
                          font-size="none"
                          text-anchor="none"
                        >
                          <g transform="translate(255.99867,250.66667) rotate(180) scale(5.33333,5.33333)">
                            <path d="M38.55,39l-29.101,-0.001c-1.067,0 -1.983,-0.531 -2.516,-1.454c-0.533,-0.924 -0.533,-1.981 0.001,-2.905l14.552,-25.189c0.533,-0.923 1.448,-1.451 2.515,-1.451c1.066,0 1.982,0.528 2.515,1.451l14.549,25.19c0.535,0.924 0.535,1.982 0.001,2.905c-0.533,0.923 -1.449,1.454 -2.516,1.454z"></path>
                          </g>
                        </g>
                      </svg>
                    )}
                    {criptos.price_change_percentage_24h.toFixed(2)}%
                  </div>
                </td>
                <td>
                  {new Intl.NumberFormat('en-US', {
                    style: 'currency',
                    currency: 'USD',
                  }).format(criptos.market_cap)}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </main>
  )
}

export default App
