<script>
    // Ascunde toate secțiunile la început
    document.addEventListener("DOMContentLoaded", function () {
        const sections = document.querySelectorAll('.section');
        sections.forEach(section => {
            section.style.display = 'none';
        });

        // Funcția care schimbă vizibilitatea secțiunilor
        const links = document.querySelectorAll('.sidebar a');
        links.forEach(link => {
            link.addEventListener('click', function (e) {
                e.preventDefault();

                // Ascunde toate secțiunile
                sections.forEach(section => {
                    section.style.display = 'none';
                });

                // Afișează secțiunea corespunzătoare
                const targetId = link.getAttribute('href').substring(1);
                const targetSection = document.getElementById(targetId);
                if (targetSection) {
                    targetSection.style.display = 'block';
                }
            });
        });
    });
</script>
