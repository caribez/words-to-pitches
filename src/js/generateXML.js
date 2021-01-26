
function convertToXML(pitches) {
 let headerText = generateHeaderText();
 let footerText = generateFooterText();
    
 let pitchText = headerText;
    
    for (let i = 0; i < pitches.length; i+++) {
        let pitchInfo = pitches[i];
        pitch = pitchInfo.trim();
    
        let isSharp = pitchInfo.contains("#");
        let isQuarterSharp = pitchInfo.contains("quarter");  
    
        let alterValue = 0;
        if (isSharp) alterValue += 1;
        if (isQuarterSharp) alterValue += 0.5;    
         
        pitchText += "<note>";
        pitchText += "<pitch>"; 
        pitchText += "<step>";          
        pitchText += pitchInfo.charAt(0);     
        pitchText += "</step>";    
        pitchText += "<alter>";        
        pitchText += alterValue;
        pitchText += "</alter>";        
        pitchText += "<octave>4</octave>";         
        pitchText += "</pitch>";
        pitchText += "<duration>4</duration>";
        pitchText += "<type>eighth</type>";
        pitchText += "</note>";         
    }

    pitchText += footerText;

    console.log(pitchText);
    return pitchText;
}

function generateHeaderText() {
return `<?xml version="1.0" encoding="UTF-8" standalone="no"?>
<!DOCTYPE score-partwise PUBLIC
    "-//Recordare//DTD MusicXML 3.1 Partwise//EN"
    "http://www.musicxml.org/dtds/partwise.dtd">
<score-partwise version="3.1">
  <part-list>
    <score-part id="P1">
      <part-name>Music</part-name>
    </score-part>
  </part-list>
  <part id="P1">
    <measure number="1">
      <attributes>
        <divisions>1</divisions>
        <key>
          <fifths>0</fifths>
        </key>
        <time>
          <senza-misura/>
        </time>
        <clef>
          <sign>G</sign>
          <line>2</line>
        </clef>
      </attributes> 
  `;
}

function generateFooterText() {
return   `</measure>
  </part>
</score-partwise>
  `;
}
