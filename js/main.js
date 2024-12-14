document.querySelectorAll('.rapper').forEach(rapper => {
    rapper.addEventListener('click', makeChoice);
})

async function makeChoice(e){
    const artist = e.target.getAttribute('artist');
    console.log(artist);

    const response = await fetch(`/api?artist=${artist}`);
    const data = await response.json();
    console.log(data)

    const link = document.querySelector('.clickToSee');
    const anchor = link.querySelector('.link');

    anchor.firstChild.insertData(6, ` ${data.name} `)

    anchor.href = data.src

    link.style.display = 'block';
}

//get another fetch that calls the landing page, and display the video