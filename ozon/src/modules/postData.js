
const postData = () => {
    // return fetch('http://localhost:3000/goods/24', {
    //     method: 'DELETE'
    // }) 
    //     .then(res => res.json())
    return fetch('https://test-ddd35-default-rtdb.firebaseio.com/goods.json', {
        method: 'POST',
        body: JSON.stringify({
            title: "Ведьмак",
            price: 3000,
            sale: true,
            img: "https://cdn1.ozone.ru/multimedia/c400/1023547851.jpg",
            category: "Игры и софт"
        }),
        headers: {
            'Content-type': 'application/json; charset=UTF-8',
        },
        }) 
        .then(res => res.json())
};



export default postData;

//get -получать
//post -отдавать