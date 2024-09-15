export const showLoading = () => {

  const resultContainer = document.getElementById('result-container');
  resultContainer.innerHTML = `
  <div class="loading">
  <h2>Loading...</h2>
  </div>
  `;
}

export const hideLoading = () => {
  const resultContainer = document.getElementById('result-container');
  const loadingDiv = document.querySelector('.loading');

  if (loadingDiv) {
    loadingDiv.remove();
  }
};