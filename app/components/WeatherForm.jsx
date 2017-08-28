var React = require('react');
var WeatherForm = React.createClass({

onFormSubmit : function(e){
  e.preventDefault();
  var locationRef = this.refs.location;
  var location = locationRef.value;
  if(typeof location==='string' && location.length > 0){
    locationRef.value = '';
    this.props.onSearch(location, 23);
  }
},

render: function(){
  return (
    <div>
        <form onSubmit={this.onFormSubmit}>
          <input type="text" ref="location"/>
          <button>Get Weather</button>
        </form>
    </div>
  );
}
});

module.exports = WeatherForm;
