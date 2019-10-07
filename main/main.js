module.exports = function main(inputs) {
    // console.log("Debug Info");
    // return 'Hello World!';


    function printReceipt (){
        let summary = [];
        let count = 0;
        let sum = 0;

        for (let i=0; i < inputs.length; i++){

            let newItem = true;
            for (let j=0; j < summary.length; j++){
                if (inputs[i] == summary[j].Barcode){
                    sum +=inputs[i].Price;
                    summary[j].Price=sum;
                    summary[j].count++;
                    newEntry = false;
                }
            }

            if(newItem === true){
                sum +=inputs[i].Price;
                summary.push({Barcode: inputs[i].Barcode, Name: inputs[i].Name, Unit: inputs[i].Unit, Price: sum, count: count++}); 
                // newItem = false;
            }

            // else{
            //     sum +=inputs[i].Price;
            //     summary.push({Barcode: inputs[i].Barcode, Name: inputs[i].Name, Unit: inputs[i].Unit, Price: sum, count: count++}); 
            //     newItem = false;
            // }

            
            // else{
            //     sum +=inputs[i].Price;
            //     summary.push({Price: sum, count: count++}); 
            //     newItem = false;
            // }

        }

        return summary;
    }


    return printReceipt();


    // return  '***<store earning no money>Receipt ***\n' +
    // 'Name: Coca-Cola, Quantity: 5 bottles, Unit price: 3.00 (yuan), ' + 'Subtotal: 15.00 (yuan)\n' +
    // 'Name: Sprite, Quantity: 2 bottles, Unit price: 3.00 (yuan), Subtotal: 6.00 (yuan)\n' +
    // 'Name: Battery, Quantity: 1, Unit price: 2.00 (yuan), Subtotal: 2.00 (yuan)\n' +
    // '----------------------\n' +
    // 'Total: 23.00 (yuan)\n' +
    // '**********************\n';
};