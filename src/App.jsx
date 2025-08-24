import { useEffect } from "react";

export default function App() {
  useEffect(() => {
    window.location.replace("https://madiera.app.n8n.cloud/form/b0c247d1-2b20-43db-9bb9-7c921d747fda");
  }, []);

  return (
    <div style={{ padding: 24, fontFamily: "system-ui" }}>
      Redirecting to the form…
      <noscript>
        <p>
          If you are not redirected,{" "}
          <a href="https://YOUR-N8N-FORM-URL">click here</a>.
        </p>
      </noscript>
    </div>
  );
}
