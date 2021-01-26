var xml;

function processText() {

  var name = document.getElementById("input").value;

  name = name.replace(/ /g, '');
  name = name.toLowerCase();

    let oldName = name;

    name = validate(name);

  document.getElementById("result").innerHTML = "";

 if (name != oldName) {
    document.getElementById("result").innerHTML = "WARNING! <br> This tool only accepts letters in the swedish alphabet. Some letters or symbols were removed from the result.<br>";
    //return;
 }

  var useQuarterTones = document.getElementById("qtone").checked;

  let result;
    if (useQuarterTones) {
        result = processQuarterTones(name);
    } else {
        result = processChromatic(name);
    }
  xml = convertToXML(result);

	document.getElementById("dlButton").innerHTML = `
		<button onclick="downloadWrapper()">Download result as MusicXML</button>
	`;
}

function validate(name) {
    for (let i = name.length - 1; i >= 0; i--) {
        if ("abcdefghijklmnopqrstuvwxyzåäö".includes(name.charAt(i)) === false) {
        var tmp = name.split(''); // convert to an array
        tmp.splice(i, 1); // remove 1 element from the array
        name = tmp.join(''); // reconstruct the string
        //return false;
        }
    }
    return name;
    //return true;
}

function processChromatic(name) {
  let result = "<p>";
  let log = "<p>";
  let pitchList = [];
  
for (let i = 0; i < name.length; i++) {
  var ascii = name.charCodeAt(i);
  let pitchClass = toPitch(ascii);

  let pitchName = toPitchName(pitchClass);
  
  log += "character: " + name.charAt(i) + "<br>";
  log += "mapped pitch class: " + pitchClass + "<br>";
  log += "pitch name: " + pitchName + "<br><br>";
  result += pitchName;
  if (i < name.length - 1) {
    result += ", ";
  }
  pitchList.push(pitchName);
}
log += "</p>";
result += "</p>";

  document.getElementById("result").innerHTML += result;
  document.getElementById("result").innerHTML += log;
  return pitchList;
}

function processQuarterTones(name) {
  let result = "<p>";
  let log = "<p>";
  let pitchList = [];
  
for (let i = 0; i < name.length; i++) {
  var ascii = name.charCodeAt(i);

  let pitchClass = toPitchQuarterTone(ascii);
  let pitchName = toPitchNameQuarterTone(pitchClass);

  log += "character: " + name.charAt(i) + "<br>";
  log += "mapped pitch class: " + pitchClass + "<br>";
  log += "pitch name: " + pitchName + "<br><br>";
  result += pitchName;
   if (i < name.length - 1) {
    result += ", ";
  }
    pitchList.push(pitchName);
}

    log += "</p>";
    result += "</p>";

  document.getElementById("result").innerHTML += result;
  document.getElementById("result").innerHTML += log;
  return pitchList;
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

function downloadWrapper() {
	// Start file download.
	download("result.xml", xml);
}

function download(filename, text) {
  var element = document.createElement('a');
  element.setAttribute('href', 'data:text/plain;charset=utf-8,' + encodeURIComponent(text));
  element.setAttribute('download', filename);

  element.style.display = 'none';
  document.body.appendChild(element);

  element.click();

  document.body.removeChild(element);
}
