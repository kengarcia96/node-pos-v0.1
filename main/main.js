module.exports = function main(inputs) {
    // console.log("Debug Info");
    // return 'Hello World!';


    function printReceipt (){
        let summary = [];
        let count = 0;
        let newItem = true;

        for (let i=0; i < inputs.length; i++){
    
            if(newItem === true){
                summary.push({Barcode: inputs[i].Barcode, Name: inputs[i].Name, Unit: inputs[i].Unit, Price: inputs[i].Price, count: 1}); 
                newItem = false;
            }

            else{
                summary.push({Price: inputs[i].Price+=inputs[i].Price, count: count++}); 
                newItem = false;
            }

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