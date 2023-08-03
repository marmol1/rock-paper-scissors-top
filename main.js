function computerChoice() {
    const options = ["rock", "paper", "scissors"]
    const result = options[Math.floor(Math.random() * 3)];
    return result;
}
