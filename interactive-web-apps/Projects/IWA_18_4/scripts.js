/**
 * A handler that fires when a user drags over any element inside a column. In
 * order to determine which column the user is dragging over the entire event
 * bubble path is checked with `event.path` (or `event.composedPath()` for
 * browsers that don't support `event.path`). The bubbling path is looped over
 * until an element with a `data-area` attribute is found. Once found both the
 * active dragging column is set in the `state` object in "data.js" and the HTML
 * is updated to reflect the new column.
 *
 * @param {Event} event 
 */
const handleDragOver = (event) => {
    event.preventDefault();
    const path = event.path || event.composedPath()
    let column = null

    for (const element of path) {
        const { area } = element.dataset
        if (area) {
            column = area
            break;
        }
    }

    if (!column) return
    updateDragging({ over: column })
    updateDraggingHtml({ over: column })
}


const handleDragStart = (event) => {}
const handleDragEnd = (event) => {}
const handleHelpToggle = (event) => {}
const handleAddToggle = (event) => {}
const handleAddSubmit = (event) => {}
const handleEditToggle = (event) => {}
const handleEditSubmit = (event) => {}
const handleDelete = (event) => {}

html.add.cancel.addEventListener('click', handleAddToggle)
html.other.add.addEventListener('click', handleAddToggle)
html.add.form.addEventListener('submit', handleAddSubmit)

html.other.grid.addEventListener('click', handleEditToggle)
html.edit.cancel.addEventListener('click', handleEditToggle)
html.edit.form.addEventListener('submit', handleEditSubmit)
html.edit.delete.addEventListener('click', handleDelete)

html.help.cancel.addEventListener('click', handleHelpToggle)
html.other.help.addEventListener('click', handleHelpToggle)

for (const htmlColumn of Object.values(html.columns)) {
    htmlColumn.addEventListener('dragstart', handleDragStart)
    htmlColumn.addEventListener('dragend', handleDragEnd)
}

for (const htmlArea of Object.values(html.area)) {
    htmlArea.addEventListener('dragover', handleDragOver)
}


import data from './data.js';
import view from './view.js';

const app = {
  init() {
    view.init();
    view.update(data);
  },

  handleHelpClick() {
    view.toggleHelp();
  },

  handleCloseClick() {
    view.closeAllOverlays();
    view.focusAddOrderButton();
  },

  handleAddOrderClick() {
    view.openAddOrderOverlay();
    view.clearAddOrderForm();
  },

  handleCancelClick() {
    view.closeAddOrderOverlay();
  },

  handleAddClick() {
    const newOrder = view.getAddOrderFormValues();
    data.orders.push(newOrder);
    view.renderOrder(newOrder);
    view.closeAddOrderOverlay();
    view.focusAddOrderButton();
  },

  handleOrderClick(id) {
    const order = data.getOrderById(id);
    view.openEditOrderOverlay(order);
  },

  handleEditDeleteClick() {
    const id = view.getEditOrderId();
    data.deleteOrderById(id);
    view.closeEditOrderOverlay();
    view.removeOrderById(id);
    view.focusAddOrderButton();
  },

  handleEditCancelClick() {
    view.closeEditOrderOverlay();
    view.focusAddOrderButton();
  },

  handleEditUpdateClick() {
    const id = view.getEditOrderId();
    const order = view.getEditOrderFormValues();
    data.updateOrderById(id, order);
    view.updateOrderById(id, order);
    view.closeEditOrderOverlay();
    view.focusAddOrderButton();
  },

  handleEditStatusChange() {
    const id = view.getEditOrderId();
    const status = view.getEditOrderStatus();
    data.updateOrderStatusById(id, status);
    view.moveOrderByIdToColumn(id, status);
  },

  handleDragStart(event) {
    event.dataTransfer.setData('text/plain', event.target.id);
    view.setDropColumnHighlight(event.target.parentNode);
  },

  handleDragOver(event) {
    event.preventDefault();
    event.dataTransfer.dropEffect = 'move';
    view.setDropColumnHighlight(event.target.parentNode);
  },

  handleDragLeave(event) {
    view.removeDropColumnHighlight(event.target.parentNode);
  },

  handleDrop(event) {
    event.preventDefault();
    const id = event.dataTransfer.getData('text/plain');
    const status = event.target.parentNode.getAttribute('data-status');
    data.updateOrderStatusById(id, status);
    view.moveOrderByIdToColumn(id, status);
    view.removeDropColumnHighlight(event.target.parentNode);
  },
};

document.addEventListener('DOMContentLoaded', app.init);
document.getElementById('help').addEventListener('click', app.handleHelpClick);
document.getElementById('close').addEventListener('click', app.handleCloseClick);
document.getElementById('add-order').addEventListener('click', app.handleAddOrderClick);
document.getElementById('cancel').addEventListener('click', app.handleCancelClick);
document.getElementById('add').addEventListener('click', app.handleAddClick);

const orderElements = document.querySelectorAll('.order');
orderElements.forEach((orderElement) => {
  const id = orderElement.getAttribute('data-id');
  orderElement.addEventListener('click', () => {
    app.handleOrderClick(id);
  });
});

document.getElementById('edit-delete').addEventListener('click', app.handleEditDeleteClick);
document.getElementById('edit-cancel').addEventListener('click', app.handleEditCancelClick);
document.getElementById('edit-update').addEventListener('click', app.handleEditUpdateClick);
document.getElementById('edit-status').addEventListener








