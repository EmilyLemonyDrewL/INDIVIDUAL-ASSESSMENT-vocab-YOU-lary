import renderToDOM from '../../utils/renderToDom';

const navBar = () => {
  const domString = `<nav class="navbar fixed-top navbar-expand-lg navbar-dark bg-dark mb-5">
  <div class="container-fluid">
      <img src="https://images.unsplash.com/flagged/photo-1587302164675-820fe61bbd55?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1160&q=80" width="80" height="80" alt="lemons">
      <a class="navbar-brand title" href="#">Lemony's Vocab-YOU-lary Project</a>
      <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarText" aria-controls="navbarText" aria-expanded="false" aria-label="Toggle navigation">
        <span class="navbar-toggler-icon"></span>
      </button>
      <div class="collapse navbar-collapse" id="navbarText">
      <ul>
      <li class="nav-item">
      <a class="nav-link" href="#" id="show-all-cards">Show All</a>
      </li>
      <li class="nav-item">
      <a class="nav-link" href="#" id="category-1">Web Developement</a>
      </li>
      <li class="nav-item">
      <a class="nav-link" href="#" id="category-2">Herpetology</a>
      </li>
      <li class="nav-item">
      <a class="nav-link" href="#" id="category-3">Crafting</a>
      </li>
      </ul>
        <span class="navbar-text">
          <div id="add-button">
          <button class="btn btn-success btn-lg mb-4" id="add-vocab-btn">Create New Card</button>
          </div>
          <div id="logout-button"></div>
        </span>
      </div>
      </div>
    </nav>`;

  renderToDOM('#navigation', domString);
};

export default navBar;
