const lastModified = document.lastModified;
document.getElementById('lastModified').textContent = `Last Modified: ${lastModified}`;
document.getElementById('currentyear').textContent = new Date().getFullYear();

const temperature = 5;
const wind = 18;

function calculateWindChill(temperature, wind) {
    return (13.12 + 0.6215 * temperature - 11.37 * wind ** 0.16 + 0.3965 * temperature * wind ** 0.16).toFixed();
}

document.getElementById('windChillResult').innerHTML = ` ${calculateWindChill(temperature, wind)}`;