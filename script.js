document.addEventListener('DOMContentLoaded', () => {
    'use strict';
    const select = document.getElementById('cars'),
        output = document.getElementById('output1');

const getData =( url )=>{
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
const outputPhotos=(data)=>{
//const random = Math.floor(Math.random() * data.length);
//onst obj = data[random];
console.log(data);
data.forEach((item,index) =>{
    if(index<10){
        output.insertAdjacentHTML('beforebegin',`<h4> ${item.title} </h4>
        <img src = "${item.thumbnailUrl}" alt = ${item.title}>`);
    }
  
});

};
// getData('https://jsonplaceholder.typicode.com/photos')
// .then(outputPhotos)
// .catch(error => console.error(error));
const utlphotos = 'https://jsonplaceholder.typicode.com/photos';
   const oneImg = getData('https://jsonplaceholder.typicode.com/photos/1'),
        rwoImg = getData('https://jsonplaceholder.typicode.com/photos/2');
getData(utlphotos)
.then(outputPhotos)
.catch(error => console.error(error));
//     oneImg.then(outputPhotos).catch(error => console.log(error));
//    rwoImg.then(outputPhotos).catch(error => console.log(error));
// Promise.all([oneImg,rwoImg])
// .then(outputPhotos)
// .catch(error => console.error(error));


});
