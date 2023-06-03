import path from 'path';
import {buildWebpackConfig} from "./config/build/buildWebpackConfig";
import {BuildEnv, BuildMode, BuildPaths} from "./config/build/types/config";

export default (env: BuildEnv) => {
  const paths: BuildPaths = {
    entry: path.resolve(__dirname, 'src', 'index.tsx'),
    output: path.resolve(__dirname, 'build'),
    html: path.resolve(__dirname, 'public', 'index.html'),
    src: path.resolve(__dirname, 'src')
  }
  const mode: BuildMode = env.mode || 'development'
  const isDev = mode === 'development'
  const port = env.port || 3000

  return buildWebpackConfig({
    mode,
    paths,
    isDev,
    port
  })
}