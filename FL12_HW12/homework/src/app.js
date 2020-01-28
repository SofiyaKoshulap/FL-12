const rootNode = document.getElementById('root');
let idItem;
const zero = 0;

function main() {
    location.hash = '#/main';
    let input = '<div><button class="add">Add new  set</button></iv>';
    let set = JSON.parse(localStorage.getItem('data'));
    for (let i = 0; i < set.length; i++) {
        let key = Object.keys(set[i])[zero];
        input += `<div id="${i}" class="item">
                    <input type="checkbox">
                    <p>${key}</p>
                    <p>${set[i][key]}</p>
                    <div>
                        <button class="edit">Edit</button>
                        <button class="remove">Remove</button>
                    </div>
                </div>`
    }
    rootNode.innerHTML =input;
    document.querySelector('.add').addEventListener('click', function () {
        location.hash = '#/add';
    })
    let remove = document.querySelectorAll('.remove');
    for (let i = 0; i < remove.length; i++) {
        remove[i].addEventListener('click', function (e) {
            set.splice(remove[i].parentNode.parentNode.id, 1);
            localStorage.setItem('data', JSON.stringify(set));
            main();
        })
    }
    let edit = document.querySelectorAll('.edit');
    for (let i = 0; i < edit.length; i++) {
        edit[i].addEventListener('click', function () {
            idItem = edit[i].parentNode.parentNode.id;
            location.hash = `#/modify/:item_id${idItem}.`;
        })
    }
}

function add() {
    let input = `<div class="new-item">
                    <div>
                        <input type="text" placeholder="Enter name" class="name"/>
                        <input type="text" placeholder="Enter term" class="term"/>
                        <input type="text" placeholder="Enter definition" class="definition"/>
                    </div>
                    <div>
                        <button class="save">Save changes</button>
                        <button class="cancel">Cancel</button>
                    </div>
                </div>`;
    rootNode.innerHTML = input;  
    let name = document.querySelector('.name');
    let term = document.querySelector('.term');
    let definition = document.querySelector('.definition');
    document.querySelector('.save').addEventListener('click', function () {
        let set = JSON.parse(localStorage.getItem('data'));
        if (!name.value) {
              alert('please input name');
            } else if (localStorage.getItem(name.value.value)) {
              alert('this name already exist');
            } else {
            let obj = {}
            obj[name.value] =term.value + ' ' + definition.value;
            set.push(obj);
            localStorage.setItem('data', JSON.stringify(set));
            location.hash = '#/main';
        }
    })
    document.querySelector('.cancel').addEventListener('click', function () {
        location.hash = '#/main';
    })
}

function modify(idItem) {
    let set = JSON.parse(localStorage.getItem('data'));
    let key = Object.keys(set[idItem])[zero];
    let terms = set[idItem][key].split(' ');
    let input = `<div class="new-items">
                    <div>
                        <input type="text" placeholder="Enter name" class="name" value="${key}"/>
                        <input type="text" class="term" placeholder="term" value="${terms[zero]}"/>
                        <input type="text" class="definition" placeholder="definition" value="${terms[1]}"/>
                    </div>
                    <div>
                        <button class="save">Save</button>
                        <button class="cancel">Cancel</button>
                    </div>
                </div>`;
    rootNode.innerHTML = input;
    let name = document.querySelector('.name');
    let term = document.querySelector('.term');
    let definition = document.querySelector('.definition');
    document.querySelector('.save').addEventListener('click', function () {
        let obj = {}
        obj[name.value] = term.value + ' ' + definition.value;
        set[idItem] = obj;
        localStorage.setItem('data', JSON.stringify(set));
        location.hash = '#/main';
    })
    document.querySelector('.cancel').addEventListener('click', function () {
        location.hash = '#/main';
    })
}
main();
window.addEventListener('hashchange', function (e) {
    if (location.hash === '#/main') {
        main();
    } else if (location.hash === '#/add') {
        add();
    } else {
        modify(idItem);
    }
});