document.addEventListener("DOMContentLoaded", () => {
  let selectedFile = document.getElementById('input');
  debugger
  selectedFile.addEventListener("change", handleFiles, false);
});

function handleFiles() {
  let fileList = this.files;
  debugger
}
