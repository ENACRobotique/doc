// Populate the sidebar
//
// This is a script, and not included directly in the page, to control the total size of the book.
// The TOC contains an entry for each page, so if each page includes a copy of the TOC,
// the total size of the page becomes O(n**2).
class MDBookSidebarScrollbox extends HTMLElement {
    constructor() {
        super();
    }
    connectedCallback() {
        this.innerHTML = '<ol class="chapter"><li class="chapter-item expanded "><a href="accueil.html"><strong aria-hidden="true">1.</strong> Accueil</a></li><li class="chapter-item expanded "><a href="organisation/orga.html"><strong aria-hidden="true">2.</strong> Organisation du club</a></li><li><ol class="section"><li class="chapter-item expanded "><a href="organisation/activites.html"><strong aria-hidden="true">2.1.</strong> Activitées</a></li><li class="chapter-item expanded "><a href="organisation/membre.html"><strong aria-hidden="true">2.2.</strong> Être membre du club</a></li><li class="chapter-item expanded "><a href="organisation/logistique.html"><strong aria-hidden="true">2.3.</strong> Logistique</a></li><li class="chapter-item expanded "><a href="organisation/contacts.html"><strong aria-hidden="true">2.4.</strong> Contacts</a></li></ol></li><li class="chapter-item expanded "><a href="introductions/introRobot.html"><strong aria-hidden="true">3.</strong> Intro Création robot</a></li><li><ol class="section"><li class="chapter-item expanded "><a href="introductions/lexique.html"><strong aria-hidden="true">3.1.</strong> Lexique</a></li><li class="chapter-item expanded "><a href="datasheets/datasheets.html"><strong aria-hidden="true">3.2.</strong> Datasheets</a></li></ol></li><li class="chapter-item expanded "><a href="bases/index.html"><strong aria-hidden="true">4.</strong> Les bases</a></li><li><ol class="section"><li class="chapter-item expanded "><a href="bases/info/index.html"><strong aria-hidden="true">4.1.</strong> Programmation</a></li><li><ol class="section"><li class="chapter-item expanded "><a href="bases/info/vscode.html"><strong aria-hidden="true">4.1.1.</strong> VS Code &amp; Platformio</a></li><li class="chapter-item expanded "><a href="bases/info/introPython.html"><strong aria-hidden="true">4.1.2.</strong> Python</a></li><li class="chapter-item expanded "><a href="bases/info/introC.html"><strong aria-hidden="true">4.1.3.</strong> Progammation pour l&#39;embarqué </a></li></ol></li><li class="chapter-item expanded "><a href="bases/meca/introMeca.html"><strong aria-hidden="true">4.2.</strong> Mécanique</a></li><li><ol class="section"><li class="chapter-item expanded "><a href="bases/meca/onshape.html"><strong aria-hidden="true">4.2.1.</strong> Onshape</a></li><li class="chapter-item expanded "><a href="bases/meca/imprimante.html"><strong aria-hidden="true">4.2.2.</strong> Impression3D</a></li><li class="chapter-item expanded "><a href="bases/meca/laser.html"><strong aria-hidden="true">4.2.3.</strong> Découpe Laser</a></li></ol></li><li class="chapter-item expanded "><a href="bases/elec/index.html"><strong aria-hidden="true">4.3.</strong> Électronique</a></li><li><ol class="section"><li class="chapter-item expanded "><a href="bases/elec/led.html"><strong aria-hidden="true">4.3.1.</strong> Allumer une Led</a></li><li class="chapter-item expanded "><a href="bases/elec/sos_elec.html"><strong aria-hidden="true">4.3.2.</strong> Identifier un problème dans un circuit</a></li><li class="chapter-item expanded "><a href="bases/elec/microcontroleur.html"><strong aria-hidden="true">4.3.3.</strong> Microcontrôleurs</a></li><li class="chapter-item expanded "><a href="bases/elec/kicad.html"><strong aria-hidden="true">4.3.4.</strong> Kicad</a></li></ol></li><li class="chapter-item expanded "><a href="bases/linux/index.html"><strong aria-hidden="true">4.4.</strong> Linux</a></li><li><ol class="section"><li class="chapter-item expanded "><a href="bases/linux/dual_boot.html"><strong aria-hidden="true">4.4.1.</strong> Dual Boot</a></li><li class="chapter-item expanded "><a href="bases/linux/git.html"><strong aria-hidden="true">4.4.2.</strong> Git</a></li><li class="chapter-item expanded "><a href="bases/linux/ssh.html"><strong aria-hidden="true">4.4.3.</strong> SSH</a></li><li class="chapter-item expanded "><a href="bases/linux/bash_usefull.html"><strong aria-hidden="true">4.4.4.</strong> Bash tips</a></li></ol></li><li class="chapter-item expanded "><a href="bases/tutoboard/tutoboard.html"><strong aria-hidden="true">4.5.</strong> La tutoboard Enac</a></li><li><ol class="section"><li class="chapter-item expanded "><a href="bases/tutoboard/bases.html"><strong aria-hidden="true">4.5.1.</strong> Les bases</a></li><li class="chapter-item expanded "><a href="bases/tutoboard/comm.html"><strong aria-hidden="true">4.5.2.</strong> La communications</a></li><li class="chapter-item expanded "><a href="bases/tutoboard/attiny.html"><strong aria-hidden="true">4.5.3.</strong> L&#39;Attiny</a></li></ol></li><li class="chapter-item expanded "><a href="bases/tutopami/index.html"><strong aria-hidden="true">4.6.</strong> Tuto Pami</a></li><li><ol class="section"><li class="chapter-item expanded "><a href="bases/tutopami/freertos.html"><strong aria-hidden="true">4.6.1.</strong> FreeRTOS</a></li><li class="chapter-item expanded "><a href="bases/tutopami/tuto.html"><strong aria-hidden="true">4.6.2.</strong> Programmer un PAMI</a></li></ol></li></ol></li><li class="chapter-item expanded "><a href="to_robot/to_robot.html"><strong aria-hidden="true">5.</strong> Vers le robot (WIP)</a></li><li><ol class="section"><li class="chapter-item expanded "><a href="to_robot/base_roulante/holonome.html"><strong aria-hidden="true">5.1.</strong> Base roulante Holonome</a></li><li><ol class="section"><li class="chapter-item expanded "><div><strong aria-hidden="true">5.1.1.</strong> Conception Méca</div></li><li class="chapter-item expanded "><a href="to_robot/base_roulante/carte_elec.html"><strong aria-hidden="true">5.1.2.</strong> Conception éléc</a></li><li><ol class="section"><li class="chapter-item expanded "><a href="to_robot/base_roulante/carte2024.html"><strong aria-hidden="true">5.1.2.1.</strong> Carte 2024</a></li><li class="chapter-item expanded "><a href="to_robot/base_roulante/notions_elec.html"><strong aria-hidden="true">5.1.2.2.</strong> Notions pour la conception éléc</a></li></ol></li><li class="chapter-item expanded "><a href="to_robot/commande/asserv.html"><strong aria-hidden="true">5.1.3.</strong> Commande</a></li></ol></li><li class="chapter-item expanded "><div><strong aria-hidden="true">5.2.</strong> Les actionneurs</div></li><li><ol class="section"><li class="chapter-item expanded "><div><strong aria-hidden="true">5.2.1.</strong> Prototypage</div></li><li class="chapter-item expanded "><div><strong aria-hidden="true">5.2.2.</strong> Intégration</div></li></ol></li><li class="chapter-item expanded "><div><strong aria-hidden="true">5.3.</strong> Communications</div></li><li><ol class="section"><li class="chapter-item expanded "><div><strong aria-hidden="true">5.3.1.</strong> Comm Haut/Bas niveau</div></li><li class="chapter-item expanded "><div><strong aria-hidden="true">5.3.2.</strong> eCal et protobuff</div></li></ol></li><li class="chapter-item expanded "><div><strong aria-hidden="true">5.4.</strong> Le haut niveau</div></li><li><ol class="section"><li class="chapter-item expanded "><a href="to_robot/haut_niveau/raspberry_pi.html"><strong aria-hidden="true">5.4.1.</strong> Monter une raspi</a></li><li class="chapter-item expanded "><a href="to_robot/haut_niveau/interface.html"><strong aria-hidden="true">5.4.2.</strong> Interfaçage</a></li><li class="chapter-item expanded "><a href="to_robot/haut_niveau/decision.html"><strong aria-hidden="true">5.4.3.</strong> Inteligence du robot</a></li></ol></li></ol></li><li class="chapter-item expanded "><div><strong aria-hidden="true">6.</strong> FAQ/REX : Retour D&#39;expérience</div></li><li><ol class="section"><li class="chapter-item expanded "><a href="rex/shoot.html"><strong aria-hidden="true">6.1.</strong> Système de tir</a></li></ol></li><li class="chapter-item expanded "><a href="petits_tutos/index.html"><strong aria-hidden="true">7.</strong> Petits tutos</a></li><li><ol class="section"><li class="chapter-item expanded "><a href="petits_tutos/peripherique_occupe.html"><strong aria-hidden="true">7.1.</strong> Périphérique occupé au branchement d&#39;un µC</a></li></ol></li></ol>';
        // Set the current, active page, and reveal it if it's hidden
        let current_page = document.location.href.toString().split("#")[0];
        if (current_page.endsWith("/")) {
            current_page += "index.html";
        }
        var links = Array.prototype.slice.call(this.querySelectorAll("a"));
        var l = links.length;
        for (var i = 0; i < l; ++i) {
            var link = links[i];
            var href = link.getAttribute("href");
            if (href && !href.startsWith("#") && !/^(?:[a-z+]+:)?\/\//.test(href)) {
                link.href = path_to_root + href;
            }
            // The "index" page is supposed to alias the first chapter in the book.
            if (link.href === current_page || (i === 0 && path_to_root === "" && current_page.endsWith("/index.html"))) {
                link.classList.add("active");
                var parent = link.parentElement;
                if (parent && parent.classList.contains("chapter-item")) {
                    parent.classList.add("expanded");
                }
                while (parent) {
                    if (parent.tagName === "LI" && parent.previousElementSibling) {
                        if (parent.previousElementSibling.classList.contains("chapter-item")) {
                            parent.previousElementSibling.classList.add("expanded");
                        }
                    }
                    parent = parent.parentElement;
                }
            }
        }
        // Track and set sidebar scroll position
        this.addEventListener('click', function(e) {
            if (e.target.tagName === 'A') {
                sessionStorage.setItem('sidebar-scroll', this.scrollTop);
            }
        }, { passive: true });
        var sidebarScrollTop = sessionStorage.getItem('sidebar-scroll');
        sessionStorage.removeItem('sidebar-scroll');
        if (sidebarScrollTop) {
            // preserve sidebar scroll position when navigating via links within sidebar
            this.scrollTop = sidebarScrollTop;
        } else {
            // scroll sidebar to current active section when navigating via "next/previous chapter" buttons
            var activeSection = document.querySelector('#sidebar .active');
            if (activeSection) {
                activeSection.scrollIntoView({ block: 'center' });
            }
        }
        // Toggle buttons
        var sidebarAnchorToggles = document.querySelectorAll('#sidebar a.toggle');
        function toggleSection(ev) {
            ev.currentTarget.parentElement.classList.toggle('expanded');
        }
        Array.from(sidebarAnchorToggles).forEach(function (el) {
            el.addEventListener('click', toggleSection);
        });
    }
}
window.customElements.define("mdbook-sidebar-scrollbox", MDBookSidebarScrollbox);
