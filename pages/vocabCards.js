import clearDom from '../utils/clearDom';
import renderToDOM from '../utils/renderToDom';

const emptyVocab = () => {
  const domString = '<h1>No Vocabulary Words</h1>';
  renderToDOM('#hereGoes', domString);
};

const showVocab = (array) => {
  clearDom();

  // const btnString = '<button class="btn btn-success btn-lg mb-4" id="add-vocab-btn">Create New Card</button>';
  // renderToDOM('#add-button', btnString);

  let domString = '';
  array.forEach((item) => {
    domString += `
    <div class="card">
    <div class="card-body">
    <h5 class="card-title">${item.title}</h5>
      <p>${item.definition}</p>
      <p>${item.category}</p>
      <i id="edit-word-btn--${item.firebaseKey}" class="fas fa-edit btn btn-info"></i>
      <i id="delete-word-btn--${item.firebaseKey}" class="btn btn-danger fas fa-trash-alt"></i>
  </div>
  </div>`;
  });
  renderToDOM('#hereGoes', domString);
};

export { showVocab, emptyVocab };
