const xlsx = require("xlsx");
const path = require("path");

try {
  // Reading Excel File
  const filePath = path.join(__dirname, "employee_data_.xlsx");
  const workbook = xlsx.readFile(filePath);
  const sheet = workbook.Sheets[workbook.SheetNames[0]];
  const data = xlsx.utils.sheet_to_json(sheet);

  // Calculate Bonuses
  data.forEach((employee) => {
    if (employee.AnnualSalary < 50000) {
      employee.BonusPercentage = 5;
    } else if (
      employee.AnnualSalary >= 50000 &&
      employee.AnnualSalary <= 100000
    ) {
      employee.BonusPercentage = 7;
    } else {
      employee.BonusPercentage = 10;
    }

    employee.BonusAmount = (employee.BonusPercentage / 100) * employee.AnnualSalary;
  });

  // Create a new worksheet with the modified data
  const newSheet = xlsx.utils.json_to_sheet(data);

  // Add header row for the new columns
  xlsx.utils.sheet_add_aoa(newSheet, [["BonusPercentage", "BonusAmount"]], {
    origin: -1,
  });

  // Create a new workbook with the new sheet
  const newWorkbook = xlsx.utils.book_new();
  xlsx.utils.book_append_sheet(newWorkbook, newSheet, "Sheet1");

  // Write the new workbook to a new Excel file
  const newFilePath = path.join(__dirname, "employee_data_with_bonus.xlsx");
  xlsx.writeFile(newWorkbook, newFilePath);

  console.log(`New Excel file created at: ${newFilePath}`);
} catch (error) {
  console.error(`Error: ${error.message}`);
}

/*
// Create a new worksheet with the modified data
function calculateBonus(data) {
  data.forEach((employee) => {
    const { BonusPercentage, BonusAmount } = calculateBonus(
      employee.AnnualSalary
    );
    employee.BonusPercentage = BonusPercentage;
    employee.BonusAmount = BonusAmount;
  });
}

// Create a new worksheet with updated data
const newSheet = XLSX.utils.json_to_sheet(data);

// Write the updated data to a new Excel file
const newWorkbook = XLSX.utils.book_new();
XLSX.utils.book_append_sheet(newWorkbook, newSheet, "Sheet1");
const newFilePath = path.join(__dirname, "updated_employee_data.xlsx");
XLSX.writeFile(newWorkbook, newFilePath);

console.log(New Excel file with updated data created at: ${newFilePath});

*/