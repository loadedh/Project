const main = () => {

    const calculator = (x = 0, y = 1, holdingArr = [0 ,1]) => {
        if (x === 10) {
            return holdingArr;
        }

        const sum = holdingArr[x] + holdingArr[y];
        const incrementX = x + 1, incrementY = y + 1;
        return calculator(incrementX, incrementY, holdingArr.concat(sum))
    }
    
    console.log(calculator());
}
