export default function AuthErrorPage() {
  return (
    <main style={{ padding: '4rem', textAlign: 'center' }}>
      <h1 style={{ fontSize: '2rem', fontWeight: 600 }}>Access Denied</h1>

      <p style={{ marginTop: '1rem', color: '#555' }}>
        We were unable to authenticate this application instance.
      </p>

      <p style={{ marginTop: '0.5rem', color: '#777' }}>
        Please contact the system administrator or try again later.
      </p>
    </main>
  );
}
