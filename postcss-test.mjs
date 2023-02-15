import fs from 'node:fs/promises'
import postcss from 'postcss'
import postcssImport from 'postcss-import'
import postcssImportExtGlob from 'postcss-import-ext-glob'

async function test() {
  const input = './src/style.css'
  const output = './postcss-test.output.css'
  const css = await fs.readFile(input, { encoding: 'utf-8' })


  const result = await postcss([
    postcssImportExtGlob(),
    postcssImport(),
  ]).process(css, {
    from: input,
    to: output
  })

  fs.writeFile(output, result.css, { encoding: 'utf-8' })
}

test()
