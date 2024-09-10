export const getCripto = async () => {
  try {
    const result = await fetch(
      'https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&per_page=10'
    )
    if (!result.ok) {
      throw new Error('Error fetching data')
    }
    const data = await result.json()
    return data
  } catch (error) {
    if (error instanceof Error) {
      throw new Error(error.message)
    }
  }
}
