/* Javascript for Click2RevealXBlock. */
function C2RBlock(runtime, element, initargs) {
    
}
 function revealComment(e, textLabel, showActionLabel, hideActionLabel) {
  var comment = $(e.target).parents('.c2r-container').find('.c2r-comment')[0];
  
  if (comment.style.display == 'block') {
   comment.style.display = 'none';
   comment.setAttribute('aria-hidden', 'true');
   e.target.textContent = showActionLabel+textLabel;
   e.target.setAttribute('aria-expanded', 'false');
  }
  else {
   comment.style.display = 'block';
   comment.removeAttribute('aria-hidden');
   e.target.textContent = hideActionLabel+textLabel;
   e.target.setAttribute('aria-expanded', 'true');
  }

 }