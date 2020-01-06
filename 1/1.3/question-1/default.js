function isTwoCodeUnit(character) {
  return character.codePointAt(0) > 0xFFFF;
}


console.log("𠮳", isTwoCodeUnit("𠮳"));
console.log("中", isTwoCodeUnit("中"));





