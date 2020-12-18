// 1
function Anarhia() {
    const radius = 50;
    const progress_anarhia = 9;
    const circus = 2 * Math.PI * radius;
    let value = circus * (progress_anarhia / 100);
    var circleBarAnarhia = document.getElementById('circle-bar-anarhia');
    circleBarAnarhia.style.strokeDasharray = `${value} ${circus}`;

    const anarhia = document.getElementById('text-anarhia-progress');
    anarhia.innerHTML = progress_anarhia;
}

function Vanilla() {
    const radius = 50;
    const progress_vanilla = 30;
    const circus = 2 * Math.PI * radius;
    let value = circus * (progress_vanilla / 100);
    var circleBarVanilla = document.getElementById('circle-bar-vanilla');
    circleBarVanilla.style.strokeDasharray = `${value} ${circus}`;

    const vanilla = document.getElementById('text-vanilla-progress');
    vanilla.innerHTML = progress_vanilla;
}

Anarhia();
Vanilla();