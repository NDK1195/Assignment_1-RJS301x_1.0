import footerData from "../../data/footer.json";

export default function Footer() {
  return (
    <div className="container mx-auto mb-10 flex justify-around gap-1  text-color-#003580">
      {footerData.map((column) => (
        // Create column
        <div key={column["col_number"]} className="flex flex-col gap-3">
          {/* Create item in column */}
          {column["col_values"].map((columnValue) => (
            <a href="#" key={columnValue}>
              {columnValue}
            </a>
          ))}
        </div>
      ))}
    </div>
  );
}
