module.exports = {
  extends: ['standard', 'standard-react', 'plugin:import/errors', 'plugin:import/warnings'],
  rules: {
    'react/prop-types': 0,
    'semi': [2, 'always'],
  },
  settings: {
    react: {
      pragma: 'React',
      version: '16.8.4'
    }
  }
}
