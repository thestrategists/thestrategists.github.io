import { customFonts } from './custom-fonts.js';

export const createTextBox = (index, data = {}) => {
  const inputTemplate = /* html */`
    <div class="d-flex align-items-center">
      <button class="btn" data-button="delete-text-box" aria-label="Remove"></button>

      <input class="form-control m-2" type="text" value="${data.text}" data-input="text" autocomplete="off" placeholder="${`Text #${index + 1}`}" style="min-width: 0;">

      <div class="d-flex align-items-center pr-2">
        <input class="form-control" type="color" value="${data.fillColor}" data-input="fillColor" title="Fill color">
        <input class="form-control" type="color" value="${data.shadowColor}" data-input="shadowColor" title="Outline color">
        <button class="btn btn-secondary settings-button" data-button="settings" aria-label="Settings"></button>
      </div>
    </div>

    <div class="p-2 ${data._isSettingsOpen ? '' : 'd-none'}" data-section="settings">
      <div class="form-row">
        <div class="col-6 mb-3">
          <label for="fontInput_${index}" class="mb-1 d-block text-truncate">Font: </label>

          <select class="custom-select" data-input="font" id="fontInput_${index}">
            <optgroup label="Web fonts">
              <option value="Impact">Impact</option>
              <option value="Arial">Arial</option>
              <option value="Arial Black">Arial Black</option>
              <option value="Helvetica">Helvetica</option>
              <option value="Comic Sans MS">Comic Sans MS</option>
              <option value="Times">Times</option>
              <option value="Times New Roman">Times New Roman</option>
              <option value="Courier New">Courier New</option>
              <option value="Verdana">Verdana</option>
              <option value="Georgia">Georgia</option>
              <option value="Palatino">Palatino</option>
              <option value="Garamond">Garamond</option>
              <option value="Bookman">Bookman</option>
              <option value="Trebuchet MS">Trebuchet MS</option>
            </optgroup>
            <optgroup label="Google fonts">
              ${customFonts.map(({ name, label }) => `<option value="${name}">${label}</option>`)}
            </optgroup>
          </select>
        </div>

        <div class="col-3 mb-3">
          <label for="fontSizeInput_${index}" class="mb-1 d-block text-truncate">Size:</label>
          <input class="form-control" type="number" min="1" max="100" value="${data.fontSize}" data-input="fontSize" id="fontSizeInput_${index}">
        </div>

        <div class="col-3 mb-3">
          <label for="fontWeightInput_${index}" class="mb-1 d-block text-truncate">Weight:</label>
          <select class="custom-select" data-input="fontWeight" id="fontWeightInput_${index}">
            <option value="normal" selected>Normal</option>
            <option value="bold">Bold</option>
          </select>
        </div>
      </div>

      <div class="form-row">
        <div class="col-6 mb-3">
          <label for="shadowWidthInput_${index}" class="mb-1 d-block text-truncate">Shadow width:</label>
          <input class="form-control" type="number" min="0" max="10" value="${data.shadowBlur}" data-input="shadowBlur" id="shadowWidthInput_${index}">
        </div>

        <div class="col-6 mb-3">
          <label for="textAlignInput_${index}" class="mb-1 d-block text-truncate">Text align:</label>
          <select class="custom-select" data-input="textAlign" id="textAlignInput_${index}">
            <option value="left">Left</option>
            <option value="center">Center</option>
            <option value="right">Right</option>
          </select>
        </div>
      </div>

      <div class="form-row">
        <div class="col-6 mb-3">
          <label class="mb-1 d-block text-truncate" for="offsetYInput_${index}">Vertical offset:</label>
          <input class="form-control" type="number" value="${data.offsetY}" data-input="offsetY" id="offsetYInput_${index}">
        </div>

        <div class="col-6 mb-3">
          <label class="mb-1 d-block text-truncate" for="offsetXInput_${index}">Horizontal offset:</label>
          <input class="form-control" type="number" value="${data.offsetX}" data-input="offsetX" id="offsetXInput_${index}">
        </div>

        <div class="col-12">
          <div class="move-text-actions mb-3">
            <button type="button" class="btn btn-secondary" data-move="offsetY" data-sign="-" aria-label="Up"></button>
            <button type="button" class="btn btn-secondary" data-move="offsetX" data-sign="+" aria-label="Right"></button>
            <button type="button" class="btn btn-secondary" data-move="offsetY" data-sign="+" aria-label="Down"></button>
            <button type="button" class="btn btn-secondary" data-move="offsetX" data-sign="-" aria-label="Left"></button>
          </div>
        </div>
      </div>

      <div class="form-row">
        <div class="col-lg-12">
          <div class="custom-control custom-checkbox">
            <input type="checkbox" class="custom-control-input" id="allCapsCheckbox_${index}" data-input="allCaps">
            <label class="custom-control-label" for="allCapsCheckbox_${index}">ALL CAPS</label>
          </div>
        </div>
      </div>
    </div>
  `;

  const fragment = document.createDocumentFragment();
  const div = document.createElement('div');

  div.className = 'bg-light border shadow-sm mb-3 rounded';
  div.setAttribute('data-section', 'textBox');
  div.setAttribute('data-index', index);
  div.innerHTML = inputTemplate;
  div.querySelector('[data-input="font"]').value = data.font;
  div.querySelector('[data-input="textAlign"]').value = data.textAlign;
  div.querySelector('[data-input="allCaps"]').checked = data.allCaps;

  return fragment.appendChild(div);
};
