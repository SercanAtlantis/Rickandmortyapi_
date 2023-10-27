const btnEl = document.querySelector('.btn');

const clickHandler = async () =>{
     const res = await fetch('https://rickandmortyapi.com/api/character/1');
     const data = await res.json();
     console.log(data);
     const markup = `<p> name: ${data.name} </p>`;
     document.querySelector('p').insertAdjacentHTML('beforeend', markup);
     const markup2 = `<p2> ${data.image} </p2>`;
     document.querySelector('p2').insertAdjacentHTML('beforeend', markup2);
    
};

btnEl.addEventListener('click', clickHandler);