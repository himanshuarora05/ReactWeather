var React = require('react');

var WeatherMessage = (props) => {
  var {temp, location} =  props;
     return (
       <h1 className="text-center">its {temp} in {location} </h1>
     )
  };

module.exports=WeatherMessage
