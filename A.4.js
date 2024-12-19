const sellers = [
    { username: "seller1", password: "password123" },
    { username: "seller2", password: "securePass456" }
];

// Categories and their items with prices
const categories = {
    Beverages: [{ name: "Water", price: 10 }],
    Snacks: [{ name: "Chips", price: 15 }],
    Meals: [{ name: "Burger", price: 50 }]
};

// Function to authenticate sellers
function authenticateSeller(username, password) {
    return sellers.some(seller => seller.username === username && seller.password === password);
}

// Function for SELLER flow
function sellerFlow() {
    console.log("\nSELLER Login");
    const username = prompt("Enter your username:").trim();
    const password = prompt("Enter your password:").trim();

    if (authenticateSeller(username, password)) {
        console.log(`Welcome, ${username}!`);
        sellerMenu();
    } else {
        console.log("Invalid username or password. Access denied.");
    }
}

// SELLER menu to ADD, REMOVE, ADD CATEGORY, or LOGOUT
function sellerMenu() {
    while (true) {
        console.log("\nSELLER Options: ");
        const choice = prompt("Type 'ADD', 'REMOVE', 'ADD-CATEGORY', or 'LOGOUT':").trim().toUpperCase();

        if (choice === "ADD") {
            updateCategory("add");
        } else if (choice === "REMOVE") {
            updateCategory("remove");
        } else if (choice === "ADD-CATEGORY") {
            addCategory();
        } else if (choice === "LOGOUT") {
            console.log("You have successfully logged out.");
            break;
        } else {
            console.log("Invalid option. Please try again.");
        }
    }
}

// Function to update categories (ADD/REMOVE)
function updateCategory(action) {
    console.log("\nAvailable Categories: ");
    Object.keys(categories).forEach((category, index) => {
        console.log(`${index + 1}. ${category}`);
    });

    const categoryChoice = prompt("Enter the category name to update:").trim();
    if (!categories[categoryChoice]) {
        console.log("Invalid category. Please try again.");
        return;
    }

    if (action === "add") {
        const newItem = prompt(`Enter the name of the item to ADD to ${categoryChoice}:`).trim();
        const itemPrice = parseFloat(prompt(`Enter the price for ${newItem}:`).trim());
        if (isNaN(itemPrice) || itemPrice <= 0) {
            console.log("Invalid price. Item not added.");
            return;
        }
        categories[categoryChoice].push({ name: newItem, price: itemPrice });
        console.log(`Item '${newItem}' added to ${categoryChoice} at ₱${itemPrice}.`);
    } else if (action === "remove") {
        console.log(`Current items in ${categoryChoice}:`);
        categories[categoryChoice].forEach((item, index) => {
            console.log(`${index + 1}. ${item.name} - ₱${item.price}`);
        });
        const removeItem = prompt(`Enter the name of the item to REMOVE from ${categoryChoice}:`).trim();

        const index = categories[categoryChoice].findIndex(item => item.name === removeItem);
        if (index !== -1) {
            categories[categoryChoice].splice(index, 1);
            console.log(`Item '${removeItem}' removed from ${categoryChoice}.`);
        } else {
            console.log(`Item '${removeItem}' not found in ${categoryChoice}.`);
        }
    }
}

function addCategory() {
    while (true) {
        const newCategory = prompt("Enter the name of the new category:").trim();
        if (categories[newCategory]) {
            console.log("Category already exists. Try again.");
            continue;
        }

        const newItem = prompt(`Enter the name of the first item to ADD to ${newCategory}:`).trim();
        const itemPrice = parseFloat(prompt(`Enter the price for ${newItem}:`).trim());
        if (isNaN(itemPrice) || itemPrice <= 0) {
            console.log("Invalid price. Category and item not added.");
            continue;
        }

        // Add new category and item
        categories[newCategory] = [{ name: newItem, price: itemPrice }];
        console.log(`Category '${newCategory}' created with item '${newItem}' at ₱${itemPrice}.`);

        // Ask if the user wants to continue
        const continueAdding = prompt("Do you want to add another category? (Type 'YES' to continue or 'NO' to go back):").trim().toUpperCase();
        if (continueAdding !== "YES") {
            break;
        }
    }
}

// Function for CUSTOMER flow
function customerFlow() {
    console.log("\nCUSTOMER Menu");
    console.log("Feature under development... Stay tuned!");
}

// Main kiosk program
function kioskProgram() {
    console.log("Welcome to the Kiosk Ordering System");

    while (true) {
        const userType = prompt("Are you a SELLER or CUSTOMER? (Type 'SELLER' or 'CUSTOMER', or 'EXIT' to quit)").trim().toUpperCase();

        if (userType === "SELLER") {
            sellerFlow();
            break;
        } else if (userType === "CUSTOMER") {
            customerFlow();
            break;
        } else if (userType === "EXIT") {
            console.log("Exiting the program. Thank you!");
            break;
        } else {
            console.log("Invalid choice. Please try again.");
        }
    }
}

// Run the program
kioskProgram();