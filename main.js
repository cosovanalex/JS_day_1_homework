//==================Exercise #1 ==========//
/*Write a function that takes in the string and the list of dog names, loops through 
the list and checks that the current name is in the string passed in. The output should be:
"Matched dog_name" if name is in the string, if no matches are present console.log "No Matches"
*/
let dog_string = "Hello Max, my name is Dog, and I have purple eyes!"
let dog_names = ["Max","HAS","PuRple","dog"]

function findWords(){
  
    for (let dog of dog_names){
        if(dog_string.toLocaleLowerCase().includes(dog.toLowerCase())) {
            console.log("Matched" , dog);
        } else {
            console.log('No Matches')
        }        
    }
}
findWords()



//============Exercise #2 ============//
/*Write a fucntion that takes in an array and removes every even index with a splice,
and replaces it with the string "even index" */

let names = ["Max","Baseball","Reboot","Goku","Trucks","Rodger"];

function replaceEvens(names){
    // variable for storing delete count
    dCount = 0,
    // store array length
    len = names.length;

    for (var i = 0; i < len; i++) {
    // check index is even
    if (i % 2 == 0) {
        // replacelement based on actual array position 
        names.splice(i, 1, 'even index');
        // increment delete count
        // you combine the 2 lines as `names.splice(i - dCount++, 1);`
        dCount++;
    }
}
    console.log(names);
}
replaceEvens(names)

//Expected output
//Given arr == ["Max","Baseball","Reboot","Goku","Trucks","Rodger"]
//Output arr == ["even index","Baseball","even index","Goku","even index","Rodger"]