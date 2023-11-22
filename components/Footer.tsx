import { footerLinks } from "@/constants";
import Image from "next/image";

import purpleLogo from '@/public/logo-purple.svg';
import Link from "next/link";

type footerLinksType={
    title:string,
    links:Array<string>,
}

const FooterLink=({title,links}:footerLinksType)=>(
    <div className="footer_column">
        <h4 className="font-semibold">{title}</h4>
        
        <ul className="flex flex-col gap-2 font-normal">
            {links.map((link)=>(<Link href={link} key={link}>{link}</Link>))}
        </ul>
    </div>
)

const Footer = () => {
  return (
    <footer className="flexStart footer">
        <div className="flex flex-col gap-12 w-full"> 
            <div className="flex-col items-start gap-4">
                <Image src={purpleLogo} alt="scribble" width={115} height={38}/>
                <p className="text-start text-sm font-normal mt-5 max-w-sm">Find the design inpiration and more ideas to be creative, grow, share and to get hired</p>
            </div>

            <div className="flex flex-wrap gap-8">
                <FooterLink title={footerLinks[0].title} links={footerLinks[0].links}/>

                <div className="flex-col gap-10">
                    <FooterLink title={footerLinks[1].title} links={footerLinks[1].links}/>
                    <FooterLink title={footerLinks[2].title} links={footerLinks[2].links}/>
                </div>

                <FooterLink title={footerLinks[3].title} links={footerLinks[3].links}/>

                <div className="flex-col gap-5">
                    <FooterLink title={footerLinks[4].title} links={footerLinks[4].links}/>
                    <FooterLink title={footerLinks[5].title} links={footerLinks[5].links}/>
                </div>

                 <FooterLink title={footerLinks[6].title} links={footerLinks[6].links}/>
            </div>
        </div>

        <div className="flexBetween footer_copyright">
            <p className="font-normal text-gray">@2023 Scribble.All rights reserved</p>

            <p className="text-gray">
                <span className="font-semibold text-dark mr-4">16,777</span>projects sumbitted
            </p>
        </div>

    </footer>
  )
}

export default Footer