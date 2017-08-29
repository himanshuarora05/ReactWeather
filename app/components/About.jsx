var React = require('react');
var About = (props) => {
   return (
     <div>
       <h1 className="text-center">About</h1>
       <p>This is weather application build on React.</p>
       <p> Here are the tools I have used </p>
       <ol>
        <li>React</li>
        <li>openWeather.org</li>
       </ol>
     </div>);
}

module.exports=About
