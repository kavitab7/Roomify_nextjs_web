const Header2 = () => {
    const List = [
        { name: "Pune" },
        { name: "Mumbai" },
        { name: "Noida" },
        { name: "Delhi" },
        { name: "Bangalore" },
        { name: "Hyderabad" },
    ];

    return (
        <div className="bg-gray-100">
            <div className="flex px-10 py-3 justify-between flex-wrap">
                {List.map((e) => (
                    <span
                        key={e.name}
                        className="font-medium text-gray-700 hover:text-blue-500 cursor-pointer transition duration-300"
                    >
                        {e.name}
                    </span>
                ))}
            </div>
        </div>
    );
};

export default Header2;
