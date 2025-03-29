import Image from "next/image";

const Block = ({ title, para }) => {
    return (
        <div className="flex items-center border-r border-gray-300 px-4 py-3 w-64 min-h-[80px] hover:bg-gray-100 transition-all rounded-lg shadow-sm">
            {/* Content */}
            <div className="flex-1">
                <h3 className="font-semibold text-gray-800 text-sm md:text-base">{title}</h3>
                <p className="text-gray-500 text-xs md:text-sm truncate">{para}</p>
            </div>
        </div>
    );
};

export default Block;
