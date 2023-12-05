// State Variables can be declared outside of the onReady
// Feel free to make this to what you want!
// Example:
// let fungusHP = 100;

function onReady() {
    console.log("Ready to go!")
    
    // Make sure you check the index.html file! 
    // There are lots of buttons and things ready for you to hook into here!
    
    let ap = 100;
    let hp = 100;

    function handleAttack(attackType) {

        switch (attackType) {
            case 'arcane-scepter':
                ap -= 20;
                hp -= 10;
                break;
            case 'entangle':
                ap -= 15;
                hp -= 15;
                break;
            case 'dragon-blade':
                ap -= 25;
                hp -= 5;
                break;
            case 'star-fire':
                ap -= 30;
                hp -= 20;
                break;
        }

        ap = Math.max(0, ap);
        hp = Math.max(0, hp);

        document.getElementById('ap-text').innerText = ap + ' AP';
        document.getElementById('hp-text').innerText = hp + ' HP';
        document.getElementById('ap-meter').value = ap;
        document.getElementById('hp-meter').value = hp;

        if (hp === 0) {
            document.getElementById('freaky-fungus').classList.add('dead');
        }

        if (ap === 0) {
            document.getElementById('freaky-fungus').classList.add('jump');
            disableAttackButtons();
        }
    }

    function disableAttackButtons() {
        // Disable all attack buttons
        const attackButtons = document.querySelectorAll('.attack-btn');
        attackButtons.forEach(button => button.setAttribute('disabled', 'true'));
    }
    
    // 🧠 Remember
    // - Handle events that ->
    // - Updates state which is ->
    // - Rendered to the DOM
}


onReady()