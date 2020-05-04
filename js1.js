document.addEventListener('DOMContentLoaded', () => {
    'use strict';
    const select = document.getElementById('cars'),
        output = document.getElementById('output'),
        url = './cars.json';
const sendData =(url)=>{
    return new Promise((resolve , reject) =>{
        const request = new XMLHttpRequest();
        request.open('GET', url);
        request.addEventListener('readystatechange', () => {
            if (request.readyState !== 4 ) {
            return;
            }
            if(request.status === 200){
                const response = JSON.parse(request.responseText);
                resolve(response);
            }else{
                reject(request.statusText);
            }   
        });
        request.send();
    });
};

const datatext=(dat)=>{
    console.log('select: ', select.value);
    console.log(dat);
    // const data = JSON.parse(dat.responseText);
    // console.log('data: ', typeof(data));
    dat.cars.forEach(item => {
        console.log('item: ', item);
        if (item.brand === select.value) {
            const {brand, model, price} = item;
            output.innerHTML = `Тачка ${brand} ${model} <br>
            Цена: ${price}$`;
        }
    });
};

    select.addEventListener('change', () => {
        sendData(url)
            .then(datatext)
            .catch(()=>{
                output.innerHTML = 'Произошла ошибка';
            });
        });

    });