module.exports = function main(inputs) {
    // console.log("Debug Info");
    // return 'Hello World!';

    return printReceipt(inputs);
};

    function printReceipt (inputs){
        let receiptFormat;
        let summary = [];
        let totalCost = 0;

        for(let i = 0; i < inputs.length; i++){

            let newItem = true;

            for(let j = 0; j < summary.length; j++){
                if(inputs[i].Barcode == summary[j].Barcode){
                    summary[j].Count++;
                    summary[j].TotalPrice += inputs[i].Price;
                    newItem = false;
                    break;
                }
            }
            
            if(newItem === true){
                    summary.push({Barcode : inputs[i].Barcode, Name : inputs[i].Name, Price : inputs[i].Price, Unit : inputs[i].Unit, Count : 1, TotalPrice: inputs[i].Price});
            }
    
        }


        receiptFormat = '***<store earning no money>Receipt ***\n';

        for (let n = 0; n < summary.length; n++){

            if(summary[n].Unit == 'bottle'){
                receiptFormat += 'Name: ' + summary[n].Name + ', Quantity: ' + summary[n].Count + ' bottles, Unit price: '+ summary[n].Price + '.00' +' (yuan), Subtotal: ' + summary[n].TotalPrice + '.00' + ' (yuan)\n';
                totalCost += summary[n].TotalPrice;
            }

            else{   
                receiptFormat += 'Name: ' + summary[n].Name + ', Quantity: ' + summary[n].Count + ', Unit price: '+ summary[n].Price + '.00' +' (yuan), Subtotal: ' + summary[n].TotalPrice + '.00' + ' (yuan)\n';
                totalCost += summary[n].TotalPrice;
            } 
        
        }
    
        receiptFormat += '----------------------\n';
        receiptFormat += 'Total: ' + totalCost + '.00' +' (yuan)\n';
        receiptFormat += '**********************\n';


        return receiptFormat;
    }