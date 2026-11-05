import {useState} from "react";import {useParams} from "react-router-dom";import {motion,AnimatePresence} from "framer-motion";
import usePageMeta from "../usePageMeta.js";import {PRODUCTS} from "../data/site.js";import {PageHero,Reveal,SectionHead,Btn,ProductCard,Cta,quoteLink} from "../components/ui.jsx";import NotFound from "./NotFound.jsx";
const POS=[["center",1],["left top",1.8],["right bottom",1.8],["center",2.6]];
export default function ProductDetail(){const{id}=useParams();const p=PRODUCTS.find(x=>x.id===id);const[k,sk]=useState(0);
usePageMeta(p?p.name:"Product",p?`${p.name} – ${p.overview}`:"",p?.keywords);if(!p)return <NotFound/>;
const rel=PRODUCTS.filter(x=>x.id!==id&&x.cat===p.cat).concat(PRODUCTS.filter(x=>x.id!==id&&x.cat!==p.cat)).slice(0,3);
return <><PageHero title={p.name} text={p.short} img={p.img}/>
<section><div className="wrap grid g2" style={{gap:44}}><div><div className="zoom" style={{height:380}}><AnimatePresence mode="wait"><motion.img key={k} className="fill" src={p.img} alt={p.name} style={{objectPosition:POS[k][0],transform:`scale(${POS[k][1]})`}} initial={{opacity:0}} animate={{opacity:1}} exit={{opacity:0}} transition={{duration:.25}}/></AnimatePresence></div>
<div className="thumbs">{POS.map((q,i)=><button key={i} className={k===i?"on":""} onClick={()=>sk(i)} aria-label={`View ${i+1}`}><img className="fill" src={p.img} alt="" style={{objectPosition:q[0],transform:`scale(${q[1]})`}}/></button>)}</div></div>
<Reveal><span className="tag">{p.category}</span><h2>Product overview</h2><p className="muted">{p.overview}</p><h3>Product categories</h3><div className="row2" style={{marginTop:0}}>{p.types.map(x=><span key={x} className="chip">{x}</span>)}</div><h3 style={{marginTop:22}}>Applications</h3><ul className="muted">{p.use.map(u=><li key={u}>{u}</li>)}</ul>
<h3 style={{marginTop:22}}>Specifications</h3><table className="tbl"><tbody>{["Product type","Grade","Specifications","Packaging","Minimum order quantity"].map(x=><tr key={x}><td>{x}</td><td>To be confirmed by MG Exports</td></tr>)}</tbody></table>
<div className="row2"><Btn to={quoteLink(p.name+" – bulk inquiry")}>Bulk Inquiry</Btn><Btn to={quoteLink(p.name)} variant="o">Request Quote</Btn></div></Reveal></div></section>
<section className="alt"><div className="wrap"><SectionHead e="Related" t="Related Products"/><div className="grid g3 mt30">{rel.map((x,i)=><ProductCard key={x.id} p={x} i={i}/>)}</div></div></section><Cta/></>}
