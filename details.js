const loadDetails = (id) =>{
    fetch(`https://golpokuri-api.onrender.com/story/stories/${id}`)
    .then(res => res.json())
    .then(data => insertData(data));
}

const insertData = (data) =>{
   const parent = document.getElementById('details');
   const div = document.createElement('div');
   div.innerHTML = `
        <div class="d-flex justify-content-center">
        <img src="https://golpokuri-api.onrender.com${data.image}" alt="" style="width: 80%;height:80vh;";>
        </div>
        <h1 class="text-center mt-5 mb-5">${data.title}</h1>
        <p class="mt-5 mb-5" style="font-size:20px;line-spacing:5px;">${data.content}</p>
   `;
   parent.appendChild(div);
}