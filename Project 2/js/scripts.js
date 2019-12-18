//Utility functions
function get(element) {
    return document.getElementById(element);
}

//Application functions
function openModal() {
    var modal = get('modal-dialog');
    var backdrop = get('modal-backdrop');

    modal.classList.add('visible');
    backdrop.classList.add('visible');
}

function closeModal() {
    var title = get('edit-title-text');
    var text = get('edit-content-text');
    var modal = get('modal-dialog');
    var backdrop = get('modal-backdrop');

    //Clear text
    title.value = '';
    text.value = '';

    // Hide modal
    modal.classList.remove('visible');
    backdrop.classList.remove('visible');
}

function saveContent() {
    var title = get('edit-title-text');
    var text = get('edit-content-text');
    var content = get('display-content');

    //Create content elements
    var newTtitle = document.createElement('h2');
    var newTtitleText = document.createTextNode(title.value);
    var newContent = document.createElement('p');
    var newContentText = document.createTextNode(text.value);

    // Add elements
    newTtitle.appendChild(newTtitleText);
    newContent.appendChild(newContentText);
    content.appendChild(newTtitle);
    content.appendChild(newContent);

    closeModal();
}

window.addEventListener('load', function () {
    var newButton = get('new-button');
    var cancelButton = get('cancel-button');
    var saveButton = get('save-button');

    newButton.addEventListener('click', openModal);
    cancelButton.addEventListener('click', closeModal);
    saveButton.addEventListener('click', saveContent);
});


