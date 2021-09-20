
(function () {
    "use strict";

    const select = (el, all = false) => {
        el = el.trim();
        if (all) {
            return [...document.querySelectorAll(el)];
        } else {
            return document.querySelector(el);
        }
    };

    const on = (type, el, listener, all = false) => {
        let selectEl = select(el, all);

        if (selectEl) {
            if (all) {
                selectEl.forEach((e) => e.addEventListener(type, listener));
            } else {
                selectEl.addEventListener(type, listener);
            }
        }
    };

    on("click", ".mobile-nav-toggle", function (e) {
        this.children[0].classList.toggle("bi-list");
        this.children[0].classList.toggle("bi-x");
    });

    
    on("click", "#cardview-toggle", function (e) {
        select(".cardview-body").classList.toggle("cardview-expand");
        this.classList.toggle("bi-chevron-down");
        this.classList.toggle("bi-chevron-up");
    });

    on("click", "#lokasi-toggle", function (e) {
        select("#lokasi-terdekat").classList.toggle("show");
        select("#lokasi-lain").classList.toggle("d-flex");
    });

    on("click", "#lokasi-toggle *", function (e) {
        select("#lokasi-terdekat").classList.toggle("show");
        select("#lokasi-lain").classList.toggle("d-flex");
    });

    on("keypress", "#cari-lokasi", function (e) {
        select("#autofill-lokasi").classList.remove("show");
        setTimeout(function() {
        select("#autofill-lokasi").classList.add("show");
        }, 100);
    });

    on("focusout", "#cari-lokasi", function (e) {
        select("#autofill-lokasi").classList.remove("show");
    });
    
    on("click", "[data-show='cardview-content']", function (e) {
        select(".cardview.main-content").classList.toggle("show");
        setTimeout(function() {
            select(".cardview.main-content .cardview-body").classList.toggle("cardview-expand");
        }, 10);
    }, true);

    on("click", "[data-hide='cardview-content']", function (e) {
        select(".cardview.main-content .cardview-body").classList.toggle("cardview-expand");
        setTimeout(function() {
            select(".cardview.main-content").classList.toggle("show");
        }, 330);
    });

    on("click", ".update-lokasi", function(e) {
        this.previousSibling.classList.toggle("d-none");
        this.innerHTML = "Memperbarui lokasi";
        select("#text-lokasi").innerHTML = ".....";
        setTimeout(function() {
            this.previousSibling.classList.toggle("d-none");
            this.innerHTML = "Perbarui lokasi";
            select("#text-lokasi").innerHTML = "Semarang, Kota Semarang, Jawa Tengah"
        }.bind(this), 1500);
    });

    window.addEventListener("load", () => {
        AOS.init({
            duration: 1000,
            easing: "ease-in-out",
            mirror: false,
        });
    });
})();
