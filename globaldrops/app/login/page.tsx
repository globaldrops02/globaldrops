import Link from "next/link";

export default function Login(){return <main className="auth"><div className="auth-card"><div className="logo">Global<span>Drops</span></div><h1>Entrar</h1><p>Acede ao teu painel de revendedor.</p><form><label>Email<input type="email" placeholder="o-teu@email.com"/></label><label>Palavra-passe<input type="password" placeholder="••••••••"/></label><button className="button" type="button">Entrar</button></form><Link href="/cadastro">Ainda não tens conta? Criar conta</Link></div></main>}
