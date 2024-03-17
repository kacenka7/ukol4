console.log("bobek");

const predplatne = Number(prompt("Zvolte předplatné"));


const selectPlan = (volba) =>{

    const plan1 = document.querySelector("#plan1");
    plan1.classList.remove("plan--selected")
    plan1.classList.add(`plan`)

    const plan2 = document.querySelector("#plan2");
    plan2.classList.remove("plan--selected")
    plan2.classList.add(`plan`)

    const plan3 = document.querySelector("#plan3");
    plan3.classList.remove("plan--selected")
    plan3.classList.add(`plan`)

    const trida = document.querySelector( `#plan${volba}`);
    trida.classList.add("plan--selected");
}

    selectPlan(predplatne);



