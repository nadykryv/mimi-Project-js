
const selectedUserId = localStorage.getItem('user');

fetch('https://jsonplaceholder.typicode.com/users')
    .then(response => response.json())
    .then(users => {
        console.log(users);

        const selectedUser = users.find(user => user.id == selectedUserId);

        if (selectedUser) {
            let div = document.createElement("div");
            div.innerHTML = `<h4> user id: ${selectedUser.id}</h4> 
                             <h2> name: ${selectedUser.name}</h2>
                             <h5>Username: ${selectedUser.username}</h5>
                             <p>E-mail: ${selectedUser.email}</p>
                             <p>Address:</p>
                             <p>street: ${selectedUser.address.street}</p>
                             <p>suite: ${selectedUser.address.suite}</p>
                             <p>city: ${selectedUser.address.city}</p>
                             <p>zip code: ${selectedUser.address.zipcode}</p>
                             <h5>GEO:</h5>
                             <p>lat: ${selectedUser.address.geo.lat}</p>
                             <p>lng: ${selectedUser.address.geo.lng}</p>
                             <p>Phone: ${selectedUser.phone}</p>
                             <p>Website: ${selectedUser.website}</p>
                             <h5>COMPANY:</h5>
                             <p>name: ${selectedUser.company.name}</p>
                             <p>catch phrase: ${selectedUser.company.catchPhrase}</p>
                             <p>bs: ${selectedUser.company.bs}</p>`;

            let buttonPost = document.createElement('button');
            buttonPost.innerText = 'post of current user';
            buttonPost.onclick = () => {


                fetch('https://jsonplaceholder.typicode.com/posts')
                    .then(response => response.json())
                    .then(posts => {
                        let target = document.createElement('div');
                        target.classList.add('posts');

                        let divCardLast = document.createElement('div');
                        divCardLast.classList.add('divCardLast');

                        let userList = document.createElement('div');
                        userList.classList.add('userList');

                        for (const post of posts) {
                            if (post.userId === +localStorage.getItem('user')) {
                                let divCard = document.createElement('div');
                                divCard.classList.add('cardPostU');
                                divCard.innerHTML = `<h3>user id: ${post.userId}</h3>
                                 <h4>post id: ${post.id}</h4>
                                 <h5>title: ${post.title}</h5>`;

                                let button = document.createElement('button');
                                button.innerText = 'Post details';
                                button.onclick = () => {
                                    localStorage.setItem('postId', JSON.stringify(post.id));
                                    window.location.href = 'post-details.html';
                                }

                                divCard.appendChild(button);
                                divCard.appendChild(divCardLast);

                                target.appendChild(divCard);
                                document.body.appendChild(target);
                            }
                        }
                    });



            }

            userList.appendChild(div);
            userList.appendChild(buttonPost);
        }
    });

















