

const { ENV } = process.env

module.exports = {
  'process.env.BACKEND_URL': ENV == 'dev' ? '' : '/portfolio/'
}