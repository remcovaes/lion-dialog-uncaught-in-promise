import { html, LitElement } from 'lit-element';
import { LionDialog } from '@lion/dialog';

customElements.define('lion-dialog', LionDialog);
customElements.define('gui-wrapper', class extends LitElement {
	render() {
		return html`
			<lion-dialog>
				<button slot="invoker">First invoker</button>
				<div slot="content">
					<button @click=${e => e.target.dispatchEvent(new Event('close-overlay', { bubbles: true }))}>Close first dialog</button></br>
					First dialog
					<lion-dialog>
						<button slot="invoker">Second invoker</button>
						<div slot="content">
							<button @click=${e => e.target.dispatchEvent(new Event('close-overlay', { bubbles: true }))}>Close second dialog</button></br>
							Second dialog
						<div>
					</lion-dialog>
				<div>
			</lion-dialog>
		`;
	}
});


