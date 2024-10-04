
const insertStories = (data) => {
    console.log(data);
    data.forEach((element) => {
        const parent = document.getElementById("stories");
        const div = document.createElement("div"); // Corrected from 'ootion' to 'option'
        div.classList.add('col-lg-4');
        div.classList.add('col-md-6');
        div.classList.add('mb-6');
       div.innerHTML = `    
              <div class="post-entry-1 h-100 mt-3 mb-3">
                   <img src="https://golpokuri-api.onrender.com${element.image}" alt="Image" class="img-fluid" style="width:400px;height:250px;fit-con">
                <div class="post-entry-1-contents" style="background-color: rgb(190, 236, 220);">  
                  <h1 class="mb-5 mt-5">${element.title}</h1>
                  <h4 class="mb-3 mt-3">Wrtier: ${element.writer}</h4>
                  <h5 class="mb-3 mt-3">Category : ${element.category_name}</h5>             
                  <p class="mb-3 mt-3">Post On : ${element.date_posted.slice(0,10)}</p>
                  <div class="d-flex justify-content-center"> <p class="mt-5 mb-5"><a href="details.html?id=${element.id}" class="text-dark" style="background-color: burlywood; padding: 10px;border-radius: 5px;">Read Story</a></p></div>
                </div>
              </div>
       `;
        parent.appendChild(div);
    });
}
