const input = process.argv.slice(2);

for (let i of input) {
  setTimeout(() => {
    process.stdout.write('\x07');
  }, i * 1000);
}