var cityInput=document.getElementById("cityInput")
console.log(cityInput.value);
let weatherForecat=[]
const days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
const months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
var city=""
var current=[]
var day=[]
var daynum=[]
var month=[]
var temper=[]
var condition=[]
var conditionIcon=[]

let myHttpReq=new XMLHttpRequest()
myHttpReq.open("get",`https://api.weatherapi.com/v1/forecast.json?key=27b991c54e044e409bb164451240101&q=cairo&days=3`)
myHttpReq.send()
myHttpReq.addEventListener('readystatechange',function()
{
    if(myHttpReq.readyState==4 && myHttpReq.status==200)
    {
        weatherForecat=JSON.parse(myHttpReq.response).forecast.forecastday
        current=JSON.parse(myHttpReq.response).current
        console.log(weatherForecat);
       

        showData(city="Cairo")
    }
})

function findCityForecast()
{
   let myHttpReq=new XMLHttpRequest()
    city=cityInput.value
    myHttpReq.open("get",`https://api.weatherapi.com/v1/forecast.json?key=27b991c54e044e409bb164451240101&q=${city}&days=3`)
    myHttpReq.send()
    myHttpReq.addEventListener('readystatechange',function()
    {
        if(myHttpReq.readyState==4 && myHttpReq.status==200)
        {
            weatherForecat=JSON.parse(myHttpReq.response).forecast.forecastday
            current=JSON.parse(myHttpReq.response).current
            console.log(weatherForecat);
           

            showData(city)
        }
    })
}
function showData(cityname)
{

    var temp= ""
    var d 
   var currenttemp=current.temp_c
   var currentTempTxt=current.condition.text
   var currentTempIcon=current.condition.icon
   temper=[]
   condition=[]
   conditionIcon=[]
    for(var i=0 ; i<weatherForecat.length; i++)
    {
        d= new Date(weatherForecat[i].date);
        day.push(days[d.getDay()])
        daynum.push(d.getDate())
        month.push(months[d.getMonth()])
        temper.push(weatherForecat[i].day.maxtemp_c)
        condition.push(weatherForecat[i].day.condition.text)
        conditionIcon.push(weatherForecat[i].day.condition.icon)

    }
  console.log(temper);
  console.log(condition);
  console.log("https:"+conditionIcon[0]);
  console.log(day);
  console.log(daynum);
  console.log(month);
        temp+=`<div class="col-md-4 ">
        <div class="item-current rounded shadow ">
            <div class="day-date ">
                <span class="ms-2 ">`+day[0]+`</span>
                <span class="datespan">`+ (daynum[0]+" " +month[0])+`</span>
            </div>
            <div class="temp-info mt-5 text-center">
                <span>`+city+`</span>
                <h1>`+currenttemp+`<sup>o</sup>C</h1>
                <span>
                    <img src="`+"https:"+currentTempIcon+`"class="w-25" alt="">
                </span>
                <div>
                    <h5>`+currentTempTxt+`</h5>
                </div>
        </div>
 </div>

    </div>
    <div class="col-md-4 ">
        <div class="item-day2 rounded shadow ">
            <div class="day-date ">
                <span class="ms-2 ">`+day[1]+`</span>
                <span class="datespan">`+ (daynum[1]+" " +month[1])+`</span>
            </div>
            <div class="temp-info mt-5 text-center">
                <span>`+city+`</span>
                <h1>`+temper[1]+`<sup>o</sup>C</h1>
                <span>
                    <img src="`+"https:"+conditionIcon[1]+`" class="w-25" alt="">
                </span>
                <div>
                    <h5>`+condition[1]+`</h5>
                </div>
        </div>
 </div>

    </div>
    <div class="col-md-4 ">
        <div class="item-day3 rounded shadow   ">
            <div class="day-date ">
                <span class="ms-2 ">`+day[2]+`</span>
                <span class="datespan">`+ (daynum[2]+" " +month[2])+`</span>
            </div>
            <div class="temp-info mt-5 text-center">
                <span>`+city+`</span>
                <h1>`+temper[2]+`<sup>o</sup>C</h1>
                <span>
                    <img src="`+"https:"+conditionIcon[2]+`" class="w-25" alt="">
                </span>
                <div>
                    <h5>`+condition[2]+`</h5>
                </div>
        </div>
 </div>

    </div>`
    
   
    document.getElementById("infoTemp").innerHTML=temp;

}

