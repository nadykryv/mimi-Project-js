
fetch('https://jsonplaceholder.typicode.com/posts')
    .then(response => response.json())
    .then(posts => {
        let target = document.createElement('div');
        target.classList.add('target');

        let divCardLast = document.createElement('div');
        divCardLast.classList.add('divCardLast');

        for (const post of posts) {
            if (post.id === +localStorage.getItem('postId')) {
                let divCard = document.createElement('div');
                divCard.classList.add('cardPost');
                divCard.innerHTML = `<h3>user id: ${post.userId}</h3>
                                     <h4>post id: ${post.id}</h4>
                                     <h5>title: ${post.title}</h5>
                                     <p>body: ${post.body}</p>`;

                let button = document.createElement('button');
                button.innerText = 'comments';
                button.onclick = () => {
                    fetch('https://jsonplaceholder.typicode.com/posts/' + post.id + '/comments')
                        .then(response => response.json())
                        .then(comments => {
                            for (const comment of comments) {

                                if (post.id === comment.postId) {
                                    let divCardComments = document.createElement('div');
                                    divCardComments.classList.add('cardComments');
                                    divCardComments.innerHTML = `<h4>post id: ${comment.postId}</h4>
                                                                 <h5>comment id: ${comment.id}</h5>
                                                                 <h4>name: ${comment.name}</h4>
                                                                 <h6>email: ${comment.email}</h6>
                                                                 <p>body: ${comment.body}</p>`;
                                    divCardLast.appendChild(divCardComments)
                                }
                            }
                        })
                }

                divCard.appendChild(button);
                divCard.appendChild(divCardLast);

                target.appendChild(divCard);
                document.body.appendChild(target);
            }
        }
    });


















