var topKFrequent = function(nums, k) {
    let count = {}

    //Count how many occurences there are.
    for(let i = 0; i < nums.length; i++){
        //New entry? Set to 0.
        if(count[nums[i]] == undefined){
            count[nums[i]] = 0;
        }
        else{
            count[nums[i]]++;
        }
    }
    
    //Get all keys
    let keys = Object.keys(count);

    //Sort keys based on their counts
    let output = keys.sort((a,b) =>{
        if(count[a] < count[b]){
            return 1;
        }
        else if (count[a] == count[b]){
            return 0;
        }
        else if (count[a] > count[b]){
            return -1;
        }
    })

    return output.slice(0,k)
};
