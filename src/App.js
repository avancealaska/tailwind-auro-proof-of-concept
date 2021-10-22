import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="grid grid-cols-3 sm:grid-cols-4 lg:grid-cols-6 space-x-2">
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
      <section>
        <h2>Alert</h2>
        <ul>
          <li>
            <span className="text-alert-notification-on-light">
              notification-on-light
            </span>
          </li>
          <li>
            <span className="text-alert-notification-on-dark">
              notification-on-dark
            </span>
          </li>
          <li>
            <span className="text-alert-warning-on-light">
              warning-on-light
            </span>
          </li>
          <li>
            <span className="text-alert-error-on-light">error-on-light</span>
          </li>
          <li>
            <span className="text-alert-error-on-dark">error-on-dark</span>
          </li>
          <li>
            <span className="text-alert-success-on-light">
              success-on-light
            </span>
          </li>
          <li>
            <span className="text-alert-success-on-dark">success-on-dark</span>
          </li>
          <li>
            <span className="text-alert-advisory-on-light">
              advisory-on-light
            </span>
          </li>
          <li>
            <span className="text-alert-advisory-on-dark">
              advisory-on-dark
            </span>
          </li>
        </ul>
      </section>
      <section>
        <h2>Base</h2>
        <ul>
          <li>
            <span className="text-base-white">white</span>
          </li>
          <li>
            <span className="text-base-white-opacity-40">white-opacity-40</span>
          </li>
          <li>
            <span className="text-base-black">black</span>
          </li>
          <li>
            <span className="text-base-black-opacity-15">black-opacity-15</span>
          </li>
        </ul>
      </section>
      <section>
        <h2>Brand</h2>
        <ul>
          <li>
            <span className="text-brand-midnight-100">midnight-100</span>
          </li>
          <li>
            <span className="text-brand-midnight-200">midnight-200</span>
          </li>
          <li>
            <span className="text-brand-midnight-300">midnight-300</span>
          </li>
          <li>
            <span className="text-brand-midnight-400">midnight-400</span>
          </li>
          <li>
            <span className="text-brand-midnight-500">midnight-500</span>
          </li>
          <li>
            <span className="text-brand-atlas-100">atlas-100</span>
          </li>
          <li>
            <span className="text-brand-atlas-200">atlas-200</span>
          </li>
          <li>
            <span className="text-brand-atlas-300">atlas-300</span>
          </li>
          <li>
            <span className="text-brand-atlas-400">atlas-400</span>
          </li>
          <li>
            <span className="text-brand-atlas-500">atlas-500</span>
          </li>
          <li>
            <span className="text-brand-breeze-100">breeze-100</span>
          </li>
          <li>
            <span className="text-brand-breeze-200">breeze-200</span>
          </li>
          <li>
            <span className="text-brand-breeze-300">breeze-300</span>
          </li>
          <li>
            <span className="text-brand-breeze-400">breeze-400</span>
          </li>
          <li>
            <span className="text-brand-breeze-500">breeze-500</span>
          </li>
          <li>
            <span className="text-brand-tropical-100">tropical-100</span>
          </li>
          <li>
            <span className="text-brand-tropical-200">tropical-200</span>
          </li>
          <li>
            <span className="text-brand-tropical-300">tropical-300</span>
          </li>
          <li>
            <span className="text-brand-tropical-400">tropical-400</span>
          </li>
          <li>
            <span className="text-brand-tropical-500">tropical-500</span>
          </li>
          <li>
            <span className="text-brand-alpine-100">alpine-100</span>
          </li>
          <li>
            <span className="text-brand-alpine-200">alpine-200</span>
          </li>
          <li>
            <span className="text-brand-alpine-300">alpine-300</span>
          </li>
          <li>
            <span className="text-brand-alpine-400">alpine-400</span>
          </li>
          <li>
            <span className="text-brand-alpine-500">alpine-500</span>
          </li>
          <li>
            <span className="text-brand-flamingo-100">flamingo-100</span>
          </li>
          <li>
            <span className="text-brand-flamingo-200">flamingo-200</span>
          </li>
          <li>
            <span className="text-brand-flamingo-300">flamingo-300</span>
          </li>
          <li>
            <span className="text-brand-flamingo-400">flamingo-400</span>
          </li>
          <li>
            <span className="text-brand-flamingo-500">flamingo-500</span>
          </li>
          <li>
            <span className="text-brand-canyon-100">canyon-100</span>
          </li>
          <li>
            <span className="text-brand-canyon-200">canyon-200</span>
          </li>
          <li>
            <span className="text-brand-canyon-300">canyon-300</span>
          </li>
          <li>
            <span className="text-brand-canyon-400">canyon-400</span>
          </li>
          <li>
            <span className="text-brand-canyon-500">canyon-500</span>
          </li>
          <li>
            <span className="text-brand-goldcoast-100">goldcoast-100</span>
          </li>
          <li>
            <span className="text-brand-goldcoast-200">goldcoast-200</span>
          </li>
          <li>
            <span className="text-brand-goldcoast-300">goldcoast-300</span>
          </li>
          <li>
            <span className="text-brand-goldcoast-400">goldcoast-400</span>
          </li>
          <li>
            <span className="text-brand-goldcoast-500">goldcoast-500</span>
          </li>
          <li>
            <span className="text-brand-neutral-100">neutral-100</span>
          </li>
          <li>
            <span className="text-brand-neutral-200">neutral-200</span>
          </li>
          <li>
            <span className="text-brand-neutral-300">neutral-300</span>
          </li>
          <li>
            <span className="text-brand-neutral-400">neutral-400</span>
          </li>
          <li>
            <span className="text-brand-neutral-500">neutral-500</span>
          </li>
          <li>
            <span className="text-brand-gray-100">gray-100</span>
          </li>
          <li>
            <span className="text-brand-gray-200">gray-200</span>
          </li>
          <li>
            <span className="text-brand-gray-300">gray-300</span>
          </li>
          <li>
            <span className="text-brand-gray-400">gray-400</span>
          </li>
          <li>
            <span className="text-brand-gray-500">gray-500</span>
          </li>
        </ul>
      </section>
      <section>
        <h2>Icon</h2>
        <ul>
          <li>
            <span className="text-icon-primary-on-light">primary-on-light</span>
          </li>
          <li>
            <span className="text-icon-primary-on-dark">primary-on-dark</span>
          </li>
          <li>
            <span className="text-icon-emphasis-on-light">
              emphasis-on-light
            </span>
          </li>
          <li>
            <span className="text-icon-emphasis-on-dark">emphasis-on-dark</span>
          </li>
          <li>
            <span className="text-icon-accent-on-light">accent-on-light</span>
          </li>
          <li>
            <span className="text-icon-accent-on-dark">accent-on-dark</span>
          </li>
          <li>
            <span className="text-icon-disabled-on-light">
              disabled-on-light
            </span>
          </li>
          <li>
            <span className="text-icon-disabled-on-dark">disabled-on-dark</span>
          </li>
        </ul>
      </section>
      <section>
        <h2>State</h2>
        <ul>
          <li>
            <span className="text-state-error-100">error-100</span>
          </li>
          <li>
            <span className="text-state-error-500">error-500</span>
          </li>
          <li>
            <span className="text-state-success-100">success-100</span>
          </li>
          <li>
            <span className="text-state-success-500">success-500</span>
          </li>
          <li>
            <span className="text-state-warning-500">warning-500</span>
          </li>
        </ul>
      </section>
      <section>
        <h2>UI</h2>
        <ul>
          <li>
            <span className="text-ui-default-on-light">default-on-light</span>
          </li>
          <li>
            <span className="text-ui-default-on-dark">default-on-dark</span>
          </li>
          <li>
            <span className="text-ui-hover-on-light">hover-on-light</span>
          </li>
          <li>
            <span className="text-ui-hover-on-dark">hover-on-dark</span>
          </li>
          <li>
            <span className="text-ui-active-on-light">active-on-light</span>
          </li>
          <li>
            <span className="text-ui-active-on-dark">active-on-dark</span>
          </li>
          <li>
            <span className="text-ui-disabled-on-light">disabled-on-light</span>
          </li>
          <li>
            <span className="text-ui-disabled-on-dark">disabled-on-dark</span>
          </li>
        </ul>
      </section>
    </div>
  );
}

export default App;
