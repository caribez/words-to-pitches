

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
