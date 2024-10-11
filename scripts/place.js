document.getElementById("lastModified").textContent = `Last modification: ${document.lastModified}`;

const windChill = document.getElementById("wind-chill");
const t = parseFloat(document.getElementById("temp").innerText);
const v = parseFloat(document.getElementById("wind-speed").innerText);
console.log(t, v);


//If temp is below 50F and wind speed is more than 3mph return the wind chill factor else return n/a
function windChillFactor(temp, windSpeed){
  if(temp <= 50 && windSpeed > 3.0){  
    let wcfValue = 35.74 + (0.6215 * temp) - (35.75 * Math.pow(windSpeed,0.16)) + (0.4275 *Math.pow(windSpeed, 0.16));
    return wcfValue.toFixed(2)
  }else {
    return "N/A"
  }
}

const wcf = windChillFactor(t,v)
console.log(wcf)
windChill.textContent = wcf;
