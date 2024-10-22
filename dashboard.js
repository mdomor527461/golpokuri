const insertStories = (data) => {
    console.log(data);
    data.forEach((element) => {
        const parent = document.getElementById("stories");
        const div = document.createElement("div"); // Corrected from 'ootion' to 'option'
        div.classList.add('col-lg-4');
        div.classList.add('col-md-6');
        div.classList.add('my-5');
       div.innerHTML = `    
              <div class="post-entry-1 h-100">
                   <img src="${element.image_url}" alt="Image" class="img-fluid" style="width:400px;height:250px;">
                <div class="post-entry-1-contents" style="background-color: rgb(190, 236, 220);">  
                  <h1 class="mb-5 mt-5">${element.title}</h1>
                  <h4 class="mb-3 mt-3">${element.writer}</h4>
                  <h5 class="mb-3 mt-3">Category : ${element.category_name}</h5>             
                  <p class="mb-3 mt-3">${element.date_posted.slice(0,10)}</p>
                   <div class="d-flex justify-content-center mt-5 mb-5">
                   <a href="details.html?id=${element.id}" class="text-dark" style="background-color: green; padding: 10px;border-radius: 5px;">Read Story</a>
                   </div>
                  <div class="d-flex justify-content-center mt-5 mb-5">
                    <a href="edit.html?id=${element.id}" class="btn btn-primary mx-3">Edit</a>
                    <button class="btn btn-danger mx-3" onclick="deleteStory(${element.id})">Delete</button>
                </div>
                </div>
              </div>
       `;
        parent.appendChild(div);
    });
}
function deleteStory(id) {
  const deleteUrl = `https://golpokuri-api.vercel.app/story/stories/delete/${id}`; // Construct the delete URL

  // Confirm the deletion action
  if (confirm('Are you sure you want to delete this story?')) {
      fetch(deleteUrl, {
          method: 'DELETE',
          headers: {
              'Content-Type': 'application/json',
              'Authorization': `Token ${localStorage.getItem("token")}`// Include your token if required
          }
      })
      .then(response => {
          if (response.ok) {
              alert('Story deleted successfully!'); // Notify the user
              // Optionally, you can refresh the page or remove the story element from the UI
              location.reload(); // Reload the page to see the changes
          } else {
              return response.json(); // Get the error response for further inspection
          }
      })
      .then(data => {
          if (data) {
              console.log('Error details:', data); // Check the exact error message from the server
          }
      })
      .catch(error => console.error('Error deleting story:', error));
  }
}
