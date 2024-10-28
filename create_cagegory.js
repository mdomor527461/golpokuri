document.getElementById('categoryCreateForm').onsubmit = async function(event) {
    event.preventDefault(); // Prevent the default form submission

    // Create a FormData object
    const formData = new FormData();
    formData.append('name', document.getElementById('name').value);
    formData.append('image', document.getElementById('image').files[0]); // Get the file from input
    try {
        const response = await fetch(`https://golpokuri-api.vercel.app/story/category/create`, {
            method: 'POST',
            headers: {
                'Authorization': `Token ${localStorage.getItem("token")}`, // Token authentication
            },
            body: formData // Send the FormData object
        });

        if (response.ok) {
            alert('Category created successfully!');
            document.getElementById('categoryCreateForm').reset();
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
