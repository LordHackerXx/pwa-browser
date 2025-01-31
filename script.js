function loadPage() {
    let url = document.getElementById("urlInput").value;
    
    // Ensure the URL is formatted correctly
    if (!url.startsWith("http")) {
        url = "https://" + url;
    }
    
    // Open the link in a new tab instead of an iframe
    window.open(url, "_blank");
}
