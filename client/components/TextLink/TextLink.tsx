import { SurfaceProps } from "@/utils/SharedProps";
import { Url } from "url";
import styles from "./TextLink.module.scss";

export interface TextLinkProps extends SurfaceProps {
    /*
    * Provider a link url for the TextLink
    */
    link: string;
    /*
    * Textlink's text content
    */
    children: React.ReactNode;
}

export default function TextLink( props: TextLinkProps ) {
	const {link, children} = props;

	return (
		<a className={styles.textLink} href={link}>{children}</a>
	)
}