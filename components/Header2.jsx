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
        <div>
            <div className="flex px-10 py-3 bg-gray-100 justify-between">
                {List.map((e) => (
                    <span key={e.name} className="font-medium text-gray-700">
                        {e.name}
                    </span>
                ))}
            </div>
        </div>
    );
};

export default Header2; 
