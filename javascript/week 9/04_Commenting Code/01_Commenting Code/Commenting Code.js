      //Version: 1.0
      //Last Edited: 12/6/22
      //Edited by: Daniel
      
      //This Script connects to the wheretheiss RESTful API and returns the latitude and longitude of the ISS
      

      const api_url = 'https://api.wheretheiss.at/v1/satellites/25544'; //Stores the URL of the wheretheiss RESTful API endpoint
      
      //This function fetches the latitude and longitude from the API and outputs it in the HTML document
      async function getISS() {
        const response = await fetch(api_url);
        const data = await response.json();
        const { latitude, longitude } = data;
        
        document.getElementById('lat').textContent = latitude.toFixed(2);
        document.getElementById('lon').textContent = longitude.toFixed(2);
      }

      getISS();
      //This function call our getISS function every 1sec
      setInterval(getISS, 1000);