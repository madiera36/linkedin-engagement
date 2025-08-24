export default function App() {
  return (
    <div style={{height:'100vh', width:'100vw', margin:0, padding:0}}>
      {/* Show your n8n Form (or later: build your own UI that POSTs to an n8n Webhook) */}
      <iframe
        src="https://madiera.app.n8n.cloud/form/b0c247d1-2b20-43db-9bb9-7c921d747fda"
        style={{height:'100%', width:'100%', border:'none'}}
        title="Post URL"
      />
    </div>
  )
}
