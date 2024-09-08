"use strict";
document.addEventListener("DOMContentLoaded", function () {
    const progressBars = document.querySelectorAll('.progress-bar');
    const toggleInputs = document.querySelectorAll('.switch input');
    // Function to set the width of the progress bars
    progressBars.forEach(function (bar) {
        const skillPercent = bar.getAttribute('data-skill-percent');
        if (skillPercent) {
            bar.style.width = skillPercent;
        }
    });
    // Function to toggle visibility of sections
    toggleInputs.forEach(function (input) {
        const targetId = input.getAttribute('data-target');
        const targetElement = document.getElementById(targetId);
        if (targetElement) {
            if (input.checked) {
                targetElement.classList.remove('hidden');
            }
            else {
                targetElement.classList.add('hidden');
            }
        }
        // Add event listener to toggle the section
        input.addEventListener('change', function () {
            if (input.checked) {
                targetElement === null || targetElement === void 0 ? void 0 : targetElement.classList.remove('hidden');
            }
            else {
                targetElement === null || targetElement === void 0 ? void 0 : targetElement.classList.add('hidden');
            }
        });
    });
});
