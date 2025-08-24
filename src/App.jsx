export default function App() {
  return (
    <div style={{height:'100vh',width:'100vw',margin:0,padding:0}}>
      {/* try iframe first; if it’s blocked, use the redirect version below */}
      <iframe
        src="https://madiera.app.n8n.cloud/form/b0c247d1-2b20-43db-9bb9-7c921d747fda"
        title="n8n form"
        style={{border:'none',height:'100%',width:'100%'}}
      />
    </div>
  )
}
