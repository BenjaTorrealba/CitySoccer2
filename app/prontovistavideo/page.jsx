import Prontovistavideo from "./Prontovistavideo";
import { Suspense } from "react";

export const metadata = {
    title: 'Vista'
};

const Page = ({}) => {
    return (
        <Suspense>
            <Prontovistavideo />
        </Suspense>
    )
}

export default Page;