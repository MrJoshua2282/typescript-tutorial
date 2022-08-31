import axios from 'axios';

const form = document.querySelector('form')!;
const addressInput = document.getElementById('address')! as HTMLInputElement;

const GOOGLE_API_KEY = '';

async function searchAddressHandler(event: Event) {
  event.preventDefault();

  const enteredAddress = addressInput.value;

  const url = `https://maps.googleapis.com/maps/api/geocode/json?address=${encodeURI(enteredAddress)}&key=${GOOGLE_API_KEY}`;


  type GoogleGeocodingResponse = {
    results: { geometry: { location: { lat: number; lng: number; } } }[];
    status: 'OK' | 'ZERO_RESULTS';
  };

  try {
    const response = await axios.get<GoogleGeocodingResponse>(url);

    if (response.data.status !== 'OK') {
      throw new Error('Could not fetch location')
    }
    const coordinates = response.data.results[0].geometry.location;
    const map = new google.maps.Map(document.getElementById("map") as HTMLElement, {
      center: coordinates,
      zoom: 8,
    });

    new google.maps.Marker({
      position: coordinates,
      map: map,
    });


  } catch (error) {
    console.log('Error: ' + error)
  }

}

form?.addEventListener('submit', e => searchAddressHandler(e))