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

const rowTemplate = document.querySelector('#template-table-row')
  .content.querySelector('.template-row');

const handleDeleteRowClick = (event) => {
  event.target.closest('.template-row').remove();
}

const handleEditRowClick = ({name, phone}) => (event) => {
  const rowElement = event.target.closest('.template-row');
  console.log(name, phone);
}

const getRowTable = (userData) => {
  const rowElement = rowTemplate.cloneNode(true);
  const cellNameElement = rowElement.querySelector('.cell-name');
  const cellPhoneElement = rowElement.querySelector('.cell-phone');
  const editButton = rowElement.querySelector('.cell-edit-btn');
  const deleteButton = rowElement.querySelector('.cell-delete-btn');

  cellNameElement.textContent = userData.name;
  cellPhoneElement.textContent = userData.phone;

  editButton.addEventListener('click', handleEditRowClick(userData));
  deleteButton.addEventListener('click', handleDeleteRowClick);

  return rowElement;
}

const renderRows = (userData, wrap) => {
  wrap.append(getRowTable(userData));
}

initialListUser.forEach((userData) => renderRows(userData, userTableElement));