<script>
  document.addEventListener("DOMContentLoaded", function() {
  const getStartedButton = document.querySelector(".cta");
  const loginFormContainer = document.querySelector(".container");

  getStartedButton.addEventListener("click", function() {
  loginFormContainer.classList.add("show");
});
});
</script>
<script>
  document.addEventListener("DOMContentLoaded", function() {
  document.querySelector('a[href="#Avantages"]').addEventListener('click', function(e) {
    e.preventDefault();
    const targetElement = document.getElementById('avantages');
    targetElement.scrollIntoView({ behavior: 'smooth' });
  });
});
</script>
<script>
  document.addEventListener("DOMContentLoaded", function() {
  document.querySelector('a[href="#fonctionnalites"]').addEventListener('click', function(e) {
    e.preventDefault();
    const targetElement = document.getElementById('fonctionnalites');
    targetElement.scrollIntoView({ behavior: 'smooth' });
  });
});
</script>
<script>
  document.addEventListener("DOMContentLoaded", function() {
  document.querySelector('a[href="#apropos"]').addEventListener('click', function(e) {
    e.preventDefault();
    const targetElement = document.getElementById('apropos');
    targetElement.scrollIntoView({ behavior: 'smooth' });
  });
});
</script>
