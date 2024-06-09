import { Link } from "@inertiajs/react";
import {
    flexRender,
    getCoreRowModel,
    useReactTable,
} from "@tanstack/react-table";

export function DataTable({ columns, data }) {
    // Init table
    const table = useReactTable({
        data: data.data,
        columns,
        getCoreRowModel: getCoreRowModel(),
    });

    return (
        <div className="relative overflow-auto border border-gray-800 rounded-lg">
            <table className="w-full text-sm">
                <thead className="text-base tracking-wide text-gray-600 dark:text-gray-300 [&_tr]:border-b [&_tr]:border-gray-300 dark:[&_tr]:border-gray-700">
                    {table.getHeaderGroups().map((headerGroup) => (
                        <tr key={headerGroup.id}>
                            {headerGroup.headers.map((header) => {
                                return (
                                    <th
                                        className="h-14 px-6 text-left align-middle font-medium [&:has([role=checkbox])]:pr-0 whitespace-nowrap"
                                        key={header.id}
                                    >
                                        {header.isPlaceholder
                                            ? null
                                            : flexRender(
                                                  header.column.columnDef
                                                      .header,
                                                  header.getContext()
                                              )}
                                    </th>
                                );
                            })}
                        </tr>
                    ))}
                </thead>
                <tbody>
                    {table.getRowModel().rows?.length ? (
                        table.getRowModel().rows.map((row) => (
                            <tr
                                key={row.id}
                                data-state={row.getIsSelected() && "selected"}
                            >
                                {row.getVisibleCells().map((cell) => (
                                    <td
                                        className="px-6 py-4 align-middle [&:has([role=checkbox])]:pr-0 max-w-[230px] truncate text-gray-600 dark:text-gray-400"
                                        key={cell.id}
                                    >
                                        {flexRender(
                                            cell.column.columnDef.cell,
                                            cell.getContext()
                                        )}
                                    </td>
                                ))}
                            </tr>
                        ))
                    ) : (
                        <tr>
                            <td
                                colSpan={columns.length}
                                className="h-28 text-center text-lg text-gray-500"
                            >
                                No data found
                            </td>
                        </tr>
                    )}
                </tbody>
            </table>
            <div className="border-t border-gray-700 py-4 flex justify-center text-gray-400">
                {data.links.map((link) =>
                    link.url ? (
                        <Link
                            className={`p-1 mx-1 hover:text-gray-300 ${
                                link.active ? "text-blue-500" : ""
                            }`}
                            key={link.label}
                            preserveScroll
                            href={link.url}
                            dangerouslySetInnerHTML={{ __html: link.label }}
                        />
                    ) : (
                        <span
                            className="p-1 mx-1 text-gray-500"
                            key={link.label}
                            dangerouslySetInnerHTML={{ __html: link.label }}
                        />
                    )
                )}
            </div>
        </div>
    );
}
