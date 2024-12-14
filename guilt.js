const modul = document.getElementById("modul");
const modul2 = document.getElementById("modul2");
const messages = [
  `<img
        width="350px"
        height="200px"
        src="https://cdn.pixabay.com/photo/2024/01/17/04/13/ai-generated-8513521_640.png"
      />
      <p>
        Alles begann mit dem Südenfall im Paradies. So berichtet das Alte
        Testament von den Stammeltern Adam und Eva. Diese lebten unschuldig im
        Paradies, bis die Schlange (der Teufel) sie verführte, die verbotene
        Frucht vom Baum der Erkenntnis zu essen. Aufgrund des Ungehorsams
        (Schuld) vertreibt Gott sie aus dem Paradies. Die katholische Kirche
        übernimmt diese Geschichte und führte das Konzept der Erbschuld ein:
        Jeder Mensch wird in einen universalen Unheilszustand hineingeboren. Aus
        der Erbsünde ergibt sich gemäß der Lehre der Kirche die Notwendigkeit
        der Erlösung des Menschen, die durch die Menschwerdung, den Kreuzestod
        und die Auferstehung Jesu Christi verwirklicht wurde. Von der Erbsünde
        befreit wird man daher durch die Taufe und den Glauben an Christus.
      </p> `,

  `<div style="display:flex">
  <img 
        width="350px"
        height="400px"
        src="https://cdn.pixabay.com/photo/2016/06/06/15/53/prague-1439696_640.jpg"
      />
  <p>
  Franz Kafka (Schriftsteller  (1883 - 1924), in Prag geboren als Sohn einer bürgerlichen jüdischen KaufmannsfamilieWenn): <br><br> <em>"Wenn das, was im Paradies zerstört worden sein soll, zerstörbar war, dann war es nicht entscheidend; <br>war es aber unzerstörbar, dann leben wir in einem falschen Glauben"</em>.<br><br>Quelle: Kafka, Die Zürauer Aphorismen, entstanden 1917-1918, von Max Brod unter dem Titel "Betrachtungen über Sünde, Hoffnung, Leid und den wahren Weg" veröffentlicht 1931 </p></div>`,
  `Das Schuldgefühl ist eine – normalerweise als negativ wahrgenommene – soziale Emotion, welche bewusst oder unbewusst einer (auch: vermeintlichen) Fehlreaktion, Pflichtverletzung oder Missetat folgen kann.<br> Mögliche körperliche Reaktionen (Erröten, Schwitzen, eventuell sogar depressive Verstimmung, Fieber oder Magenverstimmung) sind vergleichbar mit denen der Scham oder Angst. Schuld, Scham und Verantwortungsgefühl können leicht verwechselt werden, d. h. die Abgrenzung im Erleben des Individuums ist häufig schwierig.<br> In der Fachliteratur wird Scham von Schuld mittels der Bewertungsgrundlage des Verhaltens abgegrenzt: Während Schuld nach Michael Lewis (2000) durch eine negative Bewertung eines spezifischen Verhaltens erzeugt wird („ich habe etwas Falsches getan“), wird Scham durch eine negative Bewertung des Selbsts erzeugt („ich bin ein schlechter Mensch“). <br><br>Quelle: Wikipedia`,

  `<img
        width="350px"
        height="200px"
        src="https://cdn.pixabay.com/photo/2024/01/17/04/13/ai-generated-8513521_640.png"
      />
      <p>
        Everything began with the fall of the cross in paradise. The Old Testament tells us about the first parents Adam and Eve. They lived innocently in paradise until the serpent (the devil) seduced them to eat the forbidden fruit from the tree of knowledge. Because of their disobedience (guilt), God expelled them from paradise. The Catholic Church adopted this story and introduced the concept of original sin: every person is born into a universal state of misfortune. According to the teachings of the Church, original sin gives rise to the need for human redemption, which was realized through the incarnation, death on the cross and resurrection of Jesus Christ. One is therefore freed from original sin through baptism and faith in Christ.
      </p> `,

  `<div style="display:flex">
  <img 
        width="350px"
        height="400px"
        src="https://cdn.pixabay.com/photo/2016/06/06/15/53/prague-1439696_640.jpg"
      />
  <p>
  Franz Kafka (German writer (1883 - 1924), born in Prague as the son of a middle-class Jewish merchant familyIf): <br><br> <em>"If what was supposed to have been destroyed in paradise was destructible, then it was not decisive; <br>but if it was indestructible, then we live in a false belief"</em>.<br><br>Source: Kafka, The Zürau Aphorisms, written in 1917-1918, published by Max Brod under the title "Reflections on Sin, Hope, Suffering and the True Way" in 1931 </p></div>`,
  `The feeling of guilt is a social emotion - normally perceived as negative - which can consciously or unconsciously follow a (also: perceived) incorrect reaction, breach of duty or misdeed.<br> Possible physical reactions (blushing, sweating, possibly even depressive mood, fever or upset stomach) are comparable to those of shame or fear. Guilt, shame and a sense of responsibility can easily be confused, i.e. the distinction in the individual's experience is often difficult.<br> In the specialist literature, shame is distinguished from guilt by means of the evaluation basis of the behavior: While guilt, according to Michael Lewis (2000), is generated by a negative evaluation of a specific behavior ("I did something wrong"), shame is generated by a negative evaluation of the self ("I am a bad person"). <br><br>Source: Wikipedia`,
];
function showMessage(num) {
  modul.style.display = "block";
  modul.innerHTML = messages[num];
}

function hide() {
  modul.style.display = "none";
}
function showMessage2(num) {
  modul2.style.display = "block";
  modul2.innerHTML = messages[num];
}

function hide2() {
  modul2.style.display = "none";
}
