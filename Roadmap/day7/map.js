let price = [3, 7, 4, 6, 10, 2];

    console.log(price.map((value) => {
        if (value < 5) {
            return (value - (10 / 100)*value);
        }
        else if (value > 5) {
            return(value - (20 / 100)*value);
        }
    }));


