// should also prompt the user to upload a photo of their product/item
async function newFormHandler(event) {
    // event.preventDefault();

    const product_name = document.querySelector('input[name="product_name"]').value;
    const description = document.querySelector('input[name="description"]').value;
    const img_path = document.querySelector('input[name="photoUpload"]').value;
    let img_file

    if(PORT = 3001){
    img_file = img_path.split(`\\`)[2];
    }
    // may need to change for heroku
    else{
    img_file = img_path.split(`\\`)[2];
    }



    const response = await fetch(`/api/posts`, {
        method: 'POST',
        body: JSON.stringify({
            product_name,
            description,
            img_file
        }),
        headers: {
            'Content-Type': 'application/json'
            // 'Content-Type': 'multipart/form-data'
        }
    });

    if (response.ok) {
        document.location.replace('/dashboard');
    } else {
        alert(response.statusText);
    }
}


document.querySelector('.new-post-form').addEventListener('submit', newFormHandler);