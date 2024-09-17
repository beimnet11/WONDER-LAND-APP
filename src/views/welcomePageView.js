export const createWelcomePageView = () => {
  const welcomePageView = document.createElement('div');
  welcomePageView.innerHTML = `
<div class="welcome-page">
<h1> country Information Look Up</h1>

<input type ='text' id ='search' placeholder = 'Enter a country name'>
<button id = 'search-btn'>Search </button>
</div>
`;

  return welcomePageView;
};
