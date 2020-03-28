javascript: (function() {
    alert('Started!');
    document.getElementById("vpl_ide_evaluate").click();
    var trick = setInterval(
        function() {
            if (document.querySelector("h4#ui-accordion-vpl_results_accordion-header-0.vpl_ide_accordion_t_grade.ui-accordion-header.ui-helper-reset.ui-state-default.ui-corner-all.ui-accordion-icons").textContent === "Proposed grade: 100 / 100") {
                stopInterval();
                alert("Done!")
            } else {
                document.getElementById("vpl_ide_evaluate").click();
            }
        }, 10000
    );

    function stopInterval() {
        clearInterval(trick);
    }
})();
