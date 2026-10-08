document.getElementById('inscription').addEventListener('submit', (e) => {
    const mdp=document.getElementById('mdp').value;
    const mdp2=document.getElementById('mdp2').value;
    if(mdp !==mdp2){
        e.preventDefault(); //bloque l'envoi
        document.getElementById('erreur-mdp').style.display = 'block'
    }
});
document.getElementById('btn-aide').addEventListener('click', () => {
    alert('Remplissez tous les champs marqués d\'une étoile (*).')
})