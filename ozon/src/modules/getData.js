
const getData = () => {
    return fetch('https://test-ddd35-default-rtdb.firebaseio.com/goods.json')
        .then((response) => {
            return response.json();
        })
        
};

export default getData;

//get -получать
//post -отдавать