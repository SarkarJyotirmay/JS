
//!  Remove All Adjacent Duplicates In String

var removeDuplicates = function(s) {
    let st = [];
    for(let i = 0; i < s.length; i++){
        let ch = s[i];
        if(st[st.length-1] == ch){
            st.pop();
        }
        else{
            st.push(ch);
        }
      }
    

    return st.join("");
}

// console.log(removeDuplicates("aabac"));



//! Decode String 
var decodeString = function(s) {
    let st = []; //
    for(let i = 0; i < s.length; i++){
        if(s[i] != ']'){
            st.push(s[i]);
        }
        else{
            
        let sub = ""; //
        while(st[st.length-1] != '['){
           sub = st.pop() + sub;
        }
        st.pop();

        let freq = ""; //3
        while(!isNaN(st[st.length-1])){
            freq = st.pop() + freq;
        }

        let innitialResult = ""
        for(let j = 0; j < Number(freq); j++){
            innitialResult += sub;
        }

        st.push(innitialResult);
        }
    }
    return st.join("");
};

// console.log(decodeString("3[a]2[bc]"));


//! Reorganize String

var reorganizeString = function(s) {
    const obj = {};
        for(const ch of s){
            obj[ch] = (obj[ch] || 0) + 1;
        }
        let ansIndex = 0;
        const objKeys = Object.keys(obj);
        const sortedKeys = objKeys.sort((a , b) => obj[b] - obj[a]);
        const result = new Array(s.length);

        for(let i = 0 ; i< sortedKeys.length; i++){
            const letter = sortedKeys[i];
            const letterFrequency = obj[letter];

            if(letterFrequency > Math.floor((s.length + 1) / 2)){
                return "";
            }

            for( let j = 0 ; j < letterFrequency ; j++){
                if( ansIndex >= s.length){
                    ansIndex = 1;
                }
                result[ansIndex] = letter;
                ansIndex += 2;

            }

        }
        return result.join("");
};

console.log(reorganizeString("aab"));




