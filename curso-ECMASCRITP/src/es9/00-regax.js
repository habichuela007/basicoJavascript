//capturar engrupos valores que están en una expresión regular
const regex = /(\d{4})-(\d{2})-(\d{2})/;//esta expresión es una fecha

const matchers = regex.exec('2022-01-01');
console.table(matchers);