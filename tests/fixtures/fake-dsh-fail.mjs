if (process.argv.includes('--version')) {
  console.log('1.0.0')
  process.exit(0)
}

console.error('file:///runtime/dsh-app-boot/lib/index.js:1186')
console.error('                throw new Error(`boot failed`, { cause });')
console.error('')
console.error('Error: dsh: plugin tree failed to load: the value for "version" in C:\\Users\\example\\.dsh\\.credentials.yaml must be a string')
process.exit(1)
