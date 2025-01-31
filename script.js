function loadPage() {
    let url = document.getElementById("urlInput").value;
    
    // Ensure correct URL format
    if (!url.startsWith("http")) {
        url = "https://" + url;
    }

    // Load the website in the same page
    window.location.href = url;
}
