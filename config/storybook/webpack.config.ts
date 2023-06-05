import type webpack from 'webpack'
import { type BuildPaths } from '../build/types/config'
import path from 'path'
import { buildCssLoader } from '../build/loaders/buildCssLoader'

export default ({ config }: { config: webpack.Configuration }) => {
  const paths: BuildPaths = {
    src: path.resolve(__dirname, '..', '..', 'src'),
    output: '',
    entry: '',
    html: ''
  }

  config.resolve.modules.push(paths.src)
  config.resolve.extensions.push('.ts', '.tsx')

  config.module.rules = config.module.rules.map((rule: webpack.RuleSetRule) => {
    // eslint-disable-next-line
    if (/svg/.test(rule.test as string)) {
      return { ...rule, exclude: /\.svg$/i }
    }
    return rule
  })

  config.module.rules.push({
    test: /\.svg$/,
    use: ['@svgr/webpack']
  })

  config.module.rules.push(buildCssLoader(true))

  return config
}
