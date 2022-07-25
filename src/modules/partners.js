export const partners = () => {
    const renderItems = (data) => {
        data.forEach(item => {
            console.log(item);
        });

    }

    //fetch('./db/partners.json')
    fetch('https://restaurant-d24f2-default-rtdb.firebaseio.com/db/partners.json')
        .then((response) => response.json())
        .then((data) => {
            renderItems(data);
        })
        .catch((error) => {
            console.log(error);
        })
}
