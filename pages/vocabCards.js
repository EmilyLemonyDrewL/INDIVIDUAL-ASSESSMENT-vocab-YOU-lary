import clearDom from '../utils/clearDom';
import renderToDOM from '../utils/renderToDom';

const emptyVocab = () => {
  const domString = '<h1>No Vocabulary Words</h1>';
  renderToDOM('#hereGoes', domString);
};

const showVocab = (array) => {
  clearDom();

  let domString = '';
  array.forEach((item) => {
    domString += `
    <div class="card" id="cards">
    <div class="card-body">
    <h5 class="card-title fs-2">${item.title}</h5>
      <p class="fs-5">${item.definition}</p>
      <p class="fs-5 fw-bold">Language/Tech:</p>
      <p class="fs-4">${item.category}</p>
      <p id="edit-word-btn--${item.firebaseKey}" class="btn btn-outline-secondary fs-4">EDIT</p>
      <p id="delete-word-btn--${item.firebaseKey}" class="btn btn-outline-secondary fs-4">DELETE</p>
  </div>
  </div>`;
  });
  renderToDOM('#hereGoes', domString);
};

export { showVocab, emptyVocab };
