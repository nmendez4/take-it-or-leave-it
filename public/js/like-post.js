async function likesFormHandler(event) {
    event.preventDefault();

    const likes = document

    const postId = window.location.toString().split('/')[
        window.location.toString().split.length - 1
    ];

    if (likes) {
        const response = await fetch(`/api/post/likes`, {
            method: 'POST',
            body: JSON.stringify({
                likes,
                postId
            }),
            headers: {
                'Content-Type': 'application/json'
            }
        });

        if (response.ok) {
            document.location.reload();
        } else {
            alert(response.statusText)
        }
    }
}

// missing selector
document.querySelector('.like-btn').addEventListener('click', likesFormHandler);