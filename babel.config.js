module.exports = {
  presets: [
    [
      'next/babel',
      {
        'preset-env': {
          targets: {
            ie: '11',
          },
        },
        'transform-runtime': {},
        'styled-jsx': {},
        'class-properties': {},
      },
    ],
    ['@babel/preset-env', { targets: { node: 'current' } }],
    '@babel/preset-typescript',
    '@babel/preset-react',
  ],
  plugins: [
    '@babel/plugin-transform-classes',
    '@babel/plugin-transform-spread',
    '@babel/plugin-proposal-object-rest-spread',
  ],
}
