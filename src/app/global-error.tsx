"use client";

export default function GlobalError({
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  return (
    <html>
      <body>
        <div className="global-error-container">
          <h2>Algo deu errado!</h2>
          <button onClick={() => reset()} className="reset-button">
            Tente novamente
          </button>
          <style jsx>{`
            .global-error-container {
              display: flex;
              flex-direction: column;
              align-items: center;
              justify-content: center;
              height: 100vh;
              text-align: center;
              padding: 0 20px;
            }
            .reset-button {
              margin-top: 20px;
              padding: 10px 20px;
              background-color: #0070f3;
              color: white;
              border: none;
              border-radius: 4px;
              cursor: pointer;
            }
            .reset-button:hover {
              background-color: #0051a2;
            }
          `}</style>
        </div>
      </body>
    </html>
  );
}
