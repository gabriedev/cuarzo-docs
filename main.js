import { glob } from 'glob'
import path from 'path'
import fs from 'fs/promises'
import markdown from '@wcj/markdown-to-html'

const resolve = (file) => path.join(process.cwd(), file)
const dirname = path.dirname(import.meta.url)

const files = await glob('**/*.md', {
  ignore: ['node_modules/**/*', '*.md', '_**/*.md']
})

let template = await fs.readFile(resolve('_template/page.html'), 'utf-8')

const filesByLang = files.map((path) => ({
  path,
  title: path
    .replace('.md', '')
    .replace(/(_es|_ES)/, '')
    .split('/')
    .pop()
    .split(/-|_/)
    .join(' '),
  lang: path.endsWith('_es.md') || path.endsWith('_ES.md') ? 'es' : 'en'
}))

const indexInSpanish = filesByLang
  .filter((file) => file.lang === 'es')
  .map(generateIndex)
const indexInEnglish = filesByLang
  .filter((file) => file.lang === 'en')
  .map(generateIndex)

const docsInSpanish = filesByLang
  .filter((file) => file.lang === 'es')
  .map(defDocs)

const docsInEnglish = filesByLang
  .filter((file) => file.lang === 'en')
  .map(defDocs)

await Promise.all([docsInSpanish, docsInEnglish])

function generateIndex({ lang, path: file, title }) {
  const path = file
    .replace('.md', '.html')
    .split(/_es|_ES/)
    .join('')

  return `
    <li>
      <a class="nav-link" href="${dirname}/build/${lang}/${path}">
        <span class="nav-item">${title}</span>
      </a>
    </li>
    `.trim()
}

async function defDocs({ path: file, title, lang }) {
  const text = await fs.readFile(file, 'utf-8')
  const content = markdown(text)

  const filename = resolve(
    `build/${lang}/${file.replace('.md', '.html').replace(/(_es|_ES)/, '')}`
  )

  const html = template
    .replace('{{lang}}', lang)
    .replace('{{title}}', title)
    .replace('{{index}}', lang === 'es' ? indexInSpanish : indexInEnglish)
    .replace('{{content}}', content)

  await fs.mkdir(path.dirname(filename), { recursive: true })
  await fs.writeFile(filename, html)
}
