document.addEventListener('DOMContentLoaded', () => {
    const undergraduates = [
        { name: 'John Doe', major: 'Computer Science' },
        { name: 'Jane Smith', major: 'Mathematics' },
        { name: 'Emily Johnson', major: 'Physics' },
        { name: 'Michael Brown', major: 'Chemistry' }
    ];

    const listElement = document.getElementById('undergraduate-list');
    const form = document.getElementById('add-student-form');
    const nameInput = document.getElementById('name');
    const majorInput = document.getElementById('major');

    function renderList() {
        listElement.innerHTML = '';
        undergraduates.forEach(student => {
            const listItem = document.createElement('li');
            listItem.textContent = `${student.name} - ${student.major}`;
            listElement.appendChild(listItem);
        });
    }

    form.addEventListener('submit', (event) => {
        event.preventDefault();
        const name = nameInput.value.trim();
        const major = majorInput.value.trim();
        if (name && major) {
            undergraduates.push({ name, major });
            renderList();
            nameInput.value = '';
            majorInput.value = '';
        }
    });

    renderList();
});