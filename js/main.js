document.querySelectorAll('.rapper').forEach(rapper => {
    rapper.addEventListener('click', makeChoice);
})

let reason, anchor;

async function makeChoice(e){
    const artist = e.target.getAttribute('artist');
    console.log(artist);

    const response = await fetch(`/api?artist=${artist}`);
    const data = await response.json();
    console.log(data)
    reason = data.reason;
    anchor = data.src;
    
    const link = document.querySelector('.clickToSee');
    const hyperlink = link.querySelector('.link')
    
    hyperlink.firstChild.insertData(6, ` ${data.name} `)
    link.style.display = 'block';
    
    
    link.removeEventListener('click', toLanding);
    link.addEventListener('click', toLanding);
}


async function toLanding(e){
    e.preventDefault();

    window.location.href = `/landing.html?src=${anchor}&reason=${reason}`
}
//get another fetch that calls the landing page, and display the video