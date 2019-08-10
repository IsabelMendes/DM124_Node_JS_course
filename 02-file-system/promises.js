function getWeatherForecast() {

    let x=0;
    
    return new Promise((resolve, reject) =>{
       setTimeout (() => resolve('Sunshine'), 1000);

    });
}
getWeatherForecast()
.then(weatherForecast => console.log(weatherForecast));

console.log('Coffe is ready! Came!');