import { babel } from '@rollup/plugin-babel';
import { nodeResolve } from '@rollup/plugin-node-resolve';


const extensions = [".ts", ".tsx", ".js"]

const config = {
  input: './src/Dash.tsx',
  output: {
    file: 'dist/index.js',
    format: 'cjs',
    exports: 'default',
  },
  plugins: [
    nodeResolve({
      extensions
    }),
    babel({
      extensions
    })
  ]
};

export default config;