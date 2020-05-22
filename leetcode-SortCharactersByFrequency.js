/**
 * @param {string} s
 * @return {string}
 */
var frequencySort = function(s) {
let len = s.length;
let a = s.split("");
//console.log(a);
let result={};

for (let i = 0; i < a.length; ++i) { // loop over array

  if (!result[a[i]]){  // if no key for that number yet
    result[a[i]] = 0;  // then make one
  }
    
  ++result[a[i]];     // increment the property for that number
  //console.log(result)
}

var sortable = [];
for (var ch in result) {
    sortable.push([ch, result[ch]]);
}

sortable.sort(function(a, b) {
    return b[1] - a[1];
});

var objSorted = {}
sortable.forEach(function(item){
    objSorted[item[0]]=item[1]
})
//console.log(objSorted)

let output=[]
for(let ch in objSorted){
  for(let k=0;k<objSorted[ch];k++){
    output.push(ch)
  }
}
var str = output.join('');
return str.toString();
};
