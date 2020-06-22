const request = require('request')

const forecast=(latitude,longitude,callback)=>{
  const url='http://api.weatherstack.com/current?access_key=e7cce49cf7df40cf7c4859dac4a4084b&query=' + latitude + ',' + longitude + '&units=f'
   
  request({url, json: true}, (error, {body})=>{
        if(error){
            callback('Unable to connect to location services!',undefined)
        }else if (body.error){
            callback('unable to find location',undefined)
        }else{
            const e=body.current.weather_descriptions[0]
            var t=((body.current.temperature-32)*5)/9
            var f=((body.current.feelslike-32)*5)/9
            callback(undefined,body.current.weather_descriptions[0] +".It is currently "+ t+ " degrees out.It feels like "+f+" degrees out.")
        }
    })
}
module.exports=forecast