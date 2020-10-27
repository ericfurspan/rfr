module.exports = {
  extends: ['standard', 'standard-react'],
  parser: 'babel-eslint',
  rules: {
    'react/prop-types': 0,
    'semi': [2, 'always'],
  },
  settings: {
    react: {
      pragma: 'React',
      version: '16.8.6'
    }
  }
}
