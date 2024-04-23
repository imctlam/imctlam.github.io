function startExam() {
    document.getElementById('startContainer').classList.add('hidden');
    document.getElementById('examContainer').classList.remove('hidden');
    startCountdown();
}

function startCountdown() {
    var countdownElement = document.getElementById('countdown');
    var countdownTime = 5 * 60; // 40 phút
    var countdownInterval = setInterval(function() {
        var minutes = Math.floor(countdownTime / 60);
        var seconds = countdownTime % 60;
        countdownElement.innerHTML = `${minutes} phút ${seconds} giây`;
        countdownTime--;
        if (countdownTime < 0) {
            clearInterval(countdownInterval);
            countdownElement.innerHTML = 'Hết giờ!';
        }
    }, 1000);
}

function scrollToTop() {
    window.scrollTo({
        top: 0,
        behavior: 'smooth'
    });
}
