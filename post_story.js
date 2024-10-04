document.getElementById('storyCreateForm').onsubmit = async function(event) {
    event.preventDefault(); // Prevent the default form submission

    // Create a FormData object
    const formData = new FormData();
    formData.append('title', document.getElementById('title').value);
    formData.append('image', document.getElementById('image').files[0]); // Get the file from input
    formData.append('content', document.getElementById('content').value);
    formData.append('category', document.getElementById('category').value);

    try {
        const response = await fetch(`https://golpokuri-api.onrender.com/story/create/`, {
            method: 'POST',
            headers: {
                'Authorization': `Token ${localStorage.getItem("token")}`, // Token authentication
            },
            body: formData // Send the FormData object
        });

        if (response.ok) {
            alert('Story created successfully!');
            document.getElementById('storyCreateForm').reset();
            window.location.href = "dashboard.html";
        } else {
            const errorData = await response.json();
            console.error('Error:', errorData);
            alert('Failed to create the story. Please check your input.');
        }
    } catch (error) {
        console.log('Error:', error);
        alert('An error occurred while creating the story.');
    }
};
document.addEventListener('DOMContentLoaded', function () {
    const categorySelect = document.getElementById('category_list');

    fetch('https://golpokuri-api.onrender.com/story/categories/')
        .then(response => response.json())
        .then(data => {
            console.log(data);
            data.forEach(category => {
                const option = document.createElement('option');
                option.value = category.id; // Assuming 'id' is the unique identifier for the category
                option.textContent = category.name; // Assuming 'name' is the name of the category
                categorySelect.appendChild(option);
            });
        })
        .catch(error => {
            console.error('Error fetching categories:', error);
        });
});