var Player = React.createClass({
  render: function() {
    return (
      <div className="player">
        <h1>Click and listen</h1>
        <div id="can"></div>
      </div>
    );
  },
  componentDidMount: function() {
    var _reactComponent = this;
    require(['music21'], function () {
      var stream = music21.tinyNotation.TinyNotation(_reactComponent.props.tinyNotation);
        // TODO this method might be deprecated.
        // @see music21.stream.Stream.renderScrollableCanvas();
      stream.renderScrollableCanvas($('#can'));

        // Toolbar
      var toolBar = stream.getPlayToolbar();
      console.log(toolBar);
    });
  }
});

ReactDOM.render(
  <Player tinyNotation="g# a b d b a g"/>,
  document.getElementById('content')
);
