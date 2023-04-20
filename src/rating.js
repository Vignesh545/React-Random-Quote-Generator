export default function RadioGroupRating() {
  const reactions = document.querySelectorAll('.reaction');

reactions.forEach(reaction => {
  reaction.addEventListener('click', () => {
    reactions.forEach(otherReaction => {
      otherReaction.classList.remove('selected');
    });
    reaction.classList.add('selected');
  });
});

  return (
    <div class="reaction-container">
  <div class="reaction" id="like-reaction">
    <span class="emoji">&#128077;</span>
  </div>
  
  <div class="reaction" id="love-reaction">
    <span class="emoji">&#128525;</span>
  </div>
  
  <div class="reaction" id="wow-reaction">
    <span class="emoji">&#128562;</span>
  </div>
  
  <div class="reaction" id="sad-reaction">
    <span class="emoji">&#128577;</span>
  </div>
</div>

  );
}