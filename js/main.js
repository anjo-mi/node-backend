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
    link.addEventListener('click', toLanding);

    hyperlink.firstChild.insertData(6, ` ${data.name} `)
    link.style.display = 'block';
    

}


async function toLanding(){
    const res = await fetch(`/landing.html?src=${anchor}&reason=${reason}`);
    const src = await res.json();
    console.log(src)
}
//get another fetch that calls the landing page, and display the video