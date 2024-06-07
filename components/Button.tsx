import Link from "next/link";

interface ButtonProps{
    Buttonhref: string;
    children: React.ReactNode;
}

//一個按鈕
const Button: React.FC<ButtonProps> = ({Buttonhref, children}) => {
    return(
        <div className=" font-bold border border-orange-50 inline-block p-2 bg-lime-500 text-slate-950 rounded-lg transition duration-300 hover:bg-orange-300">
            <Link href={Buttonhref}>
                <div>{children}</div>
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
                    <Button
                        Buttonhref={item}
                        children={item + "content"}
                    />
                </div>
            ))}
        </div>
    );
}

export default Button;


