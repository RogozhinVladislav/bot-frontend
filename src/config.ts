const baseUrlClear = process.env.NODE_ENV === 'development' ? 'http://localhost:4000' : 'https://dry-dawn-93314.herokuapp.com'

export default {
  baseUrlClear,
  baseUrl: `${baseUrlClear}/v1`,
}
