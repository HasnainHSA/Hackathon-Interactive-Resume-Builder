    document.addEventListener("DOMContentLoaded", function () {
        const progressBars: NodeListOf<HTMLDivElement> = document.querySelectorAll('.progress-bar');
        const toggleInputs: NodeListOf<HTMLInputElement> = document.querySelectorAll('.switch input');

        // Function to set the width of the progress bars
        progressBars.forEach(function (bar: HTMLDivElement) {
            const skillPercent: string | null = bar.getAttribute('data-skill-percent');
            if (skillPercent) {
                bar.style.width = skillPercent;
            }
        });

        // Function to toggle visibility of sections
        toggleInputs.forEach(function (input: HTMLInputElement) {
            const targetId: string = input.getAttribute('data-target')!;
            const targetElement: HTMLElement | null = document.getElementById(targetId);
            if (targetElement) {
                if (input.checked) {
                    targetElement.classList.remove('hidden');
                } else {
                    targetElement.classList.add('hidden');
                }
            }

            // Add event listener to toggle the section
            input.addEventListener('change', function () {
                if (input.checked) {
                    targetElement?.classList.remove('hidden');
                } else {
                    targetElement?.classList.add('hidden');
                }
            });
        });
    });
