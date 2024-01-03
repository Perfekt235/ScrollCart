export function fetchData() {
    return fetch('https://fakestoreapi.com/products')
      .then(res => {
        if (!res.ok) {
          throw new Error('Network response was not ok');
        }
        return res.json();
      })
      .catch(err => {
        console.error('Chyba při načítání dat: ', err);
        throw err;
      });
  }