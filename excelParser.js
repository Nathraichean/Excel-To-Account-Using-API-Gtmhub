let ExcelToJSON = function() {

    //Parses the document
    this.parseExcel = function(file, onSuccess) {
      let reader = new FileReader();

      reader.onload = function(e) {
        let data = e.target.result;
        let result = [];
        let workbook = XLSX.read(data, {
          type: 'binary'
        });

        //Iterates all of the sheets
        workbook.SheetNames.forEach(function(sheetName) {

          //Puts all data from a specific sheet into currentSheetItems
          let currentSheetItems = XLSX.utils.sheet_to_row_object_array(workbook.Sheets[sheetName]);

          //Adds that data to result in a dictionary format with the sheet name as the Key and the data as the Value
          result[sheetName]=currentSheetItems;
        })

        //Passes the result dictionary to where the file is read
        onSuccess(result);
      };
      
      //Catches potential errors
      reader.onerror = function(ex) {
        console.log(ex);
      };

      reader.readAsBinaryString(file);
    };
};
