const elements = document.querySelectorAll('.tools__button');

elements.forEach(element => {
    element.addEventListener('click', () => {
        let command = element.dataset['element'];
        document.execCommand(command, false, null);
    });
});

const newfile = document.querySelector('#file-new');
const savefile = document.querySelector('#file-save');
const list = document.querySelector('#list');

newfile.addEventListener('click', () => {
    list.innerHTML = ""
})
savefile.addEventListener('click', () => {
    const txt = document.createElement("txt")
    const binary = new Blob([list.innerText])
    const dataurl = URL.createObjectURL(binary)
    txt.href = dataurl
    txt.download = "document.txt"
    txt.click()
})