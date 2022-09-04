import type { NextPage } from "next";
import { SimpleButtonContainer } from './style';


interface SimpleButtonProps{
    bg: string;
    fg: string;
    br?: number;
    children: any;
}
export const SimpleButton: NextPage<SimpleButtonProps> = ({bg, fg, br, children}) => {
    return (
        <SimpleButtonContainer bg={bg} fg={fg} br={br}>
            {children}
        </SimpleButtonContainer>
    )
}