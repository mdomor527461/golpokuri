
const loadDetails = (id) =>{
    fetch(`https://golpokuri-api.vercel.app/story/stories/${id}`)
    .then(res => res.json())
    .then(data => insertData(data));
}
const urlParams = new URLSearchParams(window.location.search);
const id = urlParams.get('id');
loadDetails(id);
const insertData = (data) =>{
   const parent = document.getElementById('details');
   const div = document.createElement('div');
   div.innerHTML = `
        <div class="d-flex justify-content-center">
        <img src="${data.image_url}" alt="" style="width: 80%;height:80vh;";>
        </div>
        <h1 class="text-center mt-5 mb-5">${data.title}</h1>
        <p class="mt-5 mb-5" style="font-size:20px;line-spacing:5px;">${data.content}</p>
   `;
   parent.appendChild(div);
}
const loadComments = (id)=>{
    fetch(`https://golpokuri-api.vercel.app/story/stories/${id}/comment`)
    .then(res => res.json())
    .then(data => insertComment(data));
}
loadComments(id);
const insertComment = (data) => {
    console.log(data);
    data.forEach((element) => {
        const parent = document.getElementById("comment-container");
        const div = document.createElement("div"); // Corrected from 'ootion' to 'option'
       div.innerHTML = `    
              <div class="d-flex justify-content-around mt-5" style="background-color: antiquewhite;padding: 20px; width: 60%;margin: 0 auto;border:2px solid black;border-radius:10px;">
                <div class="mx-5 d-flex justify-content-center align-items-center">
                <h1 style="padding: 5px;margin-top: 5px;">${element.user_name}</h1>
                </div>
                <div class="d-flex justify-content-center align-items-center">
                    <h4 style="width: 300px;">${element.content}</h4>
                </div>
            </div>
       `;
        parent.appendChild(div);
    });
}

document.getElementById('commentForm').onsubmit = async function(event) {
    event.preventDefault(); // Prevent the default form submission

    // Create a FormData object
    const formData = new FormData();
    formData.append('content', document.getElementById('content').value);
    try {
        const response = await fetch(`https://golpokuri-api.vercel.app/story/stories/${id}/comment`, {
            method: 'POST',
            headers: {
                'Authorization': `Token ${localStorage.getItem("token")}`, // Token authentication
            },
            body: formData // Send the FormData object
        });

        if (response.ok) {
            alert('Commented successfully!');
            document.getElementById('commentForm').reset();
            window.location.reload();
        } else {
            const errorData = await response.json();
            console.error('Error:', errorData);
            alert('Failed to create the comment. Please check your input.');
        }
    } catch (error) {
        console.log('Error:', error);
        alert('An error occurred while creating the comment.');
    }
};