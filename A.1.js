// Array of seller accounts
const sellers = [
    { username: "seller1", password: "password123" },
    { username: "seller2", password: "securePass456" }
];

// Function to authenticate sellers
function authenticateSeller(username, password) {
    return sellers.some(seller => seller.username === username && seller.password === password);
}

// Main kiosk program
function kioskProgram() {
    console.log("Welcome to the Kiosk Ordering System");

    // Ask user type
    const userType = prompt("Are you a SELLER or CUSTOMER? (Type 'SELLER' or 'CUSTOMER')").trim().toUpperCase();

    if (userType === "SELLER") {
        console.log("\nSELLER Login");
        const username = prompt("Enter your username:").trim();
        const password = prompt("Enter your password:").trim();

        if (authenticateSeller(username, password)) {
            console.log(`Welcome, ${username}! You have successfully logged in as a SELLER.`);
            // Additional SELLER functions can go here
        } else {
            console.log("Invalid username or password. Access denied.");
        }

    } else if (userType === "CUSTOMER") {
        console.log("\nCUSTOMER Menu");
        console.log("Feature under development... Stay tuned!");

    } else {
        console.log("Invalid choice. Please restart the program.");
    }
}

// Run the program
kioskProgram();
