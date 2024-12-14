const modul = document.getElementById("modul");
const messages = [
  "",
  `Das Schamgefühl gehört zu den bei allen Menschen auftretenden Affekten. <br/>
  Auslöser für Schamgefühle können innerseelische Vorgänge sein, wie zum Beispiel der Eindruck von <strong>Peinlichkeit</strong> oder <strong>Verlegenheit</strong>, aber auch die <strong>Bloßstellung</strong> oder <strong>Beschämung</strong> durch andere Menschen in Form von Demütigungen oder Kränkungen. The feeling of shame is one of the emotions that occurs in all people. <br/>  
The trigger for feelings of shame can be inner psychological processes, such as the impression of <strong>embarrassment</strong> or <strong>embarrassment</strong>, but also <strong>exposure</strong> or <strong>shaming</strong> by other people in the form of humiliation or insults.(Quelle /source: Wikipedia).
  <br/>   <br/>
  Scham wird als negative, unangenehme Emotion definiert, die in uns hochsteigt, wenn wir uns nicht so verhalten, wie es gesellschaftlich erwartet wird, wir gewissen Ansprüchen nicht genügen oder den Werten unseres sozialen Umfeldes nicht entsprechen.   <br/> <br>Shame is defined as a negative, unpleasant emotion that arises within us when we do not behave as socially expected, when we do not meet certain standards or when we do not conform to the values ​​of our social environment.`,
  `Schamgefühle entwickeln sich ab dem 2. / 3. Lebensjahr. Sie sind ein menschliches Empfinden, als Folge missbillingenderer Reaktionen der Umwelt (insbesondere auch der Eltern) auf ein Verhalten oder auch die Bloßstellung vor anderen.<br> Sie ist getrieben von der Angst vor  Bloßstellung, Spott,  Kritik,  Erwartungen nicht zu erfüllen oder  soziale Konsequenzen erleiden zu müssen. <br> Dabei lernen wir von unserem Umfeld, wofür wir uns schämen sollten und welches Verhalten nicht akzeptiert wird. <br><br>
    Feelings of shame develop from the age of 2 or 3. They are a human feeling, as a result of disapproving reactions from the environment (especially parents) to a behavior or exposure in front of others. <br>It is driven by the fear of exposure, ridicule, criticism, not fulfilling expectations or having to suffer social consequences.<br>  We learn from our environment what we should be ashamed of and what behavior is not acceptable.
`,

  `<u>Mögliche Lösungsansätze / Possible Solutions:</u><br>
Akzeptiere Dein Schamgefühl als etwas Normales.
Frage Dich, ob die Situation wirklich so peinlich ist, oder ob Du sie nur als übertrieben schlimm wahrnimmst? Wovor hast Du genau Angst? Was sind die befürchteten Konsequenzen und wie realistisch ist deren Eintritt?
Erlaube Dir Fehler machen zu dürfen - Fehler sind menschlich. 
Sieh die Situation aus einer anderen Perspektive. Wie würde ein Zuschauer die Situation bewerten?
Zeige anderen offen Deine Grenzen auf, was für Dich akzeptabel ist und was nicht. 
Weine nicht über verschüttete Milch, schließe mit der Vergangenheit ab und fange neu an. 
Akzeptiere Dich selbst und werde Dir Deiner Stärken bewusst. 
- Du bist gut genug. <br><br>Accept your feelings of shame as something normal.
Ask yourself whether the situation is really that embarrassing, or whether you are just perceiving it as being exaggerated? What exactly are you afraid of? What are the feared consequences and how realistic is their occurrence?
Allow yourself to make mistakes - mistakes are human.
See the situation from a different perspective. How would an onlooker assess the situation?
Openly show others your limits, what is acceptable to you and what is not.
Don't cry over spilled milk, come to terms with the past and start again.
Accept yourself and become aware of your strengths.
- You are good enough.
`,
];
function showMessage(num) {
  modul.style.display = "block";
  modul.innerHTML = messages[num];
}

function hide() {
  modul.style.display = "none";
}
