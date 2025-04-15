/*loader script*/
const loader = document.querySelector(".loader");
const main = document.querySelector(".main");

if (loader && main) {
  window.onload = function () {
    loading();
  };

  function loading() {
    setTimeout(() => {
      loader.style.opacity = 0;
      loader.style.display = "none";

      main.style.display = "block";
      setTimeout(() => (main.style.opacity = 1), 50);
    }, 10000);
  }
} else {
  console.error("Loader or main element not found!");
}


document.getElementById("download-btn").addEventListener("click", function () {
  const url = document.getElementById("url").value;

  if (!url) {
    alert("Please enter a valid URL.");
    return;
  }

  // Create an anchor element to trigger the download
  const a = document.createElement("a");
  a.href = url;
  a.download = ""; // This will prompt the browser to download the file
  document.body.appendChild(a);
  a.click();
  document.body.removeChild(a);
});