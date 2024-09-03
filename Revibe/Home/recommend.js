document.addEventListener('DOMContentLoaded', () => {
    const emotion = localStorage.getItem('detectedEmotion');
    const songList = document.getElementById('songList');
    const detectedEmotionSpan = document.getElementById('detectedEmotion');

    detectedEmotionSpan.textContent = emotion;

    const songs = {
        'Happy': ['Don\'t Stop Me Now - Queen', 'Happy - Pharrell Williams', 'Walking on Sunshine - Katrina and The Waves'],
        'Sad': ['Someone Like You - Adele', 'Fix You - Coldplay', 'The Sound of Silence - Simon & Garfunkel'],
        'Energetic': ['Eye of the Tiger - Survivor', 'Gonna Fly Now - Bill Conti', 'The Final Countdown - Europe'],
        'Calm': ['Weightless - Marconi Union', 'Clair de Lune - Claude Debussy', 'Breathe Me - Sia'],
        'Excited': ['Can\'t Stop the Feeling! - Justin Timberlake', 'I Gotta Feeling - The Black Eyed Peas', 'Uptown Funk - Mark Ronson ft. Bruno Mars']
    };

    songs[emotion].forEach((song, index) => {
        const li = document.createElement('li');
        li.innerHTML = `
            <span class="song-number">${index + 1}</span>
            <span class="song-title">${song.split(' - ')[0]}</span>
            <span class="song-artist">${song.split(' - ')[1]}</span>
        `;
        songList.appendChild(li);
    });
});

