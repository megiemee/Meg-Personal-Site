import {ReactNode} from "react";

interface Props {
    children: ReactNode;
}

function Alert({ children }: Props) {
    return (
        <div className="alert alert-primary d-flex justify-content-around" >
            { children }
        </div>
    );

}

export default Alert;