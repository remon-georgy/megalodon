var Player = React.createClass({
  render: function() {
    return (
      <div className="player">
        <h1>props</h1>
        <div className="music21 tinyNotation">{this.props.tinyNotation}</div>
        <h1>s.renderScrollableCanvas</h1>
        <div id="can"></div>
      </div>
    );
  },
  componentDidMount: function() {
    require(['music21'], function () {

      var s1 = music21.tinyNotation.TinyNotation('4/4 c2 d#4 e8 f g4 r8 B c4~ c16 d32 e f g a b c\'1 b4 a g f e8 f e d c4 B c1 d2 c2 B2 c2 d1 c1');
      var m = s1.get(0);
      m.get(0).stemDirection = 'down';
      m.elements.pop();
      var c = new music21.chord.Chord(['F4', 'A-4', 'C5']);
      c.duration.type = 'eighth';
      c.lyric = 'hi!';
      m.append(c);
      var mQuarters = s1.get(3);
      var voice1 = new music21.stream.Voice();
      voice1.autoBeam = false; // needed to not lose stemDirection
      voice1.renderOptions.stemDirection = 'up';
      for (var i = 0; i < 4; i++) {
        voice1.append( mQuarters.get(i) );
      }
      mQuarters.get(3).pitch.accidental.displayType = 'always';
      mQuarters.elements = [];
      mQuarters.insert(0, voice1);

      var voice2 = new music21.stream.Voice();
      voice2.renderOptions.stemDirection = 'down';
      var shiftedRest = new music21.note.Rest(0.5);
      shiftedRest.lineShift = -6;
      voice2.append( shiftedRest );
      voice2.append( new music21.note.Note('F#4') );
      voice2.append( new music21.note.Note('E4') );
      voice2.append( new music21.note.Note('D4') );
      var lastNote = new music21.note.Note('C#4');
      lastNote.duration.quarterLength = 0.5;
      voice2.append(lastNote);
      mQuarters.insert(0, voice2);

      var s2 = music21.tinyNotation.TinyNotation('4/4 E2 F#4 G8 r trip{G8 F A} G4 E2~ E1 B4 c B A G16 A8. G8 F E4 D C1 BB2 C2 D2 C2 BB1 C1');
      var tm = s2.get(-6);
      var lyrics = ['Wel-', '-come', 'to', 'this', 'ly-','-ric!'];
      for (var i = 0; i < lyrics.length; i++) {
        tm.get(i).lyric = lyrics[i];
      }

      var s = new music21.stream.Score();
      s.insert(0, s1);
      s.insert(0, s2);
      s.tempo = 90;

      var lsf = music21.miditools.loadSoundfont;
      console.log(music21.miditools);
      lsf('electric_guitar_clean', function(i) {
        s1.instrument = i;
        lsf('electric_guitar_clean', function(i) {
          s2.instrument = i;
          s.renderScrollableCanvas($('#can'));
          console.log('soundfont loaded');
        });
      });
    });
  }
});

ReactDOM.render(
  <Player tinyNotation="g# a b d b a g"/>,
  document.getElementById('content')
);
