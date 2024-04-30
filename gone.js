function addComment2() {
    var commentInput = document.getElementById('commentInput').value;
    var commentsDiv = document.getElementById('comments2');
    var thankYouMessage = document.getElementById('thankYouMessage2');
    
    if(commentInput.trim() === '') {
        alert("Please write a comment before submitting.");
        return;
    }
    
    var storedComments = localStorage.getItem('comments');
    var commentsArray = storedComments ? JSON.parse(storedComments) : [];
    
    commentsArray.push(commentInput);
    localStorage.setItem('comments', JSON.stringify(commentsArray));
    
    var commentElement = document.createElement('div');
    commentElement.className = 'comment';
    commentElement.innerText = commentInput;
    commentsDiv.appendChild(commentElement);
    
    document.getElementById('commentInput').value = '';
    
    thankYouMessage.style.display = 'block';
    
    setTimeout(function() {
        thankYouMessage.style.display = 'none';
    }, 3000);
}

window.onload = function() {
    loadComments2();
}

function loadComments2() {
    var storedComments = localStorage.getItem('comments');
    var commentsDiv = document.getElementById('comments2');

    commentsDiv.innerHTML = '';

    if (storedComments) {
        var commentsArray = JSON.parse(storedComments);
        commentsArray.forEach(function(commentText) {
            var commentElement = document.createElement('div');
            commentElement.className = 'comment';
            commentElement.innerText = commentText;
            commentsDiv.appendChild(commentElement);
        });
    } else {
        var noCommentsMessage = document.createElement('div');
        noCommentsMessage.innerText = 'No comments found.';
        commentsDiv.appendChild(noCommentsMessage);
    }
}




const stars = document.querySelectorAll('.star');
const result = document.getElementById('result');
let rating = 0;

stars.forEach(star => {
    star.addEventListener('click', () => {
        const value = parseInt(star.getAttribute('data-value'));
        if (!star.classList.contains('selected')) {
            stars.forEach(s => s.classList.remove('selected'));
            star.classList.add('selected');
            rating = value;
        } else {
            star.classList.remove('selected');
            rating = 0;
        }
        result.textContent = 'Your Rating : ' +  rating  + ' Star';
    });
});






var showing=false;
function show(){
    var button=document.getElementsByClassName('f50');
    if(!showing){
    for(i=0;i<button.length;i++){
        button[i].style.display="inline-block";
        showing=true;

    }}
   else{
    for(i=0;i<button.length;i++){
        button[i].style.display="none";
        showing=false;
   } 


}
}
function toggleTheme() {
    const body = document.body;
    body.classList.toggle('light-mode');
    body.classList.toggle('dark-mode');
}

