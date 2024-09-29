const target = "coursecareers";
const delimiter = "|";
const spacing = 1;

let result = "";

for (let i = 0; i < target.length; i++) {
  // hel
  if (i % spacing === 0 && i !== 0) {
    result += delimiter;
  }

  const char = target.charAt(i);
  result += char;
}

console.log(result);
