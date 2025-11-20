import { Table, type TableProps } from "antd";
import type { ColumnsType } from "antd/lib/table";

// For spreadsheets, we generate synthetic keys based on row indices
export const SPREADSHEET_ROW_KEY_PROP = "__key__";

const PAGE_SIZE = 25;

const TABLE_PAGINATION: TableProps["pagination"] = { pageSize: PAGE_SIZE };
const TABLE_SCROLL: TableProps["scroll"] = { x: true };

export type SpreadsheetTableProps<T extends object> = {
  columns: ColumnsType<T>;
  dataSource: T[];
  loading?: boolean;
  showHeader?: boolean;
};

const SpreadsheetTable = <T extends object>({ columns, dataSource, loading, showHeader }: SpreadsheetTableProps<T>) => (
  <Table<T>
    size="small"
    bordered={true}
    showHeader={showHeader ?? false}
    pagination={dataSource.length <= PAGE_SIZE ? false : TABLE_PAGINATION}
    scroll={TABLE_SCROLL}
    rowKey={SPREADSHEET_ROW_KEY_PROP}
    columns={columns}
    dataSource={dataSource}
    loading={loading}
  />
);

export default SpreadsheetTable;
