const aboutEl = document.querySelectorAll('.item')
console.log(`Number of categories: ${[...aboutEl].length}`);

aboutEl.forEach(item => {
    const title = item.querySelector('h2');
    const categories = item.querySelector('ul');
    const category = item.querySelectorAll('li');
    console.log(`Category: ${title.textContent}`);
    console.log(`Elements: ${category.length}`);
})




