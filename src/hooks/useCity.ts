import { useState, useEffect } from 'react';

export function useCity(defaultCity: string = "Santo André") {
  const [city, setCity] = useState(defaultCity);

  useEffect(() => {
    // Basic caching to avoid repeated calls
    // Using v2 key to clear previous cache since the previous API might have failed
    const cachedCity = localStorage.getItem('userCity_v2');
    if (cachedCity) {
      setCity(cachedCity);
      return;
    }

    const fetchCity = async () => {
      try {
        const response = await fetch('https://get.geojs.io/v1/ip/geo.json');
        if (!response.ok) throw new Error('Network response was not ok');
        const data = await response.json();
        if (data && data.city) {
          setCity(data.city);
          localStorage.setItem('userCity_v2', data.city);
        }
      } catch (error) {
        console.error('Error fetching city:', error);
      }
    };

    fetchCity();
  }, []);

  return city;
}
