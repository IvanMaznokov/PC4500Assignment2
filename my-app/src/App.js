import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
		<img src="img/me.png" alt="photo of me"/>
		<h1>About Me Page</h1>
	
		<h2>Degree, Work and Life</h2>
		
		<p>
			My Name is <em>Iv@n M@zn0k0v</em> and I like everything about computers. I am a returning full time student, majoring in 
			Computer Science and I have a full time job, married with two kids, boys, 3 dogs and 5 cats....
		</p>
		
		<h2>Platform Computing Class:</h2>
		<p>So far I find the class interesting, I have been always interested in web design and wanted to dig dip dive and
			learn more about it espeacially with Mobile Development strategies in mind. It is required to have a GibHub account
			for the assignments and here is link to my <a href="https://github.com/IvanMaznokov/pc4500hw1">profile</a>.</p>
			
		<h2>Schools I Have Attended to:</h2>

		<p><ol>
			<li><a href="https://www.craftonhills.edu">Craftonhills Community College</a></li>
			<li><a href="https://www.valleycollege.edu">San Bernardino Community College</a></li>
			<li><a href="https://www.csusb.edu">CSU San Bernardino</a></li>
		</ol></p>
		
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
