window.addEventListener('load', function() {
    triggerBank();
    loadReel();
});

const loadReel = () => {
    // Replace 'INSTAGRAM_REEL_URL' with the actual URL of the Instagram Reel
    const reelUrl = 'https://www.instagram.com/reel/CruCOR5tupj/';
    
    // Replace 'instagram-reel-container' with the ID of the container element
    const container = document.querySelector('.instagram-feed');
    
    // Use the Instagram Embed API to load the Reel into the container
    instgrm.Embeds.process(container, {
        url: reelUrl,
    });
    console.log(instgrm);
}

const triggerBank = () => {
    const flipCard = document.querySelectorAll('.bank-card');
    console.log(flipCard);
    flipCard.forEach(el => {
        el.addEventListener('mouseover', function() {
            el.classList.toggle('triggered');
        });
        el.addEventListener('mouseout', function() {
            el.classList.toggle('triggered');
        });
    }) 
}