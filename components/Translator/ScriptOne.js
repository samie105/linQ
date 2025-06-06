"use client";
import Script from "next/script";
import { useEffect } from "react";

const Scripter = () => {
  useEffect(() => {
    // Define the googleTranslateElementInit function
    window.googleTranslateElementInit = () => {
      new window.google.translate.TranslateElement(
        {
          pageLanguage: "en", // Set the default page language
          includedLanguages:
            "af,sq,am,ar,hy,az,eu,be,bn,bs,bg,ca,ceb,ny,zh-CN,zh-TW,co,hr,cs,da,nl,en,eo,et,tl,fi,fr,fy,gl,ka,de,el,gu,ht,ha,haw,iw,hi,hmn,hu,is,ig,id,ga,it,ja,jw,kn,kk,km,ko,ku,ky,lo,la,lv,lt,lb,mk,mg,ms,ml,mt,mi,mr,mn,ne,no,or,ps,fa,pl,pt,pa,ro,ru,sm,gd,sr,st,sn,sd,si,sk,sl,so,es,su,sw,sv,tg,ta,te,th,tr,uk,ur,ug,uz,vi,cy,xh,yi,yo,zu",
          // Display in user's preferred language
          multilanguagePage: true,
          // Automatically translate based on user's preference
          autoTranslate: true,
        },
        "google_translate_element"
      );
    };
  }, []);

  return (
    <>
      <Script
        src="//translate.google.com/translate_a/element.js?cb=googleTranslateElementInit"
        strategy="afterInteractive"
      />
      <div id="google_translate_element"></div>
    </>
  );
};

export default Scripter;
