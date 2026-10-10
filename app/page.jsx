
export default function Home() {
  return (
    <main style={{
      minHeight: "100vh",
      background: "#080b12",
      color: "white",
      fontFamily: "Arial, sans-serif",
      padding: "32px 20px"
    }}>
      <div style={{
        maxWidth: "850px",
        margin: "60px auto"
      }}>
        <p style={{ color: "#6ce6bd" }}>
          GHUFRAN KING DIGITAL
        </p>

        <h1 style={{ fontSize: "42px" }}>
          GHUFRAN KING MD BOT
        </h1>

        <p style={{ color: "#aab6ca", lineHeight: 1.8 }}>
          Your WhatsApp MD Bot Control Center.
          Powered by GHUFRAN KING RDX.
        </p>

        <div style={{
          background: "#151c2a",
          border: "1px solid #293449",
          borderRadius: "14px",
          padding: "22px",
          marginTop: "30px"
        }}>
          <h2>Bot Dashboard</h2>
          <p>Bot Status: Not Connected</p>
          <p>Pairing: Backend Required</p>
          <p>Commands: Coming Soon</p>
        </div>

        <p style={{
          color: "#71819b",
          marginTop: "40px"
        }}>
          Your Digital Growth Partner
        </p>
      </div>
    </main>
  );
}
