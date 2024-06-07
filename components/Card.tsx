import Image from "next/image";
import Link from "next/link";

interface CardProps {
    title: string;
    description: string;
    buttonLink: string;
    buttonText: string;
}

//一張卡片
const Card: React.FC<CardProps> = ({ title, description, buttonLink, buttonText }) => {
    return (
        <div className=" max-w-sm rounded-lg overflow-hidden shadow-lg bg-white transform transition duration-300 hover:scale-105">
            <div className=" px-6 pb-4">
                <div className=" font-bold text-2xl mb-3 text-orange-800">{title}</div>
                <p className=" text-lime-950 text-base mb-4">{description}</p>
            </div>
            <div className=" px-6 pb-4">
                <Link href={buttonLink}>
                    <div className=" inline-block bg-blue-500 hover:bg-blue-900 text-gray-100 font-bold px-4 py-2 rounded-full transition duration-300">
                        {buttonText}
                    </div>
                </Link>
            </div>
        </div>
    );
};

//一組卡片
export const CardGroup: React.FC<{ arr: string[] }> = ({ arr }) => {
    return (
        <div className="grid grid-cols-2 lg:grid-cols-4">
            {arr.map((item, index) => (
                <div key={index} className=" p-2">
                    <Card
                        title={item}
                        description={item + "description"}
                        buttonLink={item + "buttonLink"}
                        buttonText={item + "buttonText"}
                    />
                </div>
            ))}
        </div>
    );
}


export default Card;