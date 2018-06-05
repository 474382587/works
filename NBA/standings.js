class Standings {
    constructor(standings, cofference) {
        this.standings = standings;
        this.cofference = cofference;
    }

    generateStanding() {
        let standingsList = document.createElement("ol");
        this.standings.forEach(team => {
            let teamStanding = document.createElement('li');
            teamStanding.classList.add("row")
            teamStanding.innerHTML = `<span>${team.team}</span><span>Tot: ${team.g}</span><span>W: ${team.w}</span><span>L: ${team.l}</span>` 
            standingsList.appendChild(teamStanding);
        });
        let cofferenceName = document.createElement("h3");
        cofferenceName.innerText = this.cofference;
        return [cofferenceName,standingsList];
    }
}