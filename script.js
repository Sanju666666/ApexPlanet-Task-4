// ---------------- NOTES (LOCAL STORAGE) ----------------

let notes = JSON.parse(localStorage.getItem("notes")) || [];

function renderNotes() {

    let noteList = document.getElementById("noteList");

    noteList.innerHTML = "";

    notes.forEach((note, index) => {

        let li = document.createElement("li");

        li.innerHTML = `
            ${note}
            <button class="delete-btn" onclick="deleteNote(${index})">
                Delete
            </button>
        `;

        noteList.appendChild(li);

    });

}

function addNote() {

    let input = document.getElementById("noteInput");

    let note = input.value.trim();

    if(note === ""){

        alert("Please enter a note.");

        return;

    }

    notes.push(note);

    localStorage.setItem("notes", JSON.stringify(notes));

    input.value = "";

    renderNotes();

}

function deleteNote(index){

    notes.splice(index,1);

    localStorage.setItem("notes", JSON.stringify(notes));

    renderNotes();

}


// ---------------- PRODUCTS ----------------

const products = [

{
name:"Dell Laptop",
category:"Laptop",
price:65000
},

{
name:"HP Laptop",
category:"Laptop",
price:55000
},

{
name:"Lenovo Laptop",
category:"Laptop",
price:70000
},

{
name:"Samsung Mobile",
category:"Mobile",
price:30000
},

{
name:"Realme Mobile",
category:"Mobile",
price:18000
},

{
name:"iPhone",
category:"Mobile",
price:80000
}

];

function displayProducts(){

    let filter=document.getElementById("filter").value;

    let sort=document.getElementById("sort").value;

    let filtered=[...products];

    if(filter!=="all"){

        filtered=filtered.filter(
            p=>p.category===filter
        );

    }

    if(sort==="low"){

        filtered.sort((a,b)=>a.price-b.price);

    }

    else if(sort==="high"){

        filtered.sort((a,b)=>b.price-a.price);

    }

    let container=document.getElementById("productContainer");

    container.innerHTML="";

    filtered.forEach(product=>{

        container.innerHTML+=`

        <div class="product">

            <h3>${product.name}</h3>

            <p>Category : ${product.category}</p>

            <p>₹ ${product.price}</p>

        </div>

        `;

    });

}

renderNotes();

displayProducts();