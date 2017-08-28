var React = require('react');
// var WeatherMessage = React.createClass({
//
//   render : function(){
//   var location =  this.props.location;
//   var temp = this.props.temp;
//      return (
//        <h3> its {temp} in {location} </h3>
//      )
//   }
// });

var WeatherMessage = (props) => {
  var {temp, location} =  props;  
     return (
       <h3> its {temp} in {location} </h3>
     )
  };

module.exports=WeatherMessage
