document.addEventListener("DOMContentLoaded", () => {
    console.log("BlockSmart app loaded");

    // Example: attach to a button if you have one
    const btn = document.getElementById("actionButton");
    if (btn) {
        btn.addEventListener("click", () => {
            alert("BlockSmart is running");
        });
    }
});
