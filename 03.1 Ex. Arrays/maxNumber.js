function maxNumber(arr) {
    let result = [];
        while(arr.length !== 0) {
            let [current, biggest] = [arr.shift(), Math.max(...arr)]
            if(current > biggest) result.push(current);
       }
       console.log(result.join(' '));
    }
maxNumber([1, 4, 3, 2]);
