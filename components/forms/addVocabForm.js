import clearDom from '../../utils/clearDom';
import renderToDOM from '../../utils/renderToDom';

// USING THIS FORM FOR BOTH CREATE AND UPDATE
const addVocabForm = (obj = {}) => {
  clearDom();
  const domString = `
    <form id="${obj.firebaseKey ? `update-word--${obj.firebaseKey}` : 'submit-vocab'}"class="mb-4">
      <div class="form-group">
        <label for="title">Vocabulary Word</label>
        <input type="text" class="form-control" id="title" aria-describedby="vocabTitle" placeholder="Enter Vocabulary Word" value="${obj.title || ''}" required>
      </div>
      <div class="form-group">
        <label for="description">Definition</label>
        <textarea class="form-control" placeholder="Word Definition" id="definition" style="height: 100px">${obj.definition || ''}</textarea>
      </div>
      <div class="form-group" id="select-category">
      <select class="form-select" id="category-input" aria-label="Default select example" required>
      <option selected>Choose a Category</option>
      <option value="Javascript">Javascript</option>
      <option value="Python">Python</option>
      <option value="SQL">SQL</option>
      </select>
      </div>
      <button type="submit" class="btn btn-primary">Submit
      </button>
    </form>`;

  renderToDOM('#form-container', domString);
};

export default addVocabForm;
