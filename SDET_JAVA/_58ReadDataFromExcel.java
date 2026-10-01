package SDET;
import org.apache.poi.xssf.usermodel.XSSFSheet;
import org.apache.poi.xssf.usermodel.XSSFWorkbook;

import java.io.File;
import java.io.FileInputStream;
import java.io.IOException;
public class _58ReadDataFromExcel {
    public static void main(String[] args) throws IOException {
        File file = new File("C:\\Users\\DELL\\Desktop\\ReadDataSel.xlsx");
        FileInputStream fs = new FileInputStream(file);
        XSSFWorkbook wb= new XSSFWorkbook(fs);
        XSSFSheet sheet1=wb.getSheet("ReadData");
        System.out.println(sheet1.getRow(1).getCell(1).getStringCellValue());
        System.out.println(sheet1.getRow(3).getCell(0).getNumericCellValue());

        //Find number of rows in excel file
        int rowCount=sheet1.getLastRowNum()-sheet1.getFirstRowNum();
        System.out.println("row count:"+rowCount);

        //iterate over all the row to print the data present in each cell.
        for(int i=0;i<=rowCount;i++){

            //get cell count in a row
            int cellcount=sheet1.getRow(i).getLastCellNum();

            //iterate over each cell to print its value
            for(int j=0;j<cellcount;j++){
                System.out.print(sheet1.getRow(i).getCell(j).getStringCellValue().toString() +"||");
            }
            System.out.println();
        }
    }
}
