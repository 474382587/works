class Standings {
    constructor(standings, cofference) {
        this.standings = standings;
        this.cofference = cofference;
    }

    generateStanding() {
        let standingsList = document.createElement("ol");
        this.standings.forEach(team => {
            let teamStanding = document.createElement('li');
            teamStanding.innerHTML = `<div class="row"><span>${team.team}</span><span>Tot: ${team.g}</span><span>W: ${team.w}</span><span>L: ${team.l}</span></div>` 
            standingsList.appendChild(teamStanding);
        });
        let cofferenceName = document.createElement("h3");
        cofferenceName.innerText = this.cofference;
        return [cofferenceName,standingsList];
    }
}