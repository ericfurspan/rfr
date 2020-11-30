module.exports = {
  extends: ['standard', 'standard-react', 'plugin:import/errors', 'plugin:import/warnings'],
  parser: 'babel-eslint',
  env: {
    browser: true,
  },
  rules: {
    'react/prop-types': 0,
    'semi': [2, 'always'],
    'comma-dangle': [2, 'always-multiline']
  },
  settings: {
    'import/resolver': {
      node: {
        extensions: ['.js', '.jsx'],
        paths: ['./src']
      }
    }
  }
}
