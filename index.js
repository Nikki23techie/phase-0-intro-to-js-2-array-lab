// Write your solution here!
let cats = []
cats.push("Milo", "Otis", "Garfield");
function destructivelyAppendCat(newElem) {
    cats.push(newElem);
}

function destructivelyPrependCat(first) {
    let cats_temp = cats.slice()
    cats.length = 0
    cats.push(first)
    for (const elem of cats_temp) {
        cats.push(elem)
    }
}

function destructivelyRemoveLastCat() {
    cats.pop()

}

function destructivelyRemoveFirstCat() {
    let cats_temp = cats.slice(1)
    cats.length = 0
    for (const elem of cats_temp) {
        cats.push(elem)
    }

}

function appendCat(newElem) {
    let cats_temp = cats.slice()
    cats_temp.push(newElem)
    return cats_temp

}

function prependCat(first) {
    let cats_temp = [first]
    for (const elem of cats) {
        cats_temp.push(elem)
    }

    return cats_temp

}

function removeLastCat() {
    let cats_temp = cats.slice()
    cats_temp.pop()
    return cats_temp

}

function removeFirstCat() {
    let cats_temp = cats.slice(1)
    return cats_temp

}

