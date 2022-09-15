//además de convertir objeto en erray puedo convertira array en objeto
const entries = new Map([["name", "Gabriel"], ["age", 37]]);
console.log(entries);
console.log(Object.fromEntries(entries));