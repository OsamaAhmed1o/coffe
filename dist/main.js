let btn = document.getElementById('btn');
let list = document.getElementById('list');
let img = document.getElementById('osz');

btn.addEventListener('click',function () {
    list.classList.toggle('hidden');
    if(img.classList.contains('fa-xmark'))
    {
        img.classList.remove('fa-xmark');
        img.classList.add('fa-bars');
    }else
    {
        img.classList.remove('fa-bars');
        img.classList.add('fa-xmark');
    }
})