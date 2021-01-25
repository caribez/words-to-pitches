
function processText() {

  var name = document.getElementById("input").value;

  name = name.replace(/ /g, '');
  name = name.toLowerCase();

 console.log(name);

  var useQuarterTones =
document.getElementById("qtone").checked;

document.getElementById("result").innerHTML = "";

if (useQuarterTones) {
processQuarterTones(name);
} else {
processChromatic(name);
}


}

function processChromatic(name) {

for (let i = 0; i < name.length; i++) {
  var ascii = name.charCodeAt(i);

  let pitchClass = toPitch(ascii);

  let pitchName = toPitchName(pitchClass);

document.getElementById("result").innerHTML += "character: " + name.charAt(i) + "<br>";
document.getElementById("result").innerHTML += "mapped pitch class: " + pitchClass + "<br>";
document.getElementById("result").innerHTML += "pitch name: " + pitchName + "<br><br>";
}
}

function processQuarterTones(name) {
for (let i = 0; i < name.length; i++) {
  var ascii = name.charCodeAt(i);

let pitchClass = toPitchQuarterTone(ascii);
let pitchName = toPitchNameQuarterTone(pitchClass);


document.getElementById("result").innerHTML += "character: " + name.charAt(i) + "<br>";
document.getElementById("result").innerHTML += "mapped pitch class: " + pitchClass + "<br>";
document.getElementById("result").innerHTML += "pitch name: " + pitchName + "<br><br>";
}
}

function toPitch(ascii) {
  var normalized = -1;

  // if character was "å"
  if (ascii == 229) {
    normalized = 27;
  }

  // if character was "ä"
  else if (ascii == 228) {
    normalized = 27;
  }

  // if character was "ö"
  else if (ascii == 246) {
    normalized = 28;
  }
  // assume character is in english alphabet
  else {
     normalized = ascii - "a".charCodeAt(0);
  }
  var pitch = normalized % 12;
  return pitch;
}

function toPitchQuarterTone(ascii) {
  var normalized = -1;

  // if character was "å"
  if (ascii == 229) {
    normalized = 27;
  }

  // if character was "ä"
  else if (ascii == 228) {
    normalized = 27;
  }

  // if character was "ö"
  else if (ascii == 246) {
    normalized = 28;
  }
  // assume character is in english alphabet
  else {
     normalized = ascii - "a".charCodeAt(0);
  }
  var pitch = normalized % 24;
  return pitch;
}



function toPitchName(pitchNum) {
  var pitchName = "error";

  switch (pitchNum) {
  case(0): 
    pitchName = "C";
    break;
  case(1): 
    pitchName = "C#";
    break;
  case(2):
    pitchName = "D";
    break;
  case(3):
    pitchName = "D#";
    break;
  case(4):
    pitchName = "E";
    break;
  case(5):
    pitchName = "F";
    break;
  case(6):
    pitchName = "F#";
    break;
  case(7):
    pitchName = "G";
    break;
  case(8):
    pitchName = "G#";
    break;
  case(9):
    pitchName = "A";
    break;
  case(10):
    pitchName = "A#";
    break;
  case(11):
    pitchName = "B";
    break;
  default:
    break;
  }

return pitchName;
}

function toPitchNameQuarterTone(pitchNum) {
  var pitchName = "error";

  switch (pitchNum) {
  case(0): 
    pitchName = "C";
    break;
  case(2): 
    pitchName = "C#";
    break;
  case(4):
    pitchName = "D";
    break;
  case(6):
    pitchName = "D#";
    break;
  case(8):
    pitchName = "E";
    break;
  case(10):
    pitchName = "F";
    break;
  case(12):
    pitchName = "F#";
    break;
  case(14):
    pitchName = "G";
    break;
  case(16):
    pitchName = "G#";
    break;
  case(18):
    pitchName = "A";
    break;
  case(20):
    pitchName = "A#";
    break;
  case(22):
    pitchName = "B";
    break;
  default:
    pitchName = toPitchNameQuarterTone(pitchNum-1) + " quarter sharp"; 
  }

return pitchName;

}
