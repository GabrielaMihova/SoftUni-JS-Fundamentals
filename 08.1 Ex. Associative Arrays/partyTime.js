function partyTime (input) {
    let invitedList = input.splice(0, input.indexOf("PARTY"));
    input.splice(0, 1);
    let VIP = [];
    let regular = [];

    for (let guest of invitedList) {
        if (guest[0] >= '0' && guest[0] <= '9') {
            VIP.push(guest);
        } else {
            regular.push(guest);
        }
    }

    for (let guest of input) {
        if (VIP.includes(guest)) {
            VIP.splice(VIP.indexOf(guest), 1);
        }
        if (regular.includes(guest)) {
            regular.splice(regular.indexOf(guest), 1);
        }
    }

    console.log(VIP.length + regular.length);
    VIP.forEach((x) => console.log(x));
    regular.forEach((x) => console.log(x))
}
partyTime (['7IK9Yo0h', '9NoBUajQ', 'Ce8vwPmE', 'SVQXQCbc', 'tSzE5t0p', 'PARTY', '9NoBUajQ', 'Ce8vwPmE', 'SVQXQCbc' ])

/*
The partyTime function takes an input parameter, which is assumed to be an
 array of strings representing the list of guests and the command "PARTY" 
 that signals the start of the party.

The first line of the function creates a new array invitedList by splicing
 the first elements of input up to (but not including) the element that is 
 equal to the string "PARTY". This effectively separates the list of invited 
 guests from the party command and any additional guests that arrive at the 
 party.

The second line of the function removes the first element of input, which 
is the "PARTY" command, from the array.

The next two lines of the function create two empty arrays VIP and regular
 to hold the lists of VIP and regular guests, respectively.

The for...of loop iterates over each element in invitedList, which contains
 the initial list of guests. For each guest, the loop checks whether the 
 first character of the guest's name is a digit between 0 and 9. If it is, 
 the guest is assumed to be a VIP and is added to the VIP array using the 
 push method. Otherwise, the guest is assumed to be a regular guest and is 
 added to the regular array.

The next for...of loop iterates over each element in input, which represents
 the guests who have arrived at the party. For each guest, the loop checks
  whether the guest is in the VIP array using the includes method. If the
   guest is in the VIP array, the loop uses the splice method to remove 
   the guest from the VIP array. The same process is repeated for the
    regular array.

After all the guests have been checked in, the function prints out the total
 number of guests who attended the party by adding the lengths of the 
 VIP and regular arrays. It then uses the forEach method to print out
  each guest in the VIP array on a new line, followed by each guest in
   the regular array on a new line.
*/