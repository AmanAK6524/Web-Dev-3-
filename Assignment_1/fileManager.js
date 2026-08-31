const fs = require("fs");

const fileName = "test.txt";

// Create File
fs.writeFile(fileName, "Hello Node.js", (err) => {
    if (err) {
        console.log("Error creating file:", err.message);
        return;
    }

    console.log("File Created");

    // Read File
    fs.readFile(fileName, "utf8", (err, data) => {
        if (err) {
            console.log("Error reading file:", err.message);
            return;
        }

        console.log("File Content:", data);

        // Update File
        fs.appendFile(fileName, "\nLearning FS Module", (err) => {
            if (err) {
                console.log("Error updating file:", err.message);
                return;
            }

            console.log("File Updated");

            // Read updated file
            fs.readFile(fileName, "utf8", (err, updatedData) => {
                if (err) {
                    console.log("Error reading updated file:", err.message);
                    return;
                }

                console.log("Updated Content:", updatedData);

                // Delete File
                fs.unlink(fileName, (err) => {
                    if (err) {
                        console.log("Error deleting file:", err.message);
                        return;
                    }

                    console.log("File Deleted");
                });
            });
        });
    });
});