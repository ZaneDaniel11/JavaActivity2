const list = [
    {
        Name : "Item 1",
        Category: "Category 1",
        Price : 1,
        Quantity : 1,
        Payment_Status : "Paid"
    },
    {
        Name : "Item 2",
        Category: "Category 2",
        Price : 2,
        Quantity : 2,
        Payment_Status : "Paid"
    },
    {
        Name : "Item 3",
        Category: "Category 3",
        Price : 3,
        Quantity : 3,
        Payment_Status : "Not Paid"
    },
    {
        Name : "Item 4",
        Category: "Category 4",
        Price : 4,
        Quantity : 4,
        Payment_Status : "Not Paid"
    },
    {
        Name : "Item 5",
        Category: "Category 5",
        Price : 5,
        Quantity : 5,
        Payment_Status : "Not Paid"
    },
    {
        Name : "Item 6",
        Category: "Category 6",
        Price : 6,
        Quantity : 6,
        Payment_Status : "Paid"
    },
    {
        Name : "Item 7",
        Category: "Category 7",
        Price : 7,
        Quantity : 7,
        Payment_Status : "Paid"
    },
    {
        Name : "Item 8",
        Category: "Category 8",
        Price : 8,
        Quantity : 8,
        Payment_Status : "Not Paid"
    },
    {
        Name : "Item 9",
        Category: "Category 9",
        Price : 9,
        Quantity : 9,
        Payment_Status : "Not Paid"
    },
    {
        Name : "Item 10",
        Category: "Category 10",
        Price : 10,
        Quantity : 10,
        Payment_Status : "Not Paid"
    },
    {
        Name : "Item 11",
        Category: "Category 11",
        Price : 11,
        Quantity : 11,
        Payment_Status : "Paid"
    },
    {
        Name : "Item 12",
        Category: "Category 12",
        Price : 12,
        Quantity : 12,
        Payment_Status : "Paid"
    },
    {
        Name : "Item 13",
        Category: "Category 13",
        Price : 13,
        Quantity : 13,
        Payment_Status : "Not Paid"
    },
    {
        Name : "Item 14",
        Category: "Category 14",
        Price : 14,
        Quantity : 14,
        Payment_Status : "Not Paid"
    },
    {
        Name : "Item 15",
        Category: "Category 15",
        Price : 15,
        Quantity : 15,
        Payment_Status : "Not Paid"
    },
    {
        Name : "Item 16",
        Category: "Category 16",
        Price : 16,
        Quantity : 16,
        Payment_Status : "Paid"
    },
    {
        Name : "Item 17",
        Category: "Category 17",
        Price : 17,
        Quantity : 17,
        Payment_Status : "Paid"
    },
    {
        Name : "Item 18",
        Category: "Category 18",
        Price : 18,
        Quantity : 18,
        Payment_Status : "Not Paid"
    },
    {
        Name : "Item 19",
        Category: "Category 19",
        Price : 19,
        Quantity : 19,
        Payment_Status : "Not Paid"
    },
    {
        Name : "Item 20",
        Category: "Category 20",
        Price : 20,
        Quantity : 20,
        Payment_Status : "Not Paid"
    },
    {
        Name : "Item 21",
        Category: "Category 21",
        Price : 21,
        Quantity : 21,
        Payment_Status : "Paid"
    },
    {
        Name : "Item 22",
        Category: "Category 22",
        Price : 22,
        Quantity : 22,
        Payment_Status : "Paid"
    },
    {
        Name : "Item 23",
        Category: "Category 23",
        Price : 23,
        Quantity : 23,
        Payment_Status : "Not Paid"
    },
    {
        Name : "Item 24",
        Category: "Category 24",
        Price : 24,
        Quantity : 24,
        Payment_Status : "Not Paid"
    },
    {
        Name : "Item 25",
        Category: "Category 25",
        Price : 25,
        Quantity : 25,
        Payment_Status : "Not Paid"
    },
    {
        Name : "Item 26",
        Category: "Category 26",
        Price : 26,
        Quantity : 26,
        Payment_Status : "Paid"
    },
    {
        Name : "Item 27",
        Category: "Category 27",
        Price : 27,
        Quantity : 27,
        Payment_Status : "Paid"
    },
    {
        Name : "Item 28",
        Category: "Category 28",
        Price : 28,
        Quantity : 28,
        Payment_Status : "Not Paid"
    },
    {
        Name : "Item 29",
        Category: "Category 29",
        Price : 29,
        Quantity : 29,
        Payment_Status : "Not Paid"
    },
    {
        Name : "Item 30",
        Category: "Category 30",
        Price : 30,
        Quantity : 30,
        Payment_Status : "Not Paid"
    },
    
];

for (var i = 0; i < list.length; i++) {  

    var parentRow = document.querySelector(".table");
    var cardTemplate = document.querySelector("#cardTemplate");
    var cloned = cardTemplate.content.cloneNode(true);

    cloned.querySelector("tbody tr.data td.Name").innerHTML = list[i].Name;
    cloned.querySelector("tbody tr.data td.Category").innerHTML = list[i].Category;
    cloned.querySelector("tbody tr.data td.Price").innerHTML = list[i].Price;
    cloned.querySelector("tbody tr.data td.Quantity").innerHTML = list[i].Quantity;
    cloned.querySelector("tbody tr.data td.Payment_Status").innerHTML = list[i].Payment_Status;

    
    if (list[i].Payment_Status === "Not Paid") {
        cloned.querySelector("tbody tr.data td.Payment_Status").style.backgroundColor = "red";
    }

    parentRow.append(cloned); 

}