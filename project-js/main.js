
fetch('https://jsonplaceholder.typicode.com/users')
    .then(value => value.json())
    .then(cards =>{
        console.log(cards);

        let target = document.createElement('div');
        target.classList.add('target');

        for(let card of cards){
            let divUser = document.createElement('div');
            divUser.classList.add('user');
            divUser.innerHTML = `<h4> id: ${card.id}</h4> 
                                 <h2> name: ${card.name}</h2>`;

            let button = document.createElement('button');
            button.innerText = 'details';
            button.onclick = () =>{
                localStorage.setItem('user', card.id);
                window.location.href = 'user-details.html'

            }
            divUser.appendChild(button);
            target.appendChild(divUser);
            document.body.appendChild(target);
        }

    })

