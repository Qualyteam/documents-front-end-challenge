import { useState } from 'react';
import { Button } from "antd";
import { noop } from '@babel/types';
import './index.css';

/**
 * @example
 * <Table
 *   header={[
 *       {
 *           title: "Name",
 *           column: "name",
 *       }
 *   ]}
 *   rows={[
 *       {
 *           name: "Example1"
 *       }, {
 *           name: "Example2"
 *       }, {
 *           name: "Example3"
 *       }, {
 *           name: "Example4"
 *       }, {
 *           name: "Example5"
 *           onClick: () => alert(`item ${5} clicked!`)
 *       }, {
 *           name: "Example6"
 *       },
 *   ]}
 *   itemsPerPage={3}
 * />
 */
const Table = ({ header, rows, itemsPerPage }) => {

    const [page, setPage] = useState(1);

    const totalItems = rows.length;
    const totalPages = Math.ceil(totalItems / itemsPerPage);

    const handleNextPageButton = () => {
        if (page < totalPages) {
            setPage(page + 1);
        }
    };

    const handlePreviousPageButton = () => {
        if (page > 1) {
            setPage(page - 1);
        }
    };

    let rowsToRender;
    if (itemsPerPage) {
        rowsToRender = rows.slice((page - 1) * itemsPerPage, (page - 1) * itemsPerPage + itemsPerPage);
    } else {
        rowsToRender = rows;
    }

    return (
        <div>
            <table>
                <thead>
                    <tr>
                        {header.map((h, index) => <th key={`header-${index}`}>{h.title}</th>)}
                    </tr>
                </thead>
                <tbody>
                    {rowsToRender.map((row, index) => (
                        <tr key={`row-${index}`} onClick={row.onClick || noop}>
                            {header.map((h, index) =>
                                <td key={`data-${index}`}>
                                    {row[h.column]}
                                </td>
                            )}
                        </tr>
                    ))}
                </tbody>
            </table>
            {itemsPerPage &&
                <div className="table-pagination">
                    <Button onClick={handlePreviousPageButton} disabled={page === 1}>
                        Anterior
                    </Button>
                    <div className="table-pagination--page-display">
                        {page} / {totalPages}
                    </div>
                    <Button onClick={handleNextPageButton} disabled={page >= totalPages}>
                        Próxima
                    </Button>
                </div>
            }
        </div>
    );
}

export { Table };
