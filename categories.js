const loadCategories = () =>{
    fetch(`https://golpokuri-api.vercel.app/story/categories/`)
    .then(res => res.json())
    .then(data => insertCategories(data));
}
loadCategories();
const insertCategories = (data) => {
    console.log(data);
    data.forEach((element) => {
        const parent = document.getElementById("categories");
        const div = document.createElement("div"); // Corrected from 'ootion' to 'option'
        div.classList.add('col-lg-4');
        div.classList.add('col-mb-6');
        div.classList.add('mb-2');
       div.innerHTML = `
             <div class="listing-item" id="categories">
                <div class="listing-image">
                  <img src="${element.image}" alt="Image" class="img-fluid" style="width:100%;height:250px;">
                </div>
                <div class="listing-item-content">
                <a href="" class="mb-2 btn" id="cat-name" onclick="setid(${element.id})"><--${element.name}--></a>         
               </div> 
              </div>
       `
        parent.appendChild(div);
    });
}
const setid = (id) =>{
    localStorage.setItem('category_id',id);
}
