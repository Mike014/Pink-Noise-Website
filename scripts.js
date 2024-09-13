document.addEventListener('DOMContentLoaded', function () {
    const playButton = document.getElementById('playButton');
    const pinkNoise = document.getElementById('pinkNoise');
    const volumeControl = document.getElementById('volumeControl');
    const statusMessage = document.getElementById('statusMessage');

    // Function to play or pause the pink noise
    function togglePinkNoise() {
        if (pinkNoise.paused) {
            pinkNoise.play();
            statusMessage.textContent = 'Pink noise is playing.';
        } else {
            pinkNoise.pause();
            statusMessage.textContent = 'Pink noise is not playing.';
        }
    }

    // Function to update the volume
    function updateVolume() {
        pinkNoise.volume = volumeControl.value;
    }

    // Event listener for the play button
    playButton.addEventListener('click', togglePinkNoise);

    // Event listener for the volume control
    volumeControl.addEventListener('input', updateVolume);
});
