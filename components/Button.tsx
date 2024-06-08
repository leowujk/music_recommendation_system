import Link from "next/link";

export interface ButtonProps{
    Buttonhref: string;
    Name: string;
}

//一個按鈕
const Button: React.FC<ButtonProps> = ({Buttonhref, Name}) => {
    return(
        <div>
            <Link href={Buttonhref} className=" font-bold border border-orange-50 inline-block p-2 bg-lime-500 text-slate-950 rounded-lg transition duration-300 hover:bg-orange-300">
                {Name}
            </Link>
        </div>
    );
}



//一排按鈕
export const ButtonGroups: React.FC<{arr: string[]}> = ({arr}) => {
    return(
        <div className="grid grid-cols-2 lg:grid-cols-4 items-center justify-end px-15 py-2">
            {arr.map((item, index) => (
                <div key={index} className=" p-2">
                    <Button Buttonhref={item+"Name"} Name={item+"Name"} />                        
                </div>
            ))}
        </div>
    );
}

export default Button;


