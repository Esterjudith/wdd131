    const lastModified = document.getElementById("lastModified");
    const selectElement = document.getElementById("productName");  
   
    const btn = document.getElementById("btn");


    lastModified.textContent = `Last modification: ${document.lastModified}`;

    const products = [
        {
        id: "fc-1888",
        name: "flux capacitor",
        averagerating: 4.5
        },
        {
        id: "fc-2050",
        name: "power laces",
        averagerating: 4.7
        },
        {
        id: "fs-1987",
        name: "time circuits",
        averagerating: 3.5
        },
        {
        id: "ac-2000",
        name: "low voltage reactor",
        averagerating: 3.9
        },
        {
        id: "jj-1969",
        name: "warp equalizer",
        averagerating: 5.0
        }
    ];

    products.forEach(product => {
        const option = document.createElement("option");

        option.value = product.id;
        option.textContent = product.name;
        
        selectElement.appendChild(option);
    })
 
     function updatedStorage(){
        const storedClicks = parseInt(localStorage.getItem("clicks") ?? 0);
        localStorage.setItem("clicks", storedClicks + 1);
     }

    btn.addEventListener('click', updatedStorage)

    
       
       