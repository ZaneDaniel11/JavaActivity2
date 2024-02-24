var product = document.querySelector("#testing");
product.innerHTML = "Products";



// var parent = document.querySelector("body");

// var newElement = document.createElement("h2");
// newElement.innerHTML = "Hi nigga";

// parent.prepend(newElement);

// var parentbox = document.querySelector(".sup");
// var newElement2 = document.createElement("p");
// newElement2.innerHTML = "Price";
// parentbox.append(newElement2);

// var title = document.querySelector("h1");
// title.remove();

const list = [

    {
        Name: "Product 1",
        Price: 11,
        Description: "This is Trash"
    },

    {
        Name: "Product 2",
        Price: 90,
        Description: "This is Trash"
    },
    {
        Name: "Product 3",
        Price: 69,
        Description: "This is Trash"
    },

    {

        Name: "Product 4",
        Price: 21,
        Description: "This is Trash"
    },

        
    {

        Name: "Product 1",
        Price: 11,
        Description: "This is Trash"
    },


    

];


for (var i = 0; i < list.length; i++) 

{

    var parentRow = document.querySelector(".container .row");

    var cardTemplate = document.querySelector("#Template");

    var clone = cardTemplate.content.cloneNode(true);


    clone.querySelector(".card .card-body h5.card-title").innerHTML = list[i].Name; 
    // clone.querySelector("card .card-body h5.card-tittle").innerHTML = list[i].Name;
    clone.querySelector(".card .card-body #price").innerHTML = list[i].Price;
    clone.querySelector(".card .card-body p.card-text").innerHTML = list[i].Description;
    parentRow.append(clone);
}
