const btn = document.querySelector("#convert-btn");
const input = document.querySelector("#text");
const camelCase = document.querySelector("#camel-case");
const pascalCase = document.querySelector("#pascal-case");
const snakeCase = document.querySelector("#snake-case");
const screamingSnakeCase = document.querySelector("#screaming-snake-case");
const kebabCase = document.querySelector("#kebab-case");
const screamingKebabCase = document.querySelector("#screaming-kebab-case");
btn.addEventListener("click", function convert() {
    let text = input.value;
    function removeSpaces(text) {
        return text = text.replaceAll(" ", "")
    }
    function pascalCase(text) {
        text.
    }
    camelCase.innerText = text;
    pascalCase.innerText = text;
    snakeCase.innerText = text;
    screamingSnakeCase.innerText = text;
    kebabCase.innerText = text;
    screamingKebabCase.innerText = text;
    input.value = "";
})