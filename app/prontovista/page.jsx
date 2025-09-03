import ProntoVista from "./Prontovista";
import { Suspense } from "react";

export const metadata = {
    title: 'Vista'
};

const Page = ({}) => {
    return (
        <Suspense>
            <ProntoVista />
        </Suspense>
    )
}

export default Page;