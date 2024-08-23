//let url = "https://api.openweathermap.org/data/2.5/weather?q=karnataka&appid=6d44b4350d90ecb254cb31e745a94397&units=metric";
// fetch(url).then((res)=>res.json())
// .then((data)=>console.log(data))
// .catch((err)=>console.log(err))

let input = document.getElementById('city');
let searchBtn = document.getElementById('search');

searchBtn.addEventListener('click',()=>{
    //console.log(input.value);
    let city = input.value;
    if(!city.trim()){
        alert('Enter a City Name Before Search!!!')
    }
    else{
        fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=6d44b4350d90ecb254cb31e745a94397&units=metric`)
        .then(response=>{
            if(response.status==200){
                return response.json();
            }
            else{
                alert('Enter Valid City Name');
            }
    })
        .then(data=>{
            console.log(data)
            if(data){
                displayWeather(data);
            }
        })
        .catch(error=>console.log(error))
    }
    input.value='';
})

function displayWeather(data){
    document.getElementById('city-name').innerHTML=data.name;
    document.getElementById('temp').innerHTML=Math.round(data.main.temp)+' ℃';
    document.getElementById('wind').innerHTML=`${Math.round(data.wind.speed)} km/hr `;
    document.getElementById('humid').innerHTML=`${Math.round(data.main.humidity)}`;
    document.getElementById('display').classList.remove('hidden');
}