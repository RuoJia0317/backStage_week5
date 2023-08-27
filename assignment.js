const answerBox = document.querySelector("#answerBox");
const editorBox = document.querySelector("#editorBox");
const ReplyBtnBox = document.querySelector("#ReplyBtnBox");
const replyBtn = document.querySelector("#replyBtn");
const cancelBtn = document.querySelector("#cancelBtn");


ClassicEditor
  .create( document.querySelector( '#editor' ))
  .then( editor => {
  console.log( editor );
} )
  .catch( error => {
  console.error( error );
} );


replyBtn.addEventListener("click", function() {
  answerBox.classList.add("display-none");
  editorBox.classList.remove("display-none");
  ReplyBtnBox.classList.add("display-none")
});

cancelBtn.addEventListener("click", function() {
  answerBox.classList.remove("display-none");
  editorBox.classList.add("display-none");
  ReplyBtnBox.classList.remove("display-none")
});