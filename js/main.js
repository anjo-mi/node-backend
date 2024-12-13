document.querySelectorAll('.rapper').forEach(rapper => {
    rapper.addEventListener('click', makeChoice);
})

async function makeChoice(e){
    console.log('clicked')
    const artist = e.target.getAttribute('artist');
    e.preventDefault();
    console.log(artist);

    const response = await fetch(`/api?artist=${artist}`);
    const data = await response.json();

    console.log(data)
}