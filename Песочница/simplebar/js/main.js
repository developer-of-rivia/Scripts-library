document.addEventListener("DOMContentLoaded", function(event) { 
    document.querySelectorAll('.block').forEach(el => {
        new SimpleBar(el)
    });
});