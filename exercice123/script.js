
var count = 0;
var lastSelectedItem = null;

const addItem = () => {
    count++;
    const list = document.getElementById('liste');
    const listItem = document.createElement('li');
    listItem.classList.add('item');
    listItem.textContent = 'Item ' + count;
    listItem.addEventListener('click', handleSelectChange);
    list.appendChild(listItem);
}

const handleSelectChange = (event) => {
    if (lastSelectedItem) {
        lastSelectedItem.classList.remove('selected');
    }
    lastSelectedItem = event.target;
    lastSelectedItem.classList.add('selected');
    console.log('Élément sélectionné :', lastSelectedItem);
};

document.getElementById('ajouter').addEventListener('click', addItem);