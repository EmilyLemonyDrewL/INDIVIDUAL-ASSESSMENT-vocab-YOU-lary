import renderToDOM from '../../utils/renderToDom';

const navBar = () => {
  const domString = `<nav class="navbar fixed-top navbar-expand-lg mb-5">
  <div class="container-fluid">
      <img src="https://images.unsplash.com/photo-1601442382510-704d549b35e7?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=684&q=80" width="80" height="80" alt="watchtower">
      <h3 href="#">Lemony's Vocabulary Cards</h3>
      <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarText" aria-controls="navbarText" aria-expanded="false" aria-label="Toggle navigation">
        <span class="navbar-toggler-icon"></span>
      </button>
      <div id="add-button">
          <p class="btn btn-lg btn-outline-light mb-8 fs-3" id="add-vocab-btn">add new word</p>
          </div>
      <div class="collapse navbar-collapse" id="navbarText">
      <ul>
      <li class="nav-item">
      <a class="nav-link" href="#" id="show-all-cards">Show All</a>
      </li>
      <li class="nav-item">
      <a class="nav-link" href="#" id="category-1">Javascript</a>
      </li>
      <li class="nav-item">
      <a class="nav-link" href="#" id="category-2">Python</a>
      </li>
      <li class="nav-item">
      <a class="nav-link" href="#" id="category-3">SQL</a>
      </li>
      </ul>
        <span class="navbar-text">
          <div id="logout-button"></div>
        </span>
      </div>
      </div>
    </nav>`;

  renderToDOM('#navigation', domString);
};

export default navBar;
