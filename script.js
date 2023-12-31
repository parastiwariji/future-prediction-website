function predictFuture() {
    const nameInput = document.getElementById('name');
    const predictionOutput = document.getElementById('prediction');

    const name = nameInput.value.trim();

    if (name === '') {
        alert('Please enter your name.');
        return;
    }

    const predictions = [
        "You will have a great day tomorrow!",
        "Unexpected surprises are on the way for you.",
        "Take some time for self-reflection and relaxation.",
        "Embrace new opportunities that come your way.",
        "Focus on your goals, and success will follow.",
        "The best way to predict the future is to create it. – Abraham Lincoln",
        "A wave of good fortune is headed your way – get ready to ride it!",
        "Your hard work will soon be rewarded with unexpected success.",
        "Embrace the positive energy around you; great things are on the horizon.",
        "Opportunities for growth and learning will present themselves to you.",
        "Prepare for a day filled with joy, laughter, and pleasant surprises.",
        "Your determination will open doors to new and exciting possibilities.",
        "The universe is conspiring to bring you prosperity and abundance.",
        "Radiate positivity, and you'll attract incredible opportunities.",
        "An exciting adventure awaits you – be open to new experiences.",
"Success is in the air; believe in yourself and your abilities.",
"Your optimism will pave the way for a bright and successful future.",
"The seeds of hard work you've planted will blossom into success.",
"Take a moment to celebrate your achievements – more are on the way.",
"Positive vibes are guiding you towards a fulfilling and rewarding path.",
"Your kindness and generosity will come back to you tenfold.",
"New friendships and connections will enrich your life in unexpected ways.",
"Your positive attitude is a magnet for prosperity and happiness.",
"Expect to receive good news that will brighten your day.",
"The universe applauds your efforts – success is inevitable.",
"Your journey is unfolding perfectly; trust the process and enjoy the ride.",
    ];

    const randomIndex = Math.floor(Math.random() * predictions.length);
    const prediction = predictions[randomIndex];

    predictionOutput.textContent = `Dear ${name}, ${prediction}`;
}
