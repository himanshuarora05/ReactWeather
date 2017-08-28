var axios = require('axios');

const OPEN_WEATHER_MAP_URL = 'http://api.openweathermap.org/data/2.5/weather?appid=8140234fd508f98c4f127dc23519dea4';

module.exports={
 getTemp: function(location){
    var encodedLocation = encodeURIComponent(location);
    var requestURL = `${OPEN_WEATHER_MAP_URL}&q=${encodedLocation}`
    return axios.get(requestURL).then(function(res){
      if(res.data.cod && res.data.message){
        throw new Error(err.data.message);
      } else{
        console.log(res);
        console.log(res.data.main.temp);
        return res.data.main.temp;
      }
    }, function(err){
      throw new Error(err.data.message);
    });
 }
}
