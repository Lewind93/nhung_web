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
    let editIndex = -1;

    function renderList() {
        listElement.innerHTML = '';
        undergraduates.forEach((student, index) => {
            const listItem = document.createElement('li');
            listItem.innerHTML = `${student.name} - ${student.major} 
                <button onclick="editStudent(${index})">Edit</button>
                <button onclick="deleteStudent(${index})">Delete</button>`;
            listElement.appendChild(listItem);
        });
    }

    form.addEventListener('submit', (event) => {
        event.preventDefault();
        const name = nameInput.value.trim();
        const major = majorInput.value.trim();
        if (name && major) {
            if (editIndex === -1) {
                undergraduates.push({ name, major });
            } else {
                undergraduates[editIndex] = { name, major };
                editIndex = -1;
            }
            renderList();
            nameInput.value = '';
            majorInput.value = '';
        }
    });

    window.editStudent = function(index) {
        const student = undergraduates[index];
        nameInput.value = student.name;
        majorInput.value = student.major;
        editIndex = index;
    };

    window.deleteStudent = function(index) {
        undergraduates.splice(index, 1);
        renderList();
    };

    renderList();
});