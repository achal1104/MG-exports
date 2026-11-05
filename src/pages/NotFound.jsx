import usePageMeta from "../usePageMeta.js";import {Btn} from "../components/ui.jsx";
export default function NotFound(){usePageMeta("Page Not Found","The page you are looking for could not be found.");return <section><div className="wrap center"><h1>404</h1><p className="muted">This page could not be found.</p><Btn to="/">Back to Home</Btn></div></section>}
