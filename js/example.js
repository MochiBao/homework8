function spliceArr(array) {
    const start = array.indexOf("Orange");
    console.log('start :>> ', start);
    const a = array.splice(start, 2, "grapefruit")
    console.log('a :>> ', a);
    return a;


}
spliceArr(["Apple","Orange","Plum",]);

function calc (kilometres) {
    const miles = kilometres * 0.6214;
    console.log('miles :>> ', miles);
    return miles;
}

calc(50);

const user = {
    firstName: "Sofia",
    lastName: "Marchinska",
    age: 15,
    height: 170,
    hobby: "programming",
    country: "Ukraine",


}