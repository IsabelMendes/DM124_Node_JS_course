function getWeatherForecast() {

    return new Promise((resolve, reject) =>{
        setTimeout (() => resolve('Cloudy'), 500);
        setTimeout (() => reject('sorry Dad'), 900);

    });
}
getWeatherForecast()
.then(weatherForecast => console.log(weatherForecast))
.catch(error => console.log(error))

console.log('Coffe is ready! Came!');