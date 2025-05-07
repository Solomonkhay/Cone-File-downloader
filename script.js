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

// FunctionTo Download

// Add event listener to the download button
document.getElementById("download-btn").addEventListener("click", function () {
  // Get the URL entered by the user
  const url = document.getElementById("url").value.trim();

  // Check if the URL is empty
  if (!url) {
    alert("Please enter a valid URL.");
    return;
  }

  try {
    // Check if the URL is a Base64 data URL
    if (url.startsWith("data:")) {
      // Extract the file type from the Base64 data URL
      const mimeType = url.match(/^data:(.*?);base64,/)[1];
      const fileExtension = mimeType.split("/")[1];

      // Create an anchor element to trigger the download
      const a = document.createElement("a");
      a.href = url;

      // Set the download attribute to suggest a filename
      a.download = `downloaded_file.${fileExtension}`;
      document.body.appendChild(a); // Append the anchor to the DOM
      a.click(); // Programmatically click the anchor to start the download
      document.body.removeChild(a); // Remove the anchor from the DOM

      // Notify the user that the download has been triggered
      alert("Downloading file...");
      return;
    }

    // Validate the URL format using a regular expression
    const isValidUrl = url.match(/^(https?:\/\/[^\s$.?#].[^\s]*)$/);
    if (!isValidUrl) {
      alert("Invalid URL format. Please enter a valid URL.");
      return;
    }

    // Check if the URL is a YouTube link
    if (url.includes("youtube.com") || url.includes("youtu.be")) {
      alert("Downloading YouTube videos feature is not supported yet.");
      return;
    }

    // Infer the file type from the URL (e.g., .pdf, .jpg, .mp3)
    const fileExtension = url.split(".").pop().toLowerCase();

    // Check if the file type is supported
    const supportedFileTypes = [
      "pdf",
      "jpg",
      "jpeg",
      "png",
      "gif",
      "mp3",
      "wav",
      "mp4",
    ];
    if (!supportedFileTypes.includes(fileExtension)) {
      alert(
        `Unsupported file type: .${fileExtension}. Please provide a valid file URL.`
      );
      return;
    }

    // Create an anchor element to trigger the download
    const a = document.createElement("a");
    a.href = url;

    // Set the download attribute to suggest a filename
    a.download = `downloaded_file.${fileExtension}`;
    document.body.appendChild(a); // Append the anchor to the DOM
    a.click(); // Programmatically click the anchor to start the download
    document.body.removeChild(a); // Remove the anchor from the DOM

    // Notify the user that the download has been triggered
    alert("Download triggered successfully!");
  } catch (error) {
    // Log any errors to the console and notify the user
    console.error("Error while downloading the file:", error);
    alert(
      "An error occurred while trying to download the file. Please try again."
    );
  }
});
