document.frm.onsubmit = () => {
    let optFruit = document.frm.fruit; //form 이름의 select 이름 ;<select name="fruit" id="sel">
    console.log(optFruit);

    let optSelect = optFruit.selectedIndex + ' ' + optFruit.value;
    console.log(optSelect); //0 apple
    return false;
}