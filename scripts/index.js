const initialListUser = [
  {
    name: "Татьяна",
    phone: "+7-905-563-90-20"
  },
  {
    name: "Дмитрий",
    phone: "+7-905-555-99-22"
  },
  {
    name: "Илья",
    phone: "+7-901-400-40-33"
  },
  {
    name: "Ольга",
    phone: "+7-916-663-45-23"
  },
];

const userTableElement = document.querySelector('.user-table');
const formUserData = document.querySelector('.user-data-form');
const rowTemplate = document.querySelector('#template-table-row')
  .content.querySelector('.template-row');

const handleDeleteRowClick = (event) => {
  event.target.closest('.template-row').remove();
}

const closeEditMode = () => {
  const editRow = document.querySelector('.edit-mode');
  if (editRow) editRow.classList.remove('edit-mode');
}

const handleEditRowClick = ({name, phone}) => (event) => {
  const rowElement = event.target.closest('.template-row');
  closeEditMode();
  rowElement.classList.add('edit-mode');
}

const getRowTable = (userData) => {
  const rowElement = rowTemplate.cloneNode(true);
  const cellNameElement = rowElement.querySelector('.cell-name-value');
  const cellPhoneElement = rowElement.querySelector('.cell-phone-value');
  const cellNameInput = rowElement.querySelector('.cell-name-input');
  const cellPhoneInput = rowElement.querySelector('.cell-phone-input');
  const editButton = rowElement.querySelector('.cell-edit-btn');
  const deleteButton = rowElement.querySelector('.cell-delete-btn');
  const saveButton = rowElement.querySelector('.cell-save-btn');

  cellNameElement.textContent = userData.name;
  cellPhoneElement.textContent = userData.phone;
  cellNameInput.value = userData.name;
  cellPhoneInput.value = userData.phone;

  editButton.addEventListener('click', handleEditRowClick(userData));
  deleteButton.addEventListener('click', handleDeleteRowClick);
  saveButton.addEventListener('click', () => {
    cellNameElement.textContent = cellNameInput.value;
    cellPhoneElement.textContent = cellPhoneInput.value;
    closeEditMode();
  });

  return rowElement;
}

const renderRow = (userData, wrap) => {
  wrap.append(getRowTable(userData));
}

const handleAddUserDataSubmit = (event) => {
  event.preventDefault();
  const formData = new FormData(event.target);
  renderRow(Object.fromEntries(formData), userTableElement);
  event.target.reset();
}

formUserData.addEventListener('submit', handleAddUserDataSubmit);

initialListUser.forEach((userData) => renderRow(userData, userTableElement));