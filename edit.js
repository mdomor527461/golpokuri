// Extract the story ID from the URL query parameters
const urlParams = new URLSearchParams(window.location.search);
const storyId = urlParams.get('id');
console.log(storyId);
// Use the storyId to fetch story details and populate the form
// Define the API endpoint for fetching story details
const storyDetailsUrl = `https://golpokuri-api.onrender.com/story/stories/edit/${storyId}`;

// Fetch the story details and populate the form
fetch(storyDetailsUrl, {
    method: 'GET',
    headers: {
        'Authorization': `Token ${localStorage.getItem("token")}`,
        'Content-Type': 'application/json'
    }
})
.then(response => response.json())
.then(data => {
    // Populate the form fields with the story data
    document.getElementById('title').value = data.title;
    document.getElementById('content').value = data.content;
    document.getElementById('category').value = data.category;
})
.catch(error => console.error('Error fetching story details:', error));


const form = document.getElementById('storyEditForm');
form.addEventListener('submit', function(event) {
    event.preventDefault();
    image = document.getElementById('image');
    // Collect form data
    const formData = new FormData(form);
    formData.append('title', document.getElementById('title').value);
    // formData.append('image', document.getElementById('image').files[0]); // Get the file from input
    formData.append('content', document.getElementById('content').value);
    formData.append('category', document.getElementById('category').value);
    // Send the PUT request to update the story
    fetch(storyDetailsUrl, {
        method: 'PUT',
        headers: {
            'Authorization': `Token ${localStorage.getItem("token")}`, // Token authentication
        },
        body: formData
    })
    .then(response => {
        if (response.ok) {
            alert('Story updated successfully!');
            window.location.href = "dashboard.html";
            // Optionally redirect to another page
        } else {
            alert('Failed to update the story.');
        }
    })
    .catch(error => console.error('Error updating story:', error));
});

