/*loader script*/
//create a variable to select the loader and main elements
const loader = document.querySelector(".loader");
const main = document.querySelector(".main");

// Check if the loader and main elements exist
if (loader && main) {
  window.onload = function () {
    loading();
  };

  // Function to handle the loading animation
  // This function will be called when the window is fully loaded
  function loading() {
    //let the loader fade out
    setTimeout(() => {
      loader.style.opacity = 0;
      loader.style.display = "none";

      //let the main content fade in
      main.style.display = "block";
      setTimeout(() => (main.style.opacity = 1),50);
    },  10000);
  }
} else {
  console.error("Loader or main element not found!");
}

// select the download button and URL input field
const downloadBtn = document.getElementById("downloadBtn");
const urlInput = document.getElementById("url");
// add a click event listener to the download button
downloadBtn.addEventListener("click", () => {
  //get the URL from the input field
  const fileUrl = urlInput.value.trim();
  if (fileUrl) {
    // If the URL is valid, redirect to the backend to start the download
    window.location.href = `http://localhost:4000/download?url=${encodeURIComponent(fileUrl)}`;
  } else {
    alert("Please enter a valid URL.");
  }
});
