import './App.css'
import Card from './Components/Card';

function App() {
  return (
    <>
    
      <h1>Resorts Lite</h1>
      <div className='divider'/>
      <div className="main-container">
      <Card image="src\assets\image\1.jpg" country="Indonesia" company="Gili Air Hotel" rating="4.8 ★" price="$590/night" />
      <Card image="src\assets\image\2.jpg" country="Seychelles" company="Hilton Resort" rating="4.2 ★" price="$629/night" />
      <Card image="src\assets\image\3.jpg" country="US Virgin Islands" company="Goa Resort" rating="3.5 ★" price="$485/night" />
      <Card image="src\assets\image\4.jpg" country="Bahamas" company="Kuredu Resort" rating="4.1 ★" price="$729/night" />
      <Card image="src\assets\image\5.jpg" country="Mauritius" company="Trou D'eau Douce" rating="4.9 ★" price="$877/night" />
      <Card image="src\assets\image\6.jpg" country="Bermuda" company="Staniel Cay Hotel" rating="3.2 ★" price="$365/night" />

      </div>
    </>
  );
}

export default App
