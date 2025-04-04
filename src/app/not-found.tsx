"use client"

import Link from "next/link"

export default function NotFound() {
  return (
    <div className="not-found-container">
      <h2>404 - Página não encontrada</h2>
      <p>A página que você tentou acessar não existe</p>
      <Link href="/" className="home-link">
        Retornar para Home
      </Link>
      <style jsx>{`
        .not-found-container {
          display: flex;
          flex-direction: column;
          align-items: center;
          justify-content: center;
          height: 100vh;
          text-align: center;
          padding: 0 20px;
        }
        .home-link {
          margin-top: 20px;
          color: #0070f3;
          text-decoration: none;
        }
        .home-link:hover {
          text-decoration: underline;
        }
      `}</style>
    </div>
  )
}

