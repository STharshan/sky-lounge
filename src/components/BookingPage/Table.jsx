import { useState } from "react";
import { Sofa } from "lucide-react";

const tables = [
    { id: 1, top: "top-12", left: "left-12" },
    { id: 2, top: "top-12", left: "left-1/2 -translate-x-1/2" },
    { id: 3, top: "top-12", left: "right-12" },
    { id: 4, top: "top-1/3 -translate-y-1/2", left: "left-8" },
    { id: 5, top: "top-1/3 -translate-y-1/2", left: "left-1/3 -translate-x-1/2" },
    { id: 6, top: "top-1/3 -translate-y-1/2", left: "right-1/3 -translate-x-1/2" },
    { id: 7, top: "top-1/3 -translate-y-1/2", left: "right-8" },
    { id: 8, top: "bottom-1/3", left: "left-1/4 -translate-x-1/2" },
    { id: 9, top: "bottom-1/3", left: "right-1/4 -translate-x-1/2" },
    { id: 10, top: "bottom-12", left: "left-1/2 -translate-x-1/2" },
];

export default function TableSelector() {
    const [selectedTables, setSelectedTables] = useState([]);

    const toggleTable = (id) => {
        setSelectedTables((prev) =>
            prev.includes(id)
                ? prev.filter((t) => t !== id)
                : [...prev, id]
        );
    };

    return (
        <section className="w-full px-4 md:px-10 py-12 bg-[#1B3A2D] font-['Lato']">
            {/* H2 Title: Cormorant Garamond 42pt */}
            <h2 className="font-['Cormorant_Garamond'] text-[32px] md:text-[42px] font-bold text-center mb-10 text-[#B8975A]">
                Select Your Table(s)
            </h2>

            {/* Floor Plan */}
            <div className="relative max-w-6xl mx-auto w-full h-113 md:h-150 rounded-2xl overflow-hidden shadow-2xl border-2 border-[#B8975A] bg-[#2A5A44]">
                <div className="absolute inset-0 opacity-10 bg-[linear-gradient(45deg,transparent_25%,rgba(0,0,0,.2)_25%,rgba(0,0,0,.2)_50%,transparent_50%,transparent_75%,rgba(0,0,0,.2)_75%)] bg-size-[20px_20px]" />
                
                {/* Floor Plan label: Cinzel 10pt Category Label */}
                <p className="p-4 font-['Cinzel'] text-[10px] md:text-[12px] uppercase tracking-[0.14em] font-semibold text-[#B8975A]">
                    Floor Plan
                </p>

                {/* Tables */}
                {tables.map((table) => {
                    const isSelected = selectedTables.includes(table.id);

                    return (
                        <div
                            key={table.id}
                            className={`absolute ${table.top} ${table.left} flex flex-col items-center`}
                        >
                            <button
                                onClick={() => toggleTable(table.id)}
                                className="flex flex-col items-center gap-1 p-2 md:p-3 transition-transform duration-300 hover:scale-110"
                            >
                                <div
                                    className={`rounded-lg shadow-lg flex items-center justify-center transition-all duration-300
                                    ${isSelected
                                            ? "bg-[#B8975A] text-[#0A1F12]"
                                            : "bg-[#1B3A2D] text-[#B8975A]"
                                        }`}
                                    style={{ padding: "10px" }}
                                >
                                    <Sofa size={28} />
                                </div>

                                {/* Table Label: Cinzel 10pt Badge style */}
                                <span
                                    className={`font-['Cinzel'] text-[10px] md:text-[11px] font-bold uppercase tracking-widest transition-colors
                                    ${isSelected ? "text-[#B8975A]" : "text-[#1B3A2D]"}`}
                                >
                                    Table {table.id}
                                </span>
                            </button>
                        </div>
                    );
                })}

                {/* Legend: Lato 11pt-14pt */}
                <div className="absolute bottom-4 right-4 md:right-6 bg-[#1B3A2D] border border-[#B8975A] rounded-lg p-3 md:p-4 text-xs md:text-sm shadow-lg">
                    <p className="font-['Cinzel'] text-[11px] uppercase tracking-[0.14em] font-semibold mb-2 text-[#F0E0B0]">
                        Table Status
                    </p>

                    <div className="flex items-center gap-2 mb-2 text-[#F0E0B0] font-normal">
                        <div className="w-5 h-5 bg-[#1B3A2D] border border-[#B8975A] rounded-sm flex items-center justify-center">
                            <Sofa size={12} />
                        </div>
                        <span>Available</span>
                    </div>

                    <div className="flex items-center gap-2 text-[#B8975A] font-bold">
                        <div className="w-5 h-5 bg-[#B8975A] rounded-sm flex items-center justify-center text-[#0A1F12]">
                            <Sofa size={12} />
                        </div>
                        <span>Selected (Click to toggle)</span>
                    </div>
                </div>
            </div>

            {/* Selected Tables Display */}
            <div className="mt-12 max-w-6xl mx-auto p-6 rounded-xl text-center shadow-lg border-2 bg-[#2A5A44] border-[#B8975A]">
                {/* Labels: Lato 16pt Bold */}
                <p className="font-['Lato'] text-[16px] font-bold mb-3 text-[#F0E0B0]">
                    Your Selected Tables
                </p>

                <p className="font-['Lato'] text-[13px] md:text-[14px] text-[#F0E0B0] mb-2 leading-[1.7]">
                    {selectedTables.length} table(s) selected
                </p>

                {/* Results: Cormorant 36pt (Menu Section style) */}
                <p className="font-['Cormorant_Garamond'] text-[24px] md:text-[36px] font-bold text-[#B8975A] transition-all duration-300">
                    {selectedTables.length === 0 ? (
                        "No tables selected"
                    ) : (
                        [...selectedTables]
                            .sort((a, b) => a - b)
                            .map((table, index) => (
                                <span key={table}>
                                    Table {table}
                                    {index !== selectedTables.length - 1 && ", "}
                                </span>
                            ))
                    )}
                </p>
            </div>
        </section>
    );
}