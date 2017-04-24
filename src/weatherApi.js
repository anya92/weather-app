export const getLocation = new Promise((resolve, reject) => {
  if (navigator.geolocation) {
    navigator.geolocation.getCurrentPosition(position => {
      resolve({
        lat: position.coords.latitude,
        lon: position.coords.longitude
      });
    }, error => {
      reject(error.message);
    });
  } else {
    reject('Geolocation is not supported by this browser.');
  }
});
