const structure = [
    {
      'folder': true,
      'title': 'Films',
      'children': [
        {
          'title': 'Iron Man.avi'
        },
        {
          'folder': true,
          'title': 'Fantasy',
          'children': [
            {
              'title': 'The Lord of the Rings.avi'
            },
            {
              'folder': true,
              'title': 'New folder 1',
              'children': false
            }
          ]
        }
      ]
    },
    {
      'folder': true,
      'title': 'Documents',
      'children': [
        {
          'folder': true,
          'title': 'EPAM Homework answers',
          'children': null
        }
      ]
    }
];

const rootNode = document.getElementById('root');

let mainUl = document.createElement('ul');
function createTree(arr, perent) {
	for(let i = 0; i<arr.length; i++){
		let ul = document.createElement('ul');
		let li = document.createElement('li');
		let p = document.createElement('p')
		let icon = document.createElement('i');
		icon.className = 'material-icons';
		li.style.listStyle = 'none';
        li.style.cursor = 'pointer';
		if (arr[i].folder){
			icon.innerHTML = 'folder';
		} else {
			icon.innerHTML = 'insert_drive_file';
		}
		p.appendChild(icon);
		p.innerHTML += arr[i].title;
		li.appendChild(p);
		perent.appendChild(li);
		p.addEventListener('click', click);
		if (arr[i].children) {
			li.appendChild(ul);
			ul.style.display = 'none';
			createTree(arr[i].children, ul);
		}
		if (arr[i].folder && !arr[i].children) {
			let emptyFolder = document.createElement('p');
			emptyFolder.innerHTML = 'Folder is empty';
			emptyFolder.style.fontStyle = 'italic';
			li.appendChild(emptyFolder);
			emptyFolder.style.display = 'none';		
		}
	}
}
function click (){
	if (this.nextElementSibling.style.display === 'none') {
		this.nextElementSibling.style.display = 'block';
		this.firstChild.innerHTML = 'folder_open';
	} else {
		this.nextElementSibling.style.display = 'none';
		this.firstChild.innerHTML = 'folder';
	}
}
createTree(structure, mainUl);
rootNode.appendChild(mainUl)
