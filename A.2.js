// Array of seller accounts
const sellers = [
    { username: "seller1", password: "password123" },
    { username: "seller2", password: "securePass456" }
];

// Categories and their items
const categories = {
    Beverages: ["Water", "Soda"],
    Snacks: ["Chips", "Cookies"],
    Meals: ["Burger", "Pizza"]
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

// SELLER menu to ADD, REMOVE, or LOGOUT
function sellerMenu() {
    while (true) {
        console.log("\nSELLER Options: ");
        const choice = prompt("Type 'ADD', 'REMOVE', or 'LOGOUT':").trim().toUpperCase();

        if (choice === "ADD") {
            updateCategory("add");
        } else if (choice === "REMOVE") {
            updateCategory("remove");
        } else if (choice === "LOGOUT") {
            console.log("You have successfully logged out.");
            break;
        } else {
            console.log("Invalid option. Please try again.");
        }
    }
}

// Function to update categories
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
        categories[categoryChoice].push(newItem);
        console.log(`Item '${newItem}' added to ${categoryChoice}.`);
    } else if (action === "remove") {
        console.log(`Current items in ${categoryChoice}: ${categories[categoryChoice].join(", ")}`);
        const removeItem = prompt(`Enter the name of the item to REMOVE from ${categoryChoice}:`).trim();

        const index = categories[categoryChoice].indexOf(removeItem);
        if (index !== -1) {
            categories[categoryChoice].splice(index, 1);
            console.log(`Item '${removeItem}' removed from ${categoryChoice}.`);
        } else {
            console.log(`Item '${removeItem}' not found in ${categoryChoice}.`);
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
