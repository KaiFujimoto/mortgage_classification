
document.addEventListener("DOMContentLoaded", () => {
  let selectedFile = document.getElementById('input');
  selectedFile.addEventListener("change", handleFiles, false);
});

function handleFiles() {
  let fileList = input.files[0];
  let reader = new FileReader();
  let trainingData = {};
  reader.onload = (event) => {
      const file = event.target.result;
      const allLines = file.split(/\r\n|\n/);
      // Reading line by line
      allLines.forEach((line) => {
        debugger
      });
  };
  reader.onerror = (event) => {
      alert(event.target.error.name);
  };
}

function generateTensorLearning(documentType) {
  // find the first comma
}
