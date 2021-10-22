import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="flex">
      <section>
        <h2>Background colors</h2>
        <ul>
          <li>
            <div className="bg-lightest">lightest</div>
          </li>
          <li>
            <div className="bg-lighter">lighter</div>
          </li>
          <li>
            <div className="bg-darker">darker</div>
          </li>
          <li>
            <div className="bg-darkest">darkest</div>
          </li>
        </ul>
      </section>
      <section>
        <h2>Border colors</h2>
        <ul>
          <li>
            <div className="border border-primary-on-light">
              primary-on-light
            </div>
          </li>
          <li>
            <div className="border border-primary-on-dark">primary-on-dark</div>
          </li>
          <li>
            <div className="border border-active-on-light">active-on-light</div>
          </li>
          <li>
            <div className="border border-active-on-dark">active-on-dark</div>
          </li>
          <li>
            <div className="border border-error-on-light">error-on-light</div>
          </li>
          <li>
            <div className="border border-error-on-dark">error-on-dark</div>
          </li>
          <li>
            <div className="border border-disabled-on-light">
              disabled-on-light
            </div>
          </li>
          <li>
            <div className="border border-disabled-on-dark">
              disabled-on-dark
            </div>
          </li>
          <li>
            <div className="border border-focus-on-light">focus-on-light</div>
          </li>
          <li>
            <div className="border border-focus-on-dark">focus-on-dark</div>
          </li>
          <li>
            <div className="border border-divider-on-light">
              divider-on-light
            </div>
          </li>
          <li>
            <div className="border border-divider-on-dark">divider-on-dark</div>
          </li>
        </ul>
      </section>
      <section>
        <h2>Text color</h2>
        <ul>
          <li>
            <span className="text-primary-on-light">primary-on-light</span>
          </li>
          <li>
            <span className="text-primary-on-dark">primary-on-dark</span>
          </li>
          <li>
            <span className="text-secondary-on-light">secondary-on-light</span>
          </li>
          <li>
            <span className="text-secondary-on-dark">secondary-on-dark</span>
          </li>
          <li>
            <span className="text-link-on-light">link-on-light</span>
          </li>
          <li>
            <span className="text-link-on-dark">link-on-dark</span>
          </li>
          <li>
            <span className="text-error-on-light">error-on-light</span>
          </li>
          <li>
            <span className="text-error-on-dark">error-on-dark</span>
          </li>
          <li>
            <span className="text-disabled-on-light">disabled-on-light</span>
          </li>
          <li>
            <span className="text-disabled-on-dark">disabled-on-dark</span>
          </li>
        </ul>
      </section>
      <section>
        <h2>Font family</h2>
        <ul>
          <li>
            <span className="font-default">default</span>
          </li>
          <li>
            <span className="font-mono">mono</span>
          </li>
        </ul>
      </section>
    </div>
  );
}

export default App;
