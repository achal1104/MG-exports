import {useEffect} from "react";
export default function usePageMeta(title,desc,keywords){useEffect(()=>{document.title=`${title} | MG Exports`;
const set=(n,v)=>{if(!v)return;let m=document.querySelector(`meta[name="${n}"]`);if(!m){m=document.createElement("meta");m.name=n;document.head.appendChild(m)}m.content=v};
set("description",desc);set("keywords",keywords)},[title,desc,keywords])}
