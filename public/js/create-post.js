// should also prompt the user to upload a photo of their product/item
async function newFormHandler(event) {
    event.preventDefault();

    const product_name = document.querySelector('input[name="product_name"]').value;
    const description = document.querySelector('input[name="description"]').value;
    const image = document.querySelector('#upload-input').value;
    console.log(image);

    const response = await fetch(`/api/posts`, {
        method: 'POST',
        body: JSON.stringify({
            product_name,
            description
            
        }),
        headers: {
            'Content-Type': 'application/json'
        }
    });

    if (response.ok) {
        document.location.replace('/dashboard');
    } else {
        alert(response.statusText);
    }
}


document.querySelector('.new-post-form').addEventListener('submit', newFormHandler);
