const mainNav = document.querySelector('.navigation');
const hamButton = document.querySelector('#menu');
const lastModified = document.getElementById("lastModified");
const year = new Date().getFullYear(); 
const pictures = document.getElementById("pictureID")


lastModified.textContent = `Last modification: ${document.lastModified}`;

//Add a click event listener to the hamburger button & use a callback function that toggles. 

hamButton.addEventListener('click', () => {
    mainNav.classList.toggle('show');
    hamButton.classList.toggle('show');
})

const temples = [
    {
        templeName: "Aba Nigeria",
        location: "Aba, Nigeria",
        dedicated: "2005, August, 7",
        area: 11500,
        imageUrl:
        "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/aba-nigeria/400x250/aba-nigeria-temple-lds-273999-wallpaper.jpg"
    },
    {
        templeName: "Manti Utah",
        location: "Manti, Utah, United States",
        dedicated: "1888, May, 21",
        area: 74792,
        imageUrl:
        "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/manti-utah/400x250/manti-temple-768192-wallpaper.jpg"
    },
    {
      templeName: "Payson Utah",
      location: "Payson, Utah, United States",
      dedicated: "2015, June, 7",
      area: 96630,
      imageUrl:
      "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/payson-utah/400x225/payson-utah-temple-exterior-1416671-wallpaper.jpg"
    },
    {
        templeName: "Yigo Guam",
        location: "Yigo, Guam",
        dedicated: "2020, May, 2",
        area: 6861,
        imageUrl:
        "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/yigo-guam/400x250/yigo_guam_temple_2.jpg"
    },
    {
        templeName: "Washington D.C.",
        location: "Kensington, Maryland, United States",
        dedicated: "1974, November, 19",
        area: 156558,
        imageUrl:
        "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/washington-dc/400x250/washington_dc_temple-exterior-2.jpeg"
    },
    {
        templeName: "Lima Perú",
        location: "Lima, Perú",
        dedicated: "1986, January, 10",
        area: 9600,
        imageUrl:
        "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/lima-peru/400x250/lima-peru-temple-evening-1075606-wallpaper.jpg"
    },
    {
        templeName: "Mexico City Mexico",
        location: "Mexico City, Mexico",
        dedicated: "1983, December, 2",
        area: 116642,
      imageUrl:
      "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/mexico-city-mexico/400x250/mexico-city-temple-exterior-1518361-wallpaper.jpg"
    },
    {
        templeName: "Santo Domingo Dominican Republic",
        location: "Santo Domingo Dominican Republic",
        dedicated: "2000, September, 17",
        area: 67000,
        imageUrl:
        "https://churchofjesuschristtemples.org/assets/img/temples/santo-domingo-dominican-republic-temple/santo-domingo-dominican-republic-temple-1444-main.jpg"
    },
    {
        templeName: "Manhattan New York",
        location: "Manhattan New York",
        dedicated: "2002, September, 23",
        area: 20630,
        imageUrl:
        "https://churchofjesuschristtemples.org/assets/img/temples/manhattan-new-york-temple/manhattan-new-york-temple-40080-main.jpg"
    },
    {
        templeName: "Boston Massachusetts",
        location: "Boston Massachusetts",
        dedicated: "1997, June, 13",
        area: 69600,
        imageUrl:
        "https://churchofjesuschristtemples.org/assets/img/temples/boston-massachusetts-temple/boston-massachusetts-temple-9913-main.jpg"
    },   
];

const home = document.getElementById("home");
const old = document.getElementById("old");
const newTemple = document.getElementById("new");
const large = document.getElementById("large");
const small = document.getElementById("small");


  createTempleCard(temples);



  old.addEventListener("click", () => {
   const oldTemples = temples.filter(temple => {
        const year = Number(temple.dedicated.split(", ")[0]);
         return year < 1900;
      })
      createTempleCard(oldTemples)
  })
  newTemple.addEventListener("click", () => {
   const newTemples = temples.filter(temple => {
        const year = Number(temple.dedicated.split(", ")[0]);
         return year > 2000;
      })
      createTempleCard(newTemples)
  })

  large.addEventListener("click", () => {
    largeTemples = temples.filter(temple => temple.area > 90000);
    createTempleCard(largeTemples);
  })

  small.addEventListener("click", () => {
    smallTemples = temples.filter(temple => temple.area < 10000);
    createTempleCard(smallTemples);
  })

  home.addEventListener("click", () => {
    createTempleCard(temples);
  })

function createTempleCard(filteredTemples) {
    pictures.innerHTML = "";
    filteredTemples.forEach(temple => {
        const card = document.createElement("div");
        card.classList.add("temple-card");
        
        //Temple name
        const templeName = document.createElement("h2");
        templeName.textContent = temple.templeName;
        card.appendChild(templeName);

        //Temple location
        const location = document.createElement("p");
        location.textContent = `Location: ${temple.location}`;
        card.appendChild(location);

        //Dedication
        const dedicated = document.createElement("p");
        dedicated.textContent = `Dedicated: ${temple.dedicated}`;
        card.appendChild(dedicated);

        //Area
        const area = document.createElement("p");
        area.textContent = `Area: ${temple.area}`;
        card.appendChild(area);

        //Image
        const image = document.createElement("img");
        image.src = temple.imageUrl;
        image.alt = temple.templeName;
        image.loading = "lazy";
        image.width = 250;
        image.height = 250;
        card.appendChild(image);

        //Append the card to the picture div
        pictures.appendChild(card);
    })
}